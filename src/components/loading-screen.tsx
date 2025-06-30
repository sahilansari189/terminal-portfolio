"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  loadingText: string
  loadingStep: number
}

export default function LoadingScreen({ loadingText, loadingStep }: LoadingScreenProps) {
  const [dots, setDots] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(dotsInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 600)

    return () => clearInterval(cursorInterval)
  }, [])

  const getProgressBar = (step: number) => {
    const total = 9
    const filled = Math.min(step + 1, total)
    const percentage = (filled / total) * 100
    const filledChars = Math.floor((filled / total) * 30)
    const emptyChars = 30 - filledChars

    return (
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400">[</span>
          <span className="text-green-400">{"█".repeat(filledChars)}</span>
          <span className="text-green-800">{"░".repeat(emptyChars)}</span>
          <span className="text-green-400">]</span>
          <span className="text-green-400 ml-2">{Math.round(percentage)}%</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="border-2 border-green-500 bg-black text-green-400 font-mono">
          {/* Terminal Header */}
          <div className="border-b border-green-500 p-3">
            <div className="text-sm">Terminal v1.0 | Booting System...</div>
          </div>

          {/* Loading Content */}
          <div className="p-6 min-h-[400px] flex flex-col justify-center">
            {/* ASCII Art Logo */}
            <div className="text-center mb-8 text-yellow-400 text-xs leading-tight">
              <pre>{`
███████╗ █████╗ ██╗  ██╗██╗██╗         █████╗ ███╗   ██╗███████╗ █████╗ ██████╗ ██╗
██╔════╝██╔══██╗██║  ██║██║██║        ██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔══██╗██║
███████╗███████║███████║██║██║        ███████║██╔██╗ ██║███████╗███████║██████╔╝██║
╚════██║██╔══██║██╔══██║██║██║        ██╔══██║██║╚██╗██║╚════██║██╔══██║██╔══██╗██║
███████║██║  ██║██║  ██║██║███████╗   ██║  ██║██║ ╚████║███████║██║  ██║██║  ██║██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝

██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
              `}</pre>
            </div>

            {/* Boot Messages */}
            <div className="space-y-2 mb-6">
              <div className="text-green-400 text-sm">
                <span className="text-green-500">[BOOT]</span> Starting Sahil Ansari's Portfolio....
              </div>
              <div className="text-green-400 text-sm">
                <span className="text-green-500">[INFO]</span> Kernel version: portfolio_os-1.0.
              </div>
              <div className="text-green-400 text-sm">
                <span className="text-green-500">[INFO]</span> Architecture: x86_64
              </div>
              <div className="text-green-400 text-sm">
                <span className="text-green-500">[INFO]</span> Memory: 16GB Available
              </div>
            </div>

            {/* Current Loading Step */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-green-500">[{loadingStep + 1}/9]</span>
                <span>{loadingText}</span>
                <span className="text-green-400">{dots}</span>
                {showCursor && <span className="text-green-400">█</span>}
              </div>
            </div>

            {/* Progress Bar */}
            {getProgressBar(loadingStep)}

            {/* System Info */}
            <div className="mt-8 text-xs text-green-600 space-y-1">
              <div>Built with React + TypeScript</div>
              <div>Runtime: Terminal.js</div>
              <div>© 2025 Sahil Ansari</div>
            </div>

            {/* Loading Complete Message */}
            {loadingStep >= 8 && (
              <div className="mt-6 text-center">
                <div className="text-green-300 text-sm animate-pulse">Press any key to continue...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
