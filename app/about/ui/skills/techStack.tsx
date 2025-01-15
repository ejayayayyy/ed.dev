'use client'

import { motion } from 'framer-motion'

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

export default function TechStack() {
    return (
        <motion.div
            className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-8 gap-4 dark:text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {[
                { name: "HTML", icon: "/icons/html.png" },
                { name: "CSS", icon: "/icons/css.png" },
                { name: "JavaScript", icon: "/icons/js.png" },
                { name: "NodeJS", icon: "/icons/nodejs.png" },
                { name: "ExpressJS", icon: "/icons/expressjs.png" },
                { name: "VueJs", icon: "/icons/vuejs.png" },
                { name: "NextJs", icon: "/icons/nextjs.png" },
                { name: "Tailwind", icon: "/icons/tailwind.png" },
                { name: "Bootstrap", icon: "/icons/bootstrap.png" },
            ].map((tech, index) => (
                <motion.div
                    key={index}
                    className="col-span-4 md:col-span-2 p-4 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700"
                    variants={itemVariants}

                >
                    <img src={tech.icon || "/placeholder.svg"} className="w-6 h-6" alt={tech.name} />
                    <div className="flex flex-1">
                        <p className="w-full">{tech.name}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

