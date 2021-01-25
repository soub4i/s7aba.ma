import { useContext } from 'react';
import { Context } from '../context';

export default function TopThree({ episodes }) {
    const { state, dispatch } = useContext(Context);

    const play = (e) =>
        dispatch({
            type: 'PLAY',
            payload: e
        });

    const Ep = ({ e }) => {
        return (
            <div className=" lg:w-1/3 mb-4 md:mb-0">
                <div className="bg-white w-3/5 rounded-lg overflow-hidden shadow relative">
                    <img
                        className="h-56 w-full object-cover object-bottom"
                        src={e.image}
                        alt={e.title}
                    />
                    <div className="p-4 h-auto md:h-40 lg:h-56">
                        <a
                            href="#"
                            className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                            {e.title}
                        </a>
                        <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                            {e.description}
                        </div>
                        <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                            <a
                                onClick={() => play(e)}
                                className="inline bg-gray-200 py-1 px-2 rounded-full text-xs  text-gray-700"
                                href="#">
                                Play this episode
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="py-4">
            <div className="px-4">
                <div className="block md:flex justify-between md:-mx-2">
                    {episodes
                        ? episodes.map((episode) => <Ep e={episode} key={episode.guid}></Ep>)
                        : null}
                </div>
            </div>
        </main>
    );
}
