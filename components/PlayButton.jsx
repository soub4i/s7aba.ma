import React from 'react';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
export default function PlayButton({ episode, className }) {
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
        <div className={className}>
            <button
                onClick={() => play(episode)}
                className="text-1xl  bg-indigo-500 rounded-lg py-1 px-2  text-white outline-none focus:outline-none" >
                <FontAwesomeIcon
                    icon={currentlyPlayed ? faBroadcastTower : faPlay}></FontAwesomeIcon>
            </button>
        </div>
    );
}
PlayButton.propTypes = {
    episode: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
};
