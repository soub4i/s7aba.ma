import React from 'react';
import PropTypes from 'prop-types';
import { getEpisodes } from '../../services/episodes';
import Episodes from '../../components/Episodes';
import Head from 'next/head';
import config from '../../config';

function EpisodesPage({ episodes }) {
    return (
        <div>
            <Head>
                <title>{config.websiteTitle} - Episodes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={config.websiteDescription} />
            </Head>
            <div className="flex flex-wrap md:h-full  items-center h-screen relative justify-center mb-20 pt-20  ">
                <section id="episodes" className="flex flex-col items-center pb-16">
                    <Episodes episodes={episodes} />
                </section>
            </div>
        </div>
    );
}
EpisodesPage.getInitialProps = async () => {
    const episodes = await getEpisodes();
    return { episodes };
};

EpisodesPage.propTypes = {
    episodes: PropTypes.array
};

export default EpisodesPage;
