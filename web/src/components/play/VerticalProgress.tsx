"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface VerticalProgressProps {
    currentNumber: number
    // isRunning: boolean
}

export default function VerticalProgress({ currentNumber }: VerticalProgressProps) {

    //   const [currentNumber, setCurrentNumber] = useState(0)
    //   const [isRunning, setIsRunning] = useState(false)

    //   useEffect(() => {
    //     if (!isRunning) return

    //     const interval = setInterval(() => {
    //       setCurrentNumber((prev) => {
    //         if (prev >= 10) {
    //           setIsRunning(false)
    //           return prev
    //         }
    //         return prev + 1
    //       })
    //     }, 1000)

    //     return () => clearInterval(interval)
    //   }, [isRunning])

    //   const handleStart = () => {
    //     setCurrentNumber(0)
    //     setIsRunning(true)
    //   }

    //   const handleReset = () => {
    //     setCurrentNumber(0)
    //     setIsRunning(false)
    //   }

    // Generate array of numbers to show (previous, current, next)
    const numbersToShow = []
    for (let i = currentNumber - 2; i <= currentNumber + 2; i++) {
        if (i >= 0 && i <= 10) {
            numbersToShow.push(i)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-8 min-h-40 max-h-40 p-8">
            {/* <div className=""> */}
            {/* Subtle Vertical Line */}
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 opacity-30 transform -translate-x-1/2" /> */}

            {/* Numbers Container */}
    
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {numbersToShow.map((number) => {
                        const position = currentNumber - number // Inverted position calculation
                        const isCenter = position === 0
                        const opacity = isCenter ? 1 : Math.max(0, 1 - Math.abs(position) * 0.4)

                        return (
                            // <>
                                <motion.div
                                    key={number}
                                    initial={{ y: -180, opacity: 0 }}
                                    animate={{
                                        y: position * 32, // 72px spacing between numbers
                                        opacity: opacity,
                                    }}
                                    exit={{ y: 180, opacity: 0 }}
                                    transition={{
                                        type: "easeInOut",
                                        damping: 18,
                                        stiffness: 180,
                                        duration: 1,
                                    }}
                                    className={`mr-4 absolute text-xl font-light ${isCenter ? "text-white" : "text-gray-400"}`}
                                    style={{
                                        transform: `translateY(${position * 32}px)`,
                                    }}
                                >
                                    {number}
                                </motion.div>
                   
                        )
                    })}
                </AnimatePresence>
                {/* <div className="w-4 bg-white h-0.5 mr-14 mb-12"></div>
                <div className="w-4 bg-white/20 h-0.5 mr-14 mb-5"></div>
                <div className="w-4 bg-white/80 h-0.5 mr-14"></div> */}
                {/* <div className="w-4 bg-white/50 h-0.5 mr-14 -mb-2"></div> */}
                {/* <div className="w-4 bg-white/50 h-0.5 mr-14 -mb-6"></div> */}
                
            </div>
            {/* </div> */}

            {/* Controls */}
            {/* <div className="flex gap-4 justify-center mt-12">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="px-6 py-2 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRunning ? "Running..." : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
        >
          Reset
        </button>
      </div> */}

            {/* Status */}
            {/* <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          {currentNumber === 10 ? "Complete!" : isRunning ? "Counting..." : "Ready to start"}
        </p>
      </div> */}
        </div>
    )
}
