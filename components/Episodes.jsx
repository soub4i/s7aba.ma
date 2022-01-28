import React from 'react';
import PropTypes from 'prop-types';

import Episode from './Episode';

export default function Episodes({ episodes }) {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-indigo-300  py-10  text-center tracking-wide">
                Episodes
            </h1>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {episodes
                    ? episodes.map((episode) => (
                          <Episode episode={episode} key={episode.guid}></Episode>
                      ))
                    : null}
            </div>
        </>
    );
}
Episodes.propTypes = {
    episodes: PropTypes.array
};
