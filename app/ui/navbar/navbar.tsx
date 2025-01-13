'use client'

import Link from "next/link"
import Navlinks from './navlinks'
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="top-0 absolute w-full bg-white">
            <div className="container mx-auto p-6 flex items-center justify-between w-full max-w-7xl">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center text-center gap-2">
                        <Image
                            src='/eddev.png'
                            width={40}
                            height={40}
                            alt="ed.dev logo"
                        />
                        <p className="font-bold text-green-500 text-2xl">ed.dev</p>
                    </Link>
                </div>

                <button
                    className="md:hidden text-green-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {isMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={() => setIsMenuOpen(false)} // Clicking the overlay closes the menu
                    />
                )}

                <div
                    className={`fixed top-0 left-0 h-full w-72 bg-gray-50 transform transition-transform duration-300 z-20 md:relative md:flex md:items-center md:bg-transparent md:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } md:w-auto`}
                >
                    <div className="container mx-auto flex flex-col gap-6 md:flex-row md:gap-8 p-6 md:p-0">
                        <button
                            className="self-end text-green-500 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Navlinks setIsMenuOpen={setIsMenuOpen} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
