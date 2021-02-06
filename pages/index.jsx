import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import { getEpisodes } from '../services/episodes';
// import LastEpisode from '../components/LastEpisode';
import TopThree from '../components/TopThree';
import Footer from '../components/Footer';
import Head from 'next/head';
import Config from '../config';

function HomePage({ episodes, lastEpisode }) {
    return (
        <div>
            <Head>
                <title>{Config.websiteTitle} - Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={Config.websiteDescription} />
            </Head>
            <div className="flex flex-wrap hidden md:flex  h-screen relative justify-center  overflow-hidden ">
                <div className="blur-effect"> </div>
                <div className="w-full h-full">
                    <img
                        src="/images/cloud1.png"
                        className="absolute bottom-0 animate-cloud  w-3/4 "
                        style={{ '--i': 1 }}
                    />
                    <img
                        src="/images/cloud2.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 2 }}
                    />
                    <img
                        src="/images/cloud3.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 3 }}
                    />
                    <img
                        src="/images/cloud4.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 4 }}
                    />
                    <img
                        src="/images/cloud5.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 5 }}
                    />
                    <img
                        src="/images/cloud1.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 10 }}
                    />
                    <img
                        src="/images/cloud2.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 9 }}
                    />
                    <img
                        src="/images/cloud3.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 8 }}
                    />
                    <img
                        src="/images/cloud4.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 7 }}
                    />
                    <img
                        src="/images/cloud5.png"
                        className="absolute bottom-0  animate-cloud  w-3/4 "
                        style={{ '--i': 6 }}
                    />
                </div>
                <div className="text-center absolute  py-64">
                    <span className="uppercase text-xl text-white ">Minimalist Cloud Podcast</span>
                    <p className="text-4xl  font-bold py-2 gradient-text  ">
                        Powered by Moroccan Darija & Tea
                    </p>

                    <div className="pt-12">
                        <a href="/#episodes" className="rounded-full font-bold px-4 py-3 bg-white">
                            <span className=" text-blue-300">
                                Start listening
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <section
                id="episodes"
                className="flex flex-col justify-center items-center  md:h-screen py-8">
                {/* <h1 className="text-4xl font-extrabold text-blue-300  pb-6 pt-6  text-center tracking-wide ">
                    Last Episode
                </h1> */}
                {/* <LastEpisode episode={lastEpisode} /> */}
                <h1 className="text-4xl font-extrabold text-blue-300  pb-6 pt-6 text-center tracking-wide">
                    Last 3 Episodes
                </h1>
                <div>
                    <TopThree episodes={episodes} />
                </div>
            </section>

            <About />

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

HomePage.getInitialProps = async () => {
    const episodes = await getEpisodes();
    return { episodes: episodes.slice(0, 3) };
};

export default HomePage;
