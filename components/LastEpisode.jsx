import React from 'react';
import PropTypes from 'prop-types';
import Episode from './Episode';

export default function LastEpisode({ episode }) {
    return <>{episode ? <Episode episode={episode} key={episode.guid}></Episode> : null}</>;
}
LastEpisode.propTypes = {
    episode: PropTypes.array.isRequired
};
