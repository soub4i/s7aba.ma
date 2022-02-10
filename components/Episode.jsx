import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import PlayButton from './PlayButton';

export default function Episode({ episode }) {
    return (
        <div className="ml-4 relative  max-w-sm rounded-lg overflow-hidden shadow-lg p-4 z-40 ">
            <div className='relative rounded-lg  bg-gray-200 rounded bg-opacity-25'>
            <Link href="/episodes/[id]" as={`/episodes/${episode.guid}`} className='-z-10' >
                <a >
                    <Image
                        width={92}
                        height={92}
                        layout="responsive"
                        src={episode.image}
                        alt="episode image"
                      
                    />
                      
                </a>
            </Link>
            <PlayButton className="absolute left-8 -bottom-4" episode={episode} />
            </div>

            <div className="px-6 pt-4">
                  
                    <h3 className="font-bold text-xl  mb-2 leading-normal mt-4">{episode.title}</h3>


                <p className="text-grey-darker text-base leading-normal max-h-3/4 overflow-auto">
                    {episode.description}
                </p>
            </div>
        </div>
    );
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired
};
