'use client'

import Link from "next/link";
import Navlinks from './navlinks';
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 w-full z-50">
            <div className="container mx-auto p-6 flex items-center justify-between w-full max-w-7xl">
                {/* Logo */}
                <motion.div className="flex items-center" initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    <Link href="/" className="flex items-center text-center gap-4">
                        <Image
                            src='/eddev.png'
                            width={40}
                            height={40}
                            alt="ed.dev logo"
                        />
                        <p className="font-bold text-green-500 text-2xl">ed.dev</p>
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-green-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                {/* Menu Container */}
                <div
                    className={`fixed top-0 left-0 h-full w-72 md:w-auto place-items-center bg-gray-50 md:bg-inherit dark:bg-gray-900 md:dark:bg-inherit transform transition-transform duration-300 ease-in-out z-20 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } md:relative md:flex md:items-center md:bg-transparent md:translate-x-0`}
                >
                    <div className="container mx-auto flex flex-col gap-6 md:flex-row md:gap-8 p-6 md:p-0">
                        {/* Close Button for Mobile Menu */}
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
                        {/* Navigation Links */}
                        <Navlinks setIsMenuOpen={setIsMenuOpen} />
                    </div>
                </div>
            </div>
        </nav >
    );
}

