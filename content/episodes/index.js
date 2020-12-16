const cheerio = require('cheerio')

const rssURL = "https://anchor.fm/s/8da692c/podcast/rss"


const xml2json = (xml) => {
    let $ = cheerio.load(xml);
    try {
        const episodes = $("item").map(
            function (item) {
                return {
                    guid: $(this).children("guid").text(),
                    title: $(this).children("title").text(),
                    description: $(this).
                        children("description")
                        .text().replace(/(<([^>]+)>)/gi, ""),
                    audio: $(this).children("enclosure").attr("url"),
                    image: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/1385315/1385315-1607371484254-38a6b804033b4.jpg'
                };
            }
        ).get()
        return episodes
    } catch (e) {
        console.log(e.message);
    }
}


export const getEpisodes = async () => {
    const data = await fetch(rssURL);
    const result = await data.text();
    return xml2json(result)

}