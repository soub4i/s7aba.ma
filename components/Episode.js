import Image from 'next/image'
import { useContext } from "react";
import { Context } from "../context";


export default function Episode({episode}) {
    const { state, dispatch } = useContext(Context);
    
    const play = (e) =>
    dispatch({
      type: "PLAY",
      payload: e,
    })
    return (
        <div className="flex flex-row border border-solid border-gray-100 border-1 rounded w-2/3 my-4  shadow-lg  ">
            <div className="w-1/4 hidden sm:block">
                <Image width={92}  height={92} layout='responsive' src={episode.image} alt="episode image"/>
            </div>
            <div className="bg-gray-50 md:pl-4 px-2  py-4 flex flex-col justify-center w-3/4">
            <h1 className="font-semibold text-gray-500 mb-2">{episode.title}</h1>
            <p className="font-normal text-gray-700 mb-4">{episode.description}</p>

            <div className=" mt-2   md:hidden lg:block">
            <button onClick={() => play(e)} className="inline  text-4xl  text-blue-300" ><i class="fas fa-play-circle"></i></button>
            </div>
        
        </div>
        </div>
    )
}
