import React from 'react';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { Context } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function Player({ episode }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const { dispatch } = useContext(Context);

    const stop = () =>
        dispatch({
            type: 'PLAY',
            payload: null
        });

    return (
        <>
            {episode ? (
                <div
                    className="bg-white w-full flex items-center p-2 shadow border"
                    style={{
                        position: 'fixed',
                        bottom: '1px',
                        zIndex: '99999',
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                    {
                        <div className="flex flex w-11/12	 md:w-3/5">
                            <div onClick={stop}>
                                <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4  text-sm z-50">
                                    <svg
                                        className="fill-current "
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 ">
                                <img
                                    src={episode.image}
                                    alt={episode.title}
                                    className="w-14 h-14 rounded-full"
                                />
                            </div>
                            <div className="flex-grow p-3">
                                <div className="font-semibold text-gray-700">
                                    <span className="mr-2" onClick={() => setIsPlaying(!isPlaying)}>
                                        <FontAwesomeIcon
                                            icon={isPlaying ? faPause : faPlay}></FontAwesomeIcon>
                                    </span>
                                    <span>{episode.title}</span>
                                </div>
                                <div className="text-sm text-gray-500 hidden md:block ">
                                    {episode.description}
                                </div>
                            </div>

                            <ReactPlayer
                                playing={isPlaying}
                                url={episode.audio}
                                style={{ display: 'none' }}
                            />
                        </div>
                    }
                </div>
            ) : null}
        </>
    );
}

Player.propTypes = {
    episode: PropTypes.array.isRequired
};
