'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
import clsx from 'clsx'
import { motion } from "framer-motion";

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.1 }
    })
}

export default function Navlinks({ setIsMenuOpen }: { setIsMenuOpen: (isOpen: boolean) => void }) {
    const pathname = usePathname()
    return (
        <motion.div
            className="flex flex-col md:flex-row gap-8"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            {links.map((link, index) => {
                return (
                    <motion.div
                        key={link.name}
                        variants={linkVariants}
                        custom={index}
                        
                    >
                        <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={clsx(
                                'transition-colors duration-150 hover:text-green-500',
                                pathname === link.href ? 'text-green-500 font-medium underline underline-offset-8' : 'text-gray-400 font-normal'
                            )}
                        >
                            <p>{link.name}</p>
                        </Link>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

