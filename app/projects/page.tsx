'use client'

import { motion } from 'framer-motion'
import MyProjects from "./ui/myProjects/projects"

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

export default function Projects() {
  return (
    <motion.div
      className="container w-full max-w-7xl mx-auto px-6 py-12 pt-28 min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col gap-8" variants={itemVariants}>
        <motion.div className="flex flex-col gap-1 text-center" variants={itemVariants}>
          <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>
            Past Project Experience
          </motion.p>
          <motion.span className="text-gray-500 dark:text-gray-400 text-sm" variants={itemVariants}>
            Explore the project I&apos;ve worked so far
          </motion.span>
        </motion.div>

        <MyProjects />
      </motion.div>
    </motion.div>
  )
}
