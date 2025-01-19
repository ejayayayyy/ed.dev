'use client'

import Image from "next/image"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Frontend Developer";
  const typingSpeed = 100; // ms

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative min-h-screen w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container w-full max-w-7xl mx-auto p-4 md:p-6 place-content-center min-h-screen flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 xl:gap-28">
          {/* left */}
          <motion.div className="flex flex-col gap-12 flex-shrink-0" variants={itemVariants}>
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <motion.p 
                className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400"
                variants={itemVariants}
              >
                Hello, I&apos;m
              </motion.p>

              <div className="flex flex-col gap-1">
                <motion.p 
                  className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white"
                  variants={itemVariants}
                >
                  Edward Gatbonton
                </motion.p>
                <motion.p 
                  className="text-xl sm:text-2xl text-green-500 font-bold typing-cursor transition-transform duration-150 ease-in-out"
                  variants={itemVariants}
                >
                  {text}
                </motion.p>
              </div>
            </div>
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="px-6 py-2 bg-green-500 text-white rounded-full transition-colors duration-150 hover:bg-green-600">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* right (image here) */}
          <motion.div 
            className="w-full flex items-center justify-center"
            variants={itemVariants}
          >
            <Image
              src='/image_1.png'
              alt="Image 1"
              height={400}
              width={400}
              className="block sm:hidden"
            />
            <Image
              src='/image_1.png'
              alt="Image 1"
              height={450}
              width={450}
              className="hidden sm:block lg:hidden"
            />
            <Image
              src='/image_1.png'
              alt="Image 1"
              height={450}
              width={450}
              className="hidden lg:block xl:hidden"
            />
            <Image
              src='/image_1.png'
              alt="Image 1"
              height={760}
              width={1000}
              className="hidden xl:block"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

