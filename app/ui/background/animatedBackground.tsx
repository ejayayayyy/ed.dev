'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
    id: number
    startX: number
    startY: number
    endX: number
    endY: number
    size: number
    duration: number
}

export default function AnimatedParticles() {
    const [particles, setParticles] = useState<Particle[]>([])

    const createParticle = (id: number): Particle => ({
        id,
        startX: Math.random() * 100, // Start anywhere along the X-axis (0-100%)
        startY: Math.random() * 100, // Start anywhere along the Y-axis (0-100%)
        endX: Math.random() * 100,   // End anywhere along the X-axis (0-100%)
        endY: Math.random() * 100,   // End anywhere along the Y-axis (0-100%)
        size: Math.random() * 300 + 150, // Random size between 5-25px (smaller for particles)
        duration: Math.random() * 5 + 3 // Random duration between 3-8s (faster for particles)
    })

    useEffect(() => {
        // Generate initial particles
        const initialParticles = Array.from({ length: 5 }, (_, i) => createParticle(i)) // Increase count for particles
        setParticles(initialParticles)

        // Regenerate particles periodically with unique IDs
        // const interval = setInterval(() => {
        //     setParticles(prev =>
        //         prev.map((_, index) => createParticle(Date.now() + index))
        //     )
        // }, 25000) 

        // return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-green-500 dark:bg-green-500 blur-3xl opacity-[0.3]"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        opacity: 0.15, // Lower opacity for particle transparency
                    }}
                    initial={{
                        left: `${particle.startX}%`,
                        top: `${particle.startY}%`,
                    }}
                    animate={{
                        left: `${particle.endX}%`,
                        top: `${particle.endY}%`,
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}
