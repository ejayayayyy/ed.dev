'use client'

import { motion } from 'framer-motion'
import ContactMe from "./ui/contactMe"

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

        <motion.div
          className="w-full max-w-xl flex flex-col gap-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
          variants={itemVariants}
        >
          <motion.div className="flex flex-col gap-1 text-center" variants={itemVariants}>
            <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>Enter Your Message</motion.p>
            <motion.span className="text-gray-500 dark:text-gray-400 text-sm" variants={itemVariants}>
              Got more questions? Drop your message here
            </motion.span>
          </motion.div>

          <motion.form action="" className="flex flex-col gap-6" variants={itemVariants}>
            <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
              <motion.div className="col-span-2 md:col-span-1 flex flex-col gap-1" variants={itemVariants}>
                <motion.label htmlFor="name" className="block dark:text-white" variants={itemVariants}>Name</motion.label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full text-sm px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:border-green-500 dark:text-white transition-colors duration-150"
                  placeholder="Enter your full name"
                  variants={itemVariants}
                />
              </motion.div>

              <motion.div className="col-span-2 md:col-span-1 flex flex-col gap-1" variants={itemVariants}>
                <motion.label htmlFor="email" className="block dark:text-white" variants={itemVariants}>Email</motion.label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full text-sm px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:border-green-500 dark:text-white transition-colors duration-150"
                  placeholder="Enter your email address"
                  variants={itemVariants}
                />
              </motion.div>

              <motion.div className="col-span-2 flex flex-col gap-1" variants={itemVariants}>
                <motion.label htmlFor="message" className="block dark:text-white" variants={itemVariants}>Message</motion.label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="resize-none w-full text-sm px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:border-green-500 dark:text-white transition-colors duration-150"
                  placeholder="Enter your message here"
                  variants={itemVariants}
                ></motion.textarea>
              </motion.div>
            </motion.div>

            <motion.div className="flex items-center justify-center" variants={itemVariants}>
              <motion.button
                className="px-6 py-2 bg-green-500 text-white rounded-full transition-colors duration-150 hover:bg-green-600"
              >
                Send
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
