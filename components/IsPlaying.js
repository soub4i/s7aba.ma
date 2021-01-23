import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Context } from "../context";
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons'

export default function IsPlaying({ episode }) {

    const {  state: { currentEpisode } } = useContext(Context);

    const isPlaying = episode && currentEpisode && episode.guid === currentEpisode.guid
    return (
        <> { isPlaying ? <span> <FontAwesomeIcon icon={faBroadcastTower} pulse ></FontAwesomeIcon> </span> : null } </>
    )

}
