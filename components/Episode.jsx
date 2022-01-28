import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import PlayButton from './PlayButton';

export default function Episode({ episode }) {
    return (
        <div className="ml-4 relative  max-w-sm rounded-lg overflow-hidden shadow-lg">
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

            <div className="px-6 py-4">
                <div className="flex">
                    <PlayButton className="" episode={episode} />
                    <h3 className="font-bold text-xl ml-2 mb-2 leading-normal">{episode.title}</h3>
                </div>

                <hr />

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
