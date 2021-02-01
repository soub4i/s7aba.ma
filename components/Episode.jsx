import Image from 'next/image';
import Link from 'next/link';
import PlayButton from './PlayButton';

export default function Episode({ episode }) {
    return (
        <div className="flex md:flex-row flex-col border border-solid border-gray-100 border-1 rounded md:w-2/3 my-4 w-4/5	  shadow-lg">
            <div className="w-full md:w-1/4 ">
                <Link href="/episodes/[id]" as={`/episodes/${episode.guid}`}>
                    <a>
                        <Image
                            width={92}
                            height={92}
                            layout="responsive"
                            src={episode.image}
                            alt="episode image"
                        />
                    </a>
                </Link>
            </div>
            <div className="bg-gray-50 md:pl-4 px-2  py-4 flex flex-col justify-center md:w-3/4 w-full">
                <Link href="/episodes/[id]" as={`/episodes/${episode.guid}`}>
                    <a>
                        <h1 className="font-semibold text-gray-500 mb-2">{episode.title}</h1>
                    </a>
                </Link>

                <p className="font-normal text-gray-700 mb-4">{episode.description}</p>

                <div className=" mt-2    lg:block">
                    <PlayButton episode={episode} />
                </div>
            </div>
        </div>
    );
}
