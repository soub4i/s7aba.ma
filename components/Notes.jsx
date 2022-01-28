import React from 'react';
import PropTypes from 'prop-types';

export default function Notes({ notes }) {
    return (
        <section id="notes" className="bg-gray-100 bg-opacity-80 py-8 px-2 md:w-auto w-full my-4 ">
            <h1 className="text-xl font-extrabold text-center tracking-wide">Notes</h1>
            <div className="">
                {notes && notes.data ? (
                    <div>
                        <div className="mt-6 lg:block">
                            <ul className="text-sm">
                                {notes.content.map((note, i) => (
                                    <li key={i}>
                                        {' '}
                                        <span className="text-gray-600">{note[0]}</span> {note[1]}{' '}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="my-4 ">
                            <span className=" text-xs text-gray-400">
                                by{' '}
                                <a href={`https://github.com/${notes.data.authorGithub}`}>
                                    @{notes.data.authorGithub}
                                </a>
                            </span>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-xs pt-4 text-gray-400">
                        Add some notes to this episode. Check project on{' '}
                        <a
                            href="https://github.com/AbderrahimSoubaiElidrissi/s7aba-website"
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                        </a>
                    </p>
                )}
            </div>
        </section>
    );
}
Notes.propTypes = {
    notes: PropTypes.object.isRequired
};
