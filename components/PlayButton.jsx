import React from 'react';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
export default function PlayButton({ episode }) {
    const { state, dispatch } = useContext(Context);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentlyPlayed =
        episode && state.currentEpisode && state.currentEpisode.guid === episode.guid;

    const play = (e) => {
        setIsPlaying(!isPlaying);
        dispatch({
            type: 'PLAY',
            payload: e
        });
    };

    return (
        <>
            <button
                onClick={() => play(episode)}
                className="inline  text-2xl  text-indigo-500 outline-none">
                <FontAwesomeIcon
                    icon={currentlyPlayed ? faBroadcastTower : faPlay}></FontAwesomeIcon>
            </button>
        </>
    );
}
PlayButton.propTypes = {
    episode: PropTypes.object.isRequired
};
