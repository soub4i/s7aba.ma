import styles from  './Playing.module.css'
// 

import { useContext } from "react";
import { Context } from "../../context";
export default function Playing({episode}) {

    const { state : { currentEpisode } } = useContext(Context);

    const isPlaying = episode && currentEpisode && episode.guid === currentEpisode.guid

    return (isPlaying ? <span className={styles.playing + ' ' + (isPlaying ? styles.animated : '') } ></span>: null)

}