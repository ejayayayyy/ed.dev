'use client'

import Image from "next/image"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function AboutMe() {
    return (
        <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow flex flex-col gap-6 items-center"
            variants={containerVariants}
        >
            <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>Get To Know Me</motion.p>

            <motion.div className="flex flex-col items-center justify-center lg:flex-row gap-8 sm:gap-12" variants={containerVariants}>
                <motion.div className="flex items-center justify-center" variants={itemVariants}>
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={300}
                        width={300}
                        className="block sm:hidden"
                    />
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={400}
                        width={400}
                        className="hidden sm:block lg:hidden"
                    />
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={600}
                        width={600}
                        className="hidden lg:block"
                    />
                </motion.div>

                <motion.div className="w-full flex flex-col gap-8 text-gray-500 dark:text-gray-400 text-justify" variants={containerVariants}>
                    <motion.div className="flex flex-col gap-8" variants={itemVariants}>
                        <motion.p className="indent-12" variants={itemVariants}>
                            I am <span className="text-green-500 font-medium">Edward Gatbonton</span>, a dedicated 3rd Year Bachelor of Science in Information Technology (BSIT) student at
                            <span> <a href="https://www.minsu.edu.ph/" target="_blank" className="text-green-500 font-medium underline underline-offset-4 transition-colors duration-150 hover:text-green-600">Mindoro State University</a></span>. My passion lies in the world of <span className="text-green-500 font-medium">Frontend Development,</span> where I bring creativity and technical skills together to craft seamless and engaging user experiences.
                            Over the past few years, I have honed my ability to design and develop interactive web interfaces that prioritize user satisfaction by ensuring easy navigation, responsiveness, and visually appealing aesthetics.
                        </motion.p>
                        <motion.p className="indent-12" variants={itemVariants}>
                            I enjoy exploring the latest web technologies and best practices, continuously pushing myself to learn and grow in this ever-evolving field.
                            My ultimate goal is to bridge the gap between users and technology by building accessible, efficient, and intuitive websites that enhance digital interactions.
                            With a strong foundation in web design principles and a passion for problem-solving, I am committed to making meaningful contributions to the digital landscape and delivering exceptional web solutions.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
