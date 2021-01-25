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
        <header className=" flex flex-row justify-between  md:absolute md:top-0 w-full  z-50  px-6 md:my-0 sm:my-4 my-2 h-14 bg-white ">
            <div className="flex flex-row  justify-between w-full md:w-1/2 ">
                <a href="/">
                    <Image src="/logo.png" width={65} height={48} />{' '}
                </a>

                <div className="hidden md:flex flex-row   justify-between w-full md:w-1/2 px-8  items-end  ">
                    <a href={'https://www.instagram.com/' + Config.instagram} target="_blank">
                        <Image src="/instagram.svg" width={65} height={36} />
                    </a>
                    <a href={'https://www.twitter.com/' + Config.twitter} target="_blank">
                        <Image src="/twitter.svg" width={65} height={48} />
                    </a>
                    <a href={Config.spotify} target="_blank">
                        <Image src="/spotify.svg" width={65} height={36} />
                    </a>
                    <a href={Config.google} target="_blank">
                        <Image width={65} height={36} src="/google-podcasts.svg" />
                    </a>
                </div>
                <button className="md:hidden self-end " onClick={handleClick}>
                    <i className=" fas fa-bars font-extrabold text-gray-700 text-3xl "></i>
                </button>
            </div>
            <button className="md:hidden  block " onClick={handleClick}>
                <i className=" fas fa-bars font-extrabold text-gray-700 text-3xl "></i>
            </button>
            <nav
                ref={nav}
                className={`absolute md:relative md:w-1/2  md:block bg-white md:bg-transparent h-screen w-screen z-50 hidden ${
                    isActive ? 'active' : ''
                }`}>
                <ul className="p-4   flex flex-col md:flex-row md:justify-around md:items-start justify-between  items-center   h-full ">
                    <button className="md:hidden block self-end" onClick={handleClick}>
                        <i className=" fas fa-times text-3xl"></i>
                    </button>
                    <li>
                        <Link href="/#home">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none hover:text-blue-300"
                                onClick={handleClick}>
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link href="/#about">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none   hover:text-blue-300 "
                                onClick={handleClick}>
                                About Us
                            </button>
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link href="episodes">
                            <button
                                className="font-semibold text-gray-700 focus:outline-none hover:text-blue-300"
                                onClick={handleClick}>
                                Episodes
                            </button>
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link href="/#contact">
                            <button
                                className="font-semibold text-gray-700  focus:outline-none  hover:text-blue-300"
                                onClick={handleClick}>
                                Contact Us
                            </button>
                        </Link>
                    </li>

                    <a
                        href={'https://www.instagram.com/' + Config.instagram}
                        target="_blank"
                        className="md:hidden">
                        <Image src="/instagram.svg" width={65} height={36} />
                    </a>
                    <a
                        href={'https://www.twitter.com/' + Config.twitter}
                        target="_blank"
                        className="md:hidden">
                        <Image src="/twitter.svg" width={65} height={36} />
                    </a>
                    <a href={Config.spotify} target="_blank" className="md:hidden">
                        <Image src="/spotify.svg" width={65} height={48} />
                    </a>
                    <a href={Config.google} target="_blank" className="md:hidden">
                        <Image width={65} height={36} src="/google-podcasts.svg" />
                    </a>
                </ul>
            </nav>
        </header>
    );
}
