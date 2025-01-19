'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function MyProjects() {
    return (
        <motion.div
            className="grid grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="relative col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col h-[26.25rem] p-6 gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-transform duration-300 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.1 } }}
            >
                <motion.div
                    className="bg-white dark:bg-gray-800 h-44 flex items-center justify-center bg-center bg-contain bg-no-repeat overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src='/projects/personal_website.png' alt='project' height={500} width={500} className='rounded'></Image>
                </motion.div>

                <motion.div className="flex flex-col gap-6" variants={itemVariants}>
                    <motion.div className=" text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-4" variants={itemVariants}>
                        <motion.p className="font-medium text-base text-black dark:text-white text-center" variants={itemVariants}>
                            Personal Website
                        </motion.p>

                        <motion.p className="text-justify" variants={itemVariants}>
                            This is my personal website. I created this website to showcase my profile, skills, and projects.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex gap-4 font-medium text-sm" variants={itemVariants}>
                        <motion.p className="font-medium text-green-500" variants={itemVariants}>NextJS, Tailwind CSS</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="https://github.com/ejayayayyy/ed.dev"
                        target="_blank"
                        className="border hover:border-gray-900 dark:border-gray-700 group bg-white dark:bg-gray-700 transition duration-150 hover:bg-gray-900 hover:px-3 p-1.5 shadow-md rounded-full flex items-center gap-2"
                    >
                        <svg className="w-6 h-6 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                        </svg>
                        <motion.p
                            className="hidden group-hover:flex text-white text-sm transition-opacity duration-300 ease-in-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            View on GitHub
                        </motion.p>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col h-[26.25rem] p-6 gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-transform duration-300 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.1 } }}
            >
                <motion.div
                    className="bg-white dark:bg-gray-800 h-44 rounded flex items-center justify-center bg-center bg-contain bg-no-repeat overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src='/projects/passify.png' alt='project' height={500} width={500} className='rounded'></Image>
                </motion.div>

                <motion.div className="flex flex-col gap-6" variants={itemVariants}>
                    <motion.div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-4" variants={itemVariants}>
                        <motion.p className="font-medium text-base text-black dark:text-white text-center" variants={itemVariants}>
                            Passify
                        </motion.p>

                        <motion.p className="text-justify" variants={itemVariants}>
                            This is a password manager website. In this website, a user can store, generate, and test their password.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex gap-4 font-medium text-sm" variants={itemVariants}>
                        <motion.p className="font-medium text-green-500" variants={itemVariants}>NodeJS, MySQL, VueJS 3, Tailwind CSS</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

