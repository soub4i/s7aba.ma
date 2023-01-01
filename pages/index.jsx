import React from 'react';
import PropTypes from 'prop-types';
import About from '../components/About';
import Contact from '../components/Contact';
import { getEpisodes } from '../services/episodes';
// import LastEpisode from '../components/LastEpisode';
import TopThree from '../components/TopThree';
import Footer from '../components/Footer';
import Head from 'next/head';
import Config from '../config';
import Link from 'next/link';

function HomePage({ episodes }) {
    return (
        <div>
            <Head>
                <title>{Config.websiteTitle} - Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={Config.websiteDescription} />
            </Head>

            <section className="text-gray-800">
                <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                <span className="block xl:inline">
                                    <span
                                        className="text-indigo-500 mr-1"
                                        style={{ fontFamily: 'Open Sans' }}>
                                        S7aba{" "}
                                    </span>
                                    a podcast
                                </span>
                                <span className="block ">in the cloud</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                A minimalist cloud podcast in Darija
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                             
                               
                                <div className="mt-3 sm:mt-0 sm:ml-3 flex justify-center">
                                    {/* podcast icons */}

                                    <Link href={Config.spotify}>
                                        <a
                                            target="_blank"
                                            className="m-3 text-indigo-500 hover:text-indigo-600">
                                            <span className="sr-only">Spotify </span>
                                            <img
                                                src="/images/spotify.svg"
                                                alt="Google"
                                                className="w-8"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={Config.google}>
                                        <a
                                            target="_blank"
                                            className="m-3 text-indigo-500 hover:text-indigo-600">
                                            <span className="sr-only">Google podcast</span>
                                            <img
                                                src="/images/google-podcasts.svg"
                                                alt="Google"
                                                className="w-8"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={Config.appleItunes}>
                                        <a
                                            target="_blank"
                                            className="m-3 text-indigo-500 hover:text-indigo-600">
                                            <span className="sr-only">Apple podcast</span>
                                            <img
                                                src="/images/apple.svg"
                                                alt="Google"
                                                className="w-8"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="rounded-md mx-2">
                                <a href="https://www.buymeacoffee.com/soubai"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=soubai&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="  object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="images/hero.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section id="episodes" className="flex flex-col justify-center items-center py-2">
                {/* <h1 className="text-4xl font-extrabold text-indigo-300  pb-6 pt-6  text-center tracking-wide ">
                    Last Episode
                </h1> */}
                {/* <LastEpisode episode={lastEpisode} /> */}
                <h1 className="text-4xl font-extrabold text-indigo-300  pb-6 pt-8 text-center tracking-wide">
                    Latest Episodes
                </h1>
                <div>
                    <TopThree episodes={episodes} />
                </div>
            </section>

            <About />

            <Contact />
            <Footer />
        </div>
    );
}

HomePage.getInitialProps = async () => {
    const episodes = await getEpisodes();
    return { episodes: episodes.slice(0, 3) };
};
HomePage.propTypes = {
    episodes: PropTypes.array
};

export default HomePage;
