'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import TechStack from "./techStack"
import Tools from "./tools"

const components = {
    techStack: TechStack,
    tools: Tools
}

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

export default function Skills() {
    const [selectedOption, setSelectedOption] = useState<'techStack' | 'tools'>('techStack');

    const SelectedComponent = components[selectedOption]

    return (
        <motion.div className="flex flex-col gap-6" variants={containerVariants}>
            <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>Skills</motion.p>

            <motion.div className="flex flex-col gap-4" variants={containerVariants}>
                <motion.div className="flex gap-2 items-center text-sm" variants={itemVariants}>
                    {Object.keys(components).map((key) => (
                        <motion.button
                            key={key}
                            className={`px-6 py-2 rounded-full transition-colors duration-150 ${selectedOption === key ? 'bg-green-500 text-white' : 'text-gray-500 dark:text-gray-400 transition-colors duration-150 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                            onClick={() => setSelectedOption(key as 'techStack' | 'tools')}
                            
                        >
                            {key === 'techStack' ? 'Tech Stack' : 'Tools'}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <SelectedComponent />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
