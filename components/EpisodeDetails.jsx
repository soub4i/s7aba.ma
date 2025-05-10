import React from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes';
import PlayButton from './PlayButton';

export default function EpisodeDetails({ episode, notes }) {
    return (
        <div className="my-24 flex md:w-2/4">
            <div className="bg-white">
                <div className="object-contain  w-full mx-auto">
                   <img
                        width="auto"
                        height={92}
                        src={episode.image}
                        alt="episode image"
                      
                    />
                    {' '}
                </div>
                <div className="px-4 py-2 mt-2">
                    <h3 className="font-bold text-2l text-gray-800 tracking-normal my-4">
                        {episode.title}
                        <span className="text-xs mx-2">({episode.published_at})</span>
                    </h3>

                    <p className="text-sm text-gray-700">{episode.description}</p>
                    <div className="flex text-right"></div>
                    <div className="author flex items-center  my-3">
                        <div className="w-full">
                            <div className=" mt-2 lg:block">
                                <PlayButton episode={episode} />
                                <a
                                    href={`https://github.com/AbderrahimSoubaiElidrissi/s7aba.ma/new/main/content/notes/${episode.guid}.md`}
                                    target="_blank"
                                    rel="noopener noreferrer">
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

EpisodeDetails.propTypes = {
    episode: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
};
