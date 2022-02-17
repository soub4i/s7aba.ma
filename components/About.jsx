import React from 'react';

import Link from 'next/link';
import Config from '../config';
import { useRef } from 'react';

export default function About() {
    const about = useRef(null);
    // useEffect(() => {
    //     // animate about
    //     const observer = new IntersectionObserver(handleObserver, {
    //         root: null,
    //         rootMargin: '20px',
    //         threshold: 0.5
    //     });
    //     if (about.current) {
    //         observer.observe(about.current);
    //     }
    // }, []);
//     const handleObserver = (entities) => {
//         const target = entities[0];
//         if (target.isIntersecting) {
//             about.current.className = about.current.className + 'swing-in-top-fwd';
//         }
//     };
    return (
        <section
            ref={about}
            id="about"
            className="flex flex-col place-items-center place-content-center md:h-screen  bg-gray-100 bg-opacity-80 py-8 px-2 ">
            <h1 className="text-4xl font-extrabold text-indigo-300  md:pb-20 pb-6  text-center tracking-wide">
                About the host
            </h1>
            <div className="flex flex-col justify-items-center   md:flex-row w-full md:w-2/3 ">
                <div className="mt-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center">
                    <div className="profile flex-auto"></div>
                    <img src={Config.hostAvatar} className="rounded-full h-32 w-32 " alt="" />

                    <p className="text-xl font-light text-gray-700 mx-4 mt-2">
                        {Config.hostDescription}
                        <div className="flex flex-col">
                            <Link href={'https://twitter.com/' + Config.hostTwitter}>
                                <a className="text-indigo-400 text-lg">
                                    <i className="fab fa-twitter"></i> @{Config.hostTwitter}
                                </a>
                            </Link>
                        </div>
                    </p>

                    <p className="mx-4 mt-2 text-lg font-bold text-gray-700">{Config.hostName}</p>
                </div>
            </div>
        </section>
    );
}
