
import { useContext, useState } from 'react';
import { Context } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
export default function PlayButton({ episode }) {

    const {  state, dispatch } = useContext(Context);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentlyPlayed = episode && state.currentEpisode && state.currentEpisode.guid === episode.guid

    const play = (e) => {
        setIsPlaying(!isPlaying)
        dispatch({
            type: 'PLAY',
            payload: e
        });
    }

    return <button
    onClick={() => play(episode)}
    className="inline  text-2xl  text-blue-300 outline-none">
        <FontAwesomeIcon  icon={isPlaying || currentlyPlayed  ? faBroadcastTower : faPlay}></FontAwesomeIcon>
    </button>

}