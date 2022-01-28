import React from 'react';
import PropTypes from 'prop-types';
import { getEpisodes, getEpisode } from '../../services/episodes';
import EpisodeDetails from '../../components/EpisodeDetails';
import { getEpisodeNotes } from '../../services/notes';
import Head from 'next/head';
import config from '../../config';
import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';

function EpisodePage(props) {
    const [url, setUrl] = useState('');

    useEffect(() => setUrl(window.location.href), []);

    return (
        <div className="my-12 grid justify-items-stretch">
            <Head>
                <title>
                    {config.websiteTitle} - Episode: {props.episode.title}
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={props.episode.description} />
            </Head>

            <section id="episodes" className="flex flex-col items-center ">
                {props && props.episode ? <EpisodeDetails {...props} /> : null}
            </section>
            <section className="flex flex-col items-center">
                <DiscussionEmbed
                    className="md:w-1/3 w-full px-2"
                    shortname={config.disqusShortname}
                    config={{
                        url,
                        identifier: props.episode.guid,
                        title: props.episode.title,
                        language: 'en_GB' //e.g. for Traditional Chinese (Taiwan)
                    }}
                />
            </section>
        </div>
    );
}
EpisodePage.propTypes = {
    episode: PropTypes.object,
    notes: PropTypes.array
};
export const getStaticProps = async ({ params }) => {
    const episode = await getEpisode(params.id);
    const notes = await getEpisodeNotes(params.id);
    return { props: { episode, notes } };
};

export const getStaticPaths = async () => {
    const episodes = await getEpisodes();
    const ids = episodes.map((episode) => episode.guid);
    const paths = ids.map((id) => {
        return { params: { id } };
    });
    return { paths, fallback: 'blocking' };
};
export default EpisodePage;
