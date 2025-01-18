'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
}

export default function Tools() {
    return (
        <motion.div
            className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-8 dark:text-white gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {[
                { name: "Git", icon: "/icons/Git.png" },
                { name: "Github", icon: "/icons/github.png" },
                { name: "VS Code", icon: "/icons/vscode.png" },
                { name: "MySQL", icon: "/icons/mysql.png" },
            ].map((tool, index) => (
                <motion.div
                    key={index}
                    className="col-span-4 md:col-span-2 p-4 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700"
                    variants={itemVariants}
                    
                >
                    <Image src={tool.icon} alt={tool.name} height={24} width={24}></Image>
                    <div className="flex flex-1">
                        <p className="w-full">{tool.name}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

