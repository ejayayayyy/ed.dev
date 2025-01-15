'use client'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function ContactMe() {
    return (
        <motion.div
            className="w-full max-w-xl lg:w-96 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p className="text-2xl font-bold text-green-500 text-center" variants={itemVariants}>Contact Info</motion.p>

            <motion.div className="flex flex-col items-center gap-6" variants={containerVariants}>
                <motion.p className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm w-full transition-transform duration-150 hover:text-black dark:hover:text-white ease-in-out cursor-default" variants={itemVariants}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Edward Castillo Gatbonton
                </motion.p>

                <motion.p className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm w-full transition-transform duration-150 hover:text-black dark:hover:text-white ease-in-out cursor-default" variants={itemVariants}>
                    <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                    </svg>
                    Poblacion 2, Victoria, Oriental Mindoro
                </motion.p>

                <motion.p className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm w-full transition-transform duration-150 hover:text-black dark:hover:text-white ease-in-out cursor-default" variants={itemVariants}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    edwardgatbonton13@gmail.com
                </motion.p>

                <motion.p className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm w-full transition-transform duration-150 hover:text-black dark:hover:text-white ease-in-out cursor-default" variants={itemVariants}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                    </svg>
                    (0916) 256 1433
                </motion.p>
            </motion.div>

            <motion.div className="flex items-center justify-center gap-4" variants={containerVariants}>
                <motion.a
                    href="https://github.com/ejayayayyy"
                    target="_blank"
                    className="border dark:border-gray-700 hover:border-gray-900 group bg-white dark:bg-gray-700 transition duration-150 hover:bg-gray-900 hover:px-3 p-1.5 shadow-md rounded-full flex items-center gap-2"
                    variants={socialVariants}
                >
                    <svg className="w-6 h-6 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                    </svg>
                    <p className="hidden group-hover:flex text-white text-sm transition-opacity duration-300 ease-in-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                        Github
                    </p>
                </motion.a>

                <motion.a
                    href="https://www.facebook.com/itsyoboyeddyyy"
                    target="_blank"
                    className="border dark:border-gray-700 hover:border-sky-500 group bg-white dark:bg-gray-700 transition duration-150 hover:bg-sky-500 hover:px-3 p-1.5 shadow-md rounded-full flex items-center gap-2"
                    variants={socialVariants}
                >
                    <svg className="w-6 h-6 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                    </svg>
                    <p className="hidden group-hover:flex text-white text-sm transition duration-300 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                        Facebook
                    </p>
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/edward-gatbonton-191047303/"
                    target="_blank"
                    className="border dark:border-gray-700 hover:border-blue-500 group bg-white dark:bg-gray-700 transition duration-150 hover:bg-blue-500 hover:px-3 p-1.5 shadow-md rounded-full flex items-center gap-2"
                    variants={socialVariants}
                >
                    <svg className="w-6 h-6 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                    <p className="hidden group-hover:flex text-white text-sm transition duration-300 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                        LinkedIn
                    </p>
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

