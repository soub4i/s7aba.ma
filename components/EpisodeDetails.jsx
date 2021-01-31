import Image from 'next/image';
import React from "react"
import { useContext } from 'react';
import { Context } from '../context';
import Notes from './Notes';

export default function EpisodeDetails({ episode , notes }) {
    const { dispatch } = useContext(Context);

    const play = (e) =>
        dispatch({
            type: 'PLAY',
            payload: e
        });
    return (
        <div className="my-24 flex md:w-1/3">
            
            <div className="bg-white" >
            <div className="object-contain  w-full mx-auto">
            <Image
                    layout="responsive"
                    width={64}
                    height={64}
                    src={episode.image}
                    alt="episode image"
                />            </div>
            <div className="px-4 py-2 mt-2">
                <h3 className="font-bold text-2l text-gray-800 tracking-normal my-4">{episode.title}
                <span className="text-xs mx-2">({episode.published_at})</span>
                </h3>
                
                    <p className="text-sm text-gray-700">
                    {episode.description}
                                        </p>
                    <div className="flex text-right">
                        
                    </div>
                <div className="author flex items-center -ml-3 my-3">
                    <div className="w-full">
                    <div className=" mt-2 lg:block">
                    <button
                        onClick={() => play(episode)}
                        className="inline  text-xl  text-blue-300 outline-none">
                        <i className="fas fa-play-circle"></i>
                    </button>
                        <a href={`https://github.com/AbderrahimSoubaiElidrissi/s7aba-website/tree/main/content/notes/${episode.guid}.md` } target="_blank" rel="noopener noreferrer">
                    <span className="inline  text-xl mx-2  text-gray-300 outline-none">
                        <i className="fa fa-bookmark"></i>
                    </span>
                    <span className="text-sm text-gray-400  tracking-tighter">
                        notes on github
                    </span>
                        </a>
                </div> 
                 <Notes notes={notes} /> 
                </div>
            </div>
        </div>
        </div>
            
        </div>
    );
}

