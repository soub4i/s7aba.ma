import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from './PlayButton';
import Episode from './Episode';

export default function TopThree({ episodes }) {
    const Ep = ({ e }) => {
        return (
            <div className="md:mb-0 transform transition duration-500 hover:scale-105">
                <div className="bg-white md:mx-10 rounded-lg  shadow ">
                    <img
                        className="h-56 w-full object-cover object-top"
                        src={e.image}
                        alt={e.title}
                    />
                    <div className="p-3 h-auto md:h-40 lg:h-56 flex flex-col place-content-between">
                        <h1 className="blockfont-semibold text-gray-500  font-semibold text-lg md:text-base lg:text-base">
                            {e.title}
                        </h1>
                        <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                            {e.description}
                        </div>
                        <div className="mt-2  bottom-0  md:hidden lg:block">
                            <PlayButton episode={e} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    Ep.propTypes = {
        e: PropTypes.object.isRequired
    };
    return (
        <main className="py-4">
            <div className="px-4">
                <div className="sm:flex">
                    {episodes
                        ? episodes.map((episode) => (
                              <Episode episode={episode} key={episode.guid}></Episode>
                          ))
                        : null}
                </div>
            </div>
        </main>
    );
}
TopThree.propTypes = {
    episodes: PropTypes.array
};
