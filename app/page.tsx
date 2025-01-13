'use client'

import Image from "next/image"
import { useState, useEffect } from 'react';

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

  return (
    <div className="container w-full max-w-7xl mx-auto p-6 place-content-center min-h-screen flex flex-col bg-red-00">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 xl:gap-28">
        {/* left */}
        <div className="flex flex-col gap-12 flex-shrink-0 bg--500">
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <p className="text-xl sm:text-2xl font-medium text-gray-500 animate_animated animate_slideInDown">Hello, I'm</p>

            <div className="flex flex-col gap-1">
              <p className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900">Edward Gatbonton</p>
              <p className="text-xl sm:text-2xl text-green-500 font-bold typing-cursor transition-transform duration-150 ease-in-out">{text}</p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <button className="px-6 py-2 bg-green-500 text-white rounded-full transition-colors duration-150 hover:bg-green-600">Download CV</button>
          </div>
        </div>

        {/* right (image here) */}
        <div className=" w-full flex items-center justify-center bg--500">
          <Image
            src='/image_1.png'
            alt="Image 1"
            height={400}
            width={400}
            className=" block sm:hidden"
          >
          </Image>
          <Image
            src='/image_1.png'
            alt="Image 1"
            height={450}
            width={450}
            className=" hidden sm:block lg:hidden"
          >
          </Image>
          <Image
            src='/image_1.png'
            alt="Image 1"
            height={450}
            width={450}
            className=" hidden lg:block xl:hidden"
          >
          </Image>
          <Image
            src='/image_1.png'
            alt="Image 1"
            height={760}
            width={1000}
            className=" hidden xl:block"
          >
          </Image>
        </div>
      </div>
    </div>
  )
}
