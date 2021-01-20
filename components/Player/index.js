import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faPause } from '@fortawesome/fontawesome-free-solid'

// import styles from  './Player.module.css'
// <span className={styles.playing + ' ' + (isPlaying ? styles.animated : '') } ></span>

import { Context } from "../../context";
export default function Player({episode}) {

    const [isPlaying,setIsPlaying] = useState(true)
    const { state , dispatch } = useContext(Context);


    const stop = () => {
        dispatch({
            type: "PLAY",
            payload: null,
          })
    }

    return (
        <>
            { episode ? <div  style={{
                    position: "fixed",
                    bottom: "0",
                    zIndex:"99999",
                    width:"100%",
            }}>   {
            
<div className="flex bg-gray-200 shadow-lg h-32 ">

<div onClick={stop} className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-sm z-50">
        <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>

   <div className="flex items-center mx-auto p-6">
      <img className="w-20 h-20 mx:h-12 mx:w-12 rounded-full object-cover mr-4 shadow" src={episode.image} />
      <div className="">
         <div className="flex items-center justify-start">
         <span className="playback mr-2" onClick={ () => setIsPlaying(!isPlaying) } >
            <FontAwesomeIcon  icon={isPlaying ? faPause : faPlay}/>
            </span>
            <h5 className="text-md font-semibold text-gray-900 mt-1">{episode.title}  </h5>
         </div>
         <p className="text-gray-700  sm:block hidden">{episode.published_at} </p>
         <p className="mt-3 text-gray-700 text-sm sm:block hidden">
         {episode.description}
         </p>
      </div>
        <ReactPlayer playing={isPlaying}  url={episode.audio} style={ { display: 'none' } }  height="50px" width="100%" controls/>
</div>

        </div>
                }</div> : null}
        
        </>
    )
}