'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { sendEmail } from '../../actions/sendEmail'

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

export default function SendMessage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setIsSubmitting(false)
    setSubmitResult(result)

    if (result.success && formRef.current) {
      formRef.current.reset()
    }
  }
  return (
    <motion.div
      className="w-full max-w-xl lg:max-w-2xl flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
      variants={itemVariants}
    >
      <motion.div className="flex flex-col gap-1 text-center px-8 pt-8" variants={itemVariants}>
        <motion.p className="text-2xl font-bold text-green-500" variants={itemVariants}>Enter Your Message</motion.p>
        <motion.span className="text-gray-500 dark:text-gray-400 text-sm" variants={itemVariants}>
          Got more questions? Drop your message here
        </motion.span>
      </motion.div>

      <motion.form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 md:p-8" variants={itemVariants}>
        <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
          <motion.div className="col-span-2 md:col-span-1 flex flex-col gap-1" variants={itemVariants}>
            <motion.label htmlFor="name" className="block dark:text-white" variants={itemVariants}>Name</motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
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
              name="email"
              required
              className="w-full text-sm px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:border-green-500 dark:text-white transition-colors duration-150"
              placeholder="Enter your email address"
              variants={itemVariants}
            />
          </motion.div>

          <motion.div className="col-span-2 flex flex-col gap-1" variants={itemVariants}>
            <motion.label htmlFor="message" className="block dark:text-white" variants={itemVariants}>Message</motion.label>
            <motion.textarea
              id="message"
              name="message"
              rows={5}
              required
              className="resize-none w-full text-sm px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:border-green-500 dark:text-white transition-colors duration-150"
              placeholder="Enter your message here"
              variants={itemVariants}
            ></motion.textarea>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col items-center justify-center gap-4" variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-green-500 text-white rounded-full transition-colors duration-150 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </motion.button>
          {submitResult && (
            <motion.p
              className={`text-sm ${submitResult.success ? 'text-green-500' : 'text-red-500'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitResult.message}
            </motion.p>
          )}
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

