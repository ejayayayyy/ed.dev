'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

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

export default function Navlinks({setIsMenuOpen}: {setIsMenuOpen : (isOpen:boolean) => void}) {
    const pathname = usePathname()
    return (
        <>
            <div className="flex flex-col md:flex-row gap-8">
                {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className={clsx(
                            'transition-colors duration-150 hover:text-green-500', pathname === link.href ? 'text-green-500 font-medium underline underline-offset-8' : 'text-gray-400 font-normal'
                        )}>
                            <p>{link.name}</p>
                        </Link>
                    )
                })}
            </div>

        </>
    )
}