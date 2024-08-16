"use client";

import { useState } from "react";
import { FaCode, FaGithub, FaHome, FaPhone } from "react-icons/fa";

export default function Header() {
    const Navbar = () => {
        const [isClick, setisClick] = useState(false);

        const toggleNavbar = () => {
            setisClick(!isClick);
        };

        return (
            <>
                <div>
                    <nav className="">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16 items-center">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="/" className="text-white font-bold text-2xl">
                                            <p className="transition-transform duration-300 hover:scale-110">LukeTheNeko</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center space-x-8 font-bold">
                                        <div className="flex items-center gap-2 hover:text-blue-600 transform hover:scale-105 transition duration-300">
                                            <FaHome color="#fff" size={18} />
                                            <a href="/" className="relative text-white">
                                                Home
                                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-125 transition-transform duration-300 origin-left"></span>
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2 hover:text-blue-600 transform hover:scale-105 transition duration-300">
                                            <FaCode color="#fff" size={18} />
                                            <a href="/projetos" className="relative text-white">
                                                Projetos
                                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-125 transition-transform duration-300 origin-left"></span>
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2 hover:text-blue-600 transform hover:scale-105 transition duration-300">
                                            <FaGithub color="#fff" size={18} />
                                            <a href="https://github.com/LukeTheNeko" target="blank" className="relative text-white">
                                                Github
                                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-125 transition-transform duration-300 origin-left"></span>
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2 hover:text-blue-600 transform hover:scale-105 transition duration-300">
                                            <FaPhone color="#fff" size={18} />
                                            <a href="/contato" className="relative text-white">
                                                Contato
                                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-125 transition-transform duration-300 origin-left"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:hidden flex items-center">
                                    <button className="inline-flex items-center justify-center p-2 rounded-md text-white
                                    hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={toggleNavbar}
                                    >
                                        {isClick ? (
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16m-7 6h7"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isClick && (
                            <div className="md:hidden">
                                <div className="px-6 pt-2 pb-3 space-y-1 sm:px-3 font-bold">
                                    <a href="/" className="text-white flex items-center gap-2 hover:text-blue-400">
                                        <FaHome color="#fff" size={18} />
                                        Home
                                    </a>
                                    <a href="/projetos" className="text-white flex items-center gap-2 hover:text-blue-400">
                                        <FaCode color="#fff" size={18} />
                                        Projetos
                                    </a>
                                    <a href="https://github.com/LukeTheNeko" target="blank" className="text-white flex items-center gap-2 hover:text-blue-400">
                                        <FaGithub color="#fff" size={18} />
                                        GitHub
                                    </a>
                                    <a href="/contato" className="text-white flex items-center gap-2 hover:text-blue-400">
                                        <FaPhone color="#fff" size={18} />
                                        Contato
                                    </a>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </>
        );
    };

    return (
        <Navbar />
    );
}