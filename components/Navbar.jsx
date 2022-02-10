import React, { useState } from 'react';
import Link from 'next/link';
// import { useRef, useState } from 'react';
// import Config from '../config';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-gray-700 body-font border-b border-gray-200  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex">
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                        S7aba.ma
                    </span>
                </a>
                <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>

                    {isOpen ? (
                        <svg
                            className=" w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    )}
                </button>
                <ul className="hidden sm:flex text-center  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:font-semibold">
                    <li className="block py-2 pr-4 pl-3 rounded-md text-gray-700  md:hover:bg-indigo-300 md:border-0 md:hover:text-white md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        <Link
                            href="/#home">
                            Home
                        </Link>
                    </li>
                    <li className="block py-2 pr-4 pl-3 rounded-md text-gray-700  md:hover:bg-indigo-300 md:border-0 md:hover:text-white md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        <Link
                            
                            href="/episodes">
                            Episodes
                        </Link>
                    </li>
                    <li className="block py-2 pr-4 pl-3 rounded-md text-gray-700  md:hover:bg-indigo-300 md:border-0 md:hover:text-white md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        <Link
                            href="/#about">
                            About
                        </Link>
                    </li>
                    <li className="block py-2 pr-4 pl-3 rounded-md text-gray-700  md:hover:bg-indigo-300 md:border-0 md:hover:text-white md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"q></li>
                        <Link
                            href="/#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div
                    className={`w-full  md:w-auto ${!isOpen ? 'hidden' : 'block'}`}
                    id="mobile-menu">
                    <ul className="text-center flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                href="/#home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                href="/episodes">
                                Episodes
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                href="/#about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                href="/#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
