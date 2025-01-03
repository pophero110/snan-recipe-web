'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface TimerProps {
  duration: number // in seconds
}

export default function Timer({ duration }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(duration)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 font-mono">{formatTime(timeLeft)}</span>
      <button onClick={toggleTimer} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        {isRunning ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <button onClick={resetTimer} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        <RotateCcw size={16} />
      </button>
    </div>
  )
}

