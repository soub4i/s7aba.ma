import ReactPlayer from 'react-player'
import Image from 'next/image'

export default function Episode({episode}) {
    return (
        <div className="flex flex-row border border-solid border-gray-100 border-1 rounded w-2/3 my-4  shadow-lg  ">
            <div className="w-1/4 hidden sm:block">
                <Image layout='fill' src={episode.image} alt="episode image"/>
            </div>
            <div className="bg-gray-50 md:pl-4 px-2  py-4 flex flex-col justify-center w-3/4">
            <h1 className="font-semibold text-gray-500 mb-2">{episode.title.replace(/CDATA|[<>![\]\\]+/gi,"")}</h1>
            <p className="font-normal text-gray-700 mb-4">{episode.description.replace(/[<>![\]\\]+/gi,"")}</p>
            <div className='player-wrapper w-full'>
        <ReactPlayer  url={episode.audio}  height="50px" width="100%" controls/>
        </div>
        </div>
        </div>
    )
}
