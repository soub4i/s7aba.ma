import ReactPlayer from 'react-player'


export default function Episode({episode}) {
    return (
        <div className="flex flex-row border border-solid border-gray-100 border-1 rounded w-3/4 my-4  shadow-lg bg-red-200 ">
            <div className="w-1/3 hidden sm:block">
                <img className="w-full h-full object-cover" src={episode.image} alt="episode image"></img>
            </div>
            <div className="bg-gray-50 md:pl-4 px-2  py-4 flex flex-col justify-center">
            <h1 className="font-semibold text-gray-500 mb-2">{episode.title.replace(/CDATA|[<>![\]\\]+/gi,"")}</h1>
            <p className="font-normal text-gray-700 mb-4">{episode.description.replace(/[<>![\]\\]+/gi,"")}</p>
            <div className='player-wrapper w-full'>
        <ReactPlayer  url={episode.audio}  height="50px" width="100%" controls/>
        </div>
        </div>
        </div>
    )
}
