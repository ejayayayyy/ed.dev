'use client'

import { motion } from 'framer-motion'
import AboutMe from "./ui/aboutMe/aboutMe"
import Skills from "./ui/skills/skills"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

export default function About() {
  return (
    <motion.div 
      className="container w-full max-w-7xl mx-auto px-6 py-12 pt-28 min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col gap-12" variants={itemVariants}>
        <AboutMe />
        <Skills />
      </motion.div>
    </motion.div>
  )
}
