import Link from 'next/link';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Config from '../config';
export default function Navbar() {
    const nav = useRef(null);
    const [isActive, setActive] = useState(false);
    function handleClick(e) {
        setActive(!isActive);
    }
    return (
        <header className=" flex flex-row justify-between pb-2  md:absolute md:top-0 w-full  z-50  px-6 md:my-0 sm:my-4 my-2 h-14 bg-white ">
            <div className="flex flex-row  justify-between w-full md:w-1/2 ">
                <Link  href="/">
                    <a><Image className="cursor-pointer" src="/images/logo.png" width={65} height={48} /></a>
                </Link>

                <div className="hidden md:flex mt-6 md:mt-0 flex-row   justify-between w-full md:w-1/2 px-8  items-end">
                    <a href={'https://www.instagram.com/' + Config.instagram} target="_blank">
                        <Image src="/images/instagram.svg" width={65} height={36} />
                    </a>
                    <a href={'https://www.twitter.com/' + Config.twitter} target="_blank">
                        <Image src="/images/twitter.svg" width={65} height={48} />
                    </a>
                    <a href={Config.spotify} target="_blank">
                        <Image src="/images/spotify.svg" width={65} height={36} />
                    </a>
                    <a href={Config.google} target="_blank">
                        <Image width={65} height={36} src="/images/google-podcasts.svg" />
                    </a>
                </div>
            </div>
            <button className="md:hidden  block " onClick={handleClick}>
                <i className=" fas fa-bars font-extrabold text-gray-700 text-3xl "></i>
            </button>
            <nav
                ref={nav}
                className={`right-0 top-16  md:top-1   absolute md:relative md:w-1/2  md:block bg-white md:bg-transparent md:h-screen w-screen z-50 hidden ${
                    isActive ? 'active' : ''
                }`}>
                <ul className="  flex flex-col md:flex-row md:justify-around md:items-start justify-between  items-center   h-full ">
                    <button className="pr-8 md:hidden block self-end" onClick={handleClick}>
                        <i className=" fas fa-times text-3xl"></i>
                    </button>
                    <li className="my-2">
                        <Link href="/#home">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none hover:text-blue-300"
                                onClick={handleClick}>
                                Home
                            </button>
                        </Link>
                    </li>
                    <li className="my-2">
                        <Link href="/episodes">
                            <button
                                className="font-semibold text-gray-700 focus:outline-none hover:text-blue-300"
                                onClick={handleClick}>
                                Episodes
                            </button>
                        </Link>
                    </li>
                
                    <li className="my-2">
                        <Link href="/#about">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none   hover:text-blue-300 "
                                onClick={handleClick}>
                                About
                            </button>
                        </Link>
                    </li>

                    <li className="my-2">
                        <Link href="/#contact">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none  hover:text-blue-300"
                                onClick={handleClick}>
                                Contact
                            </button>
                        </Link>
                    </li>

                    <div className="flex flex-row my-4 md:hidden">
                        <a
                            href={'https://www.instagram.com/' + Config.instagram}
                            target="_blank"
                            className="mx-2">
                            <Image src="/images/instagram.svg" width={24} height={22} />
                        </a>
                        <a
                            href={'https://www.twitter.com/' + Config.twitter}
                            target="_blank"
                            className="mx-2">
                            <Image src="/images/twitter.svg" width={24} height={22} />
                        </a>
                        <a href={Config.spotify} className="mx-2" target="_blank">
                            <Image src="/images/spotify.svg" width={24} height={22} />
                        </a>
                        <a href={Config.google} className="mx-2" target="_blank">
                            <Image width={24} height={22} src="/images/google-podcasts.svg" />
                        </a>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
