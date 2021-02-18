const fs = require('fs');
import matter from 'gray-matter';

const parseNotes = (content) => {
    let series = [];
    try {
        const lines = content.split(/\n/).filter((line) => line);
        series = lines.map((line) => line.split(/-/));
    } catch (error) {}

    return series;
};

export const getEpisodeNotes = async (id = null) => {
    const path = `${process.cwd()}/content/notes/${id}.md`;

    if (!id || !path) {
        return null;
    }

    try {
        const rawContent = fs.readFileSync(path, {
            encoding: 'utf-8'
        });

        const { data, excerpt, content } = matter(rawContent);

        return {
            data,
            excerpt,
            content: parseNotes(content)
        };
    } catch (error) {
        return null;
    }
};
