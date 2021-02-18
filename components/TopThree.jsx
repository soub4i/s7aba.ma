import PlayButton from './PlayButton';

export default function TopThree({ episodes }) {
    const Ep = ({ e }) => {
        return (
            <div className=" mb-6 md:mb-0 transform transition duration-500 hover:scale-105">
                <div className="bg-white md:mx-10 rounded-lg  shadow ">
                    <img
                        className="h-56 w-full object-cover object-top"
                        src={e.image}
                        alt={e.title}
                    />
                    <div className="p-3 h-auto md:h-40 lg:h-56 flex flex-col place-content-between">
                        <h1 className="blockfont-semibold text-gray-500  font-semibold text-lg md:text-base lg:text-base">
                            {e.title}
                        </h1>
                        <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                            {e.description}
                        </div>
                        <div className="mt-2  bottom-0  md:hidden lg:block">
                            <PlayButton episode={e} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="py-4">
            <div className="px-4">
                <div className="block md:flex   md:-mx-2 ">
                    {episodes
                        ? episodes.map((episode) => <Ep e={episode} key={episode.guid}></Ep>)
                        : null}
                </div>
            </div>
        </main>
    );
}
