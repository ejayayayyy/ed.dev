'use client'

import { motion } from 'framer-motion'
import ContactMe from "./ui/contactMe"
import SendMessage from './ui/sendMessage'

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

export default function Contact() {
  return (
    <motion.div
      className="container w-full max-w-7xl mx-auto px-6 py-12 pt-28 min-h-screen flex flex-col gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col gap-1 text-center" variants={itemVariants}>
        <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>Get In Touch</motion.p>
        <motion.span className="text-gray-500 dark:text-gray-400 text-sm" variants={itemVariants}>
          Reach me out using the information below
        </motion.span>
      </motion.div>

      <motion.div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center" variants={containerVariants}>
        <ContactMe />
        <SendMessage />

      </motion.div>
    </motion.div>
  )
}
