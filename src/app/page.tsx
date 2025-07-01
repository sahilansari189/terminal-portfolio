"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import LoadingScreenComponent from "@/components/loading-screen"
import WhoamiOutput from "@/components/sections/whoami-output"
import AboutOutput from "@/components/sections/about-output"
import AboutFullOutput from "@/components/sections/about-full-output"
import SkillsOutput from "@/components/sections/skills-output"
import ProjectsOutput from "@/components/sections/projects-output"
import ExperienceOutput from "@/components/sections/experience-output"
import ContactOutput from "@/components/sections/contact-output"
import LsOutput from "@/components/sections/ls-output"
import HelpOutput from "@/components/sections/help-output"

type Section = "home" | "skills" | "projects" | "experience" | "contact"

interface Command {
  input: string
  output: React.ReactNode
  timestamp: Date
}

export default function TerminalPortfolio() {
  const [currentSection, setCurrentSection] = useState<Section>("home")
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [suggestionIndex, setSuggestionIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [loadingStep, setLoadingStep] = useState(0)
  const [loadingText, setLoadingText] = useState("")

  // Available commands for autocompletion
  const availableCommands = [
    "whoami",
    "cat about.txt",
    "cat about.txt --full",
    "cd /home",
    "cd /skills",
    "cd /projects",
    "cd /experience",
    "cd /contact",
    "contact",
    "ls",
    "help",
    "clear",
  ]

  useEffect(() => {
    // Initialize with whoami and cat about.txt commands
    setCommands([
      {
        input: "whoami",
        output: <WhoamiOutput />,
        timestamp: new Date(),
      },
      {
        input: "cat about.txt",
        output: <AboutOutput />,
        timestamp: new Date(),
      },
    ])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  useEffect(() => {
    const loadingSequence = [
      "Initializing Terminal v1.0...",
      "Loading kernel: sahil_portfolio_os",
      "Mounting file systems...",
      "Starting network services...",
      "Loading user profile...",
      "Initializing shell environment...",
      "Setting up command history...",
      "Loading portfolio data...",
      "Portfolio ready!",
    ]

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < loadingSequence.length) {
        setLoadingText(loadingSequence[currentStep])
        setLoadingStep(currentStep)
        currentStep++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  // Update suggestions based on current input
  useEffect(() => {
    if (currentInput.trim()) {
      const filtered = availableCommands.filter((cmd) => cmd.toLowerCase().startsWith(currentInput.toLowerCase()))
      setSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
    setSuggestionIndex(-1)
  }, [currentInput])

  const clearAndShowSection = (sectionOutput: React.ReactNode, sectionName: string) => {
    // Clear previous commands and show only the new section
    setCommands([
      {
        input: `cd /${sectionName}`,
        output: sectionOutput,
        timestamp: new Date(),
      },
    ])
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = null

    switch (trimmedCmd) {
      case "whoami":
        output = <WhoamiOutput />
        setCommands((prev) => [
          ...prev,
          {
            input: cmd,
            output,
            timestamp: new Date(),
          },
        ])
        return
      case "cat about.txt":
        output = <AboutOutput />
        setCommands((prev) => [
          ...prev,
          {
            input: cmd,
            output,
            timestamp: new Date(),
          },
        ])
        return
      case "cat about.txt --full":
        output = <AboutFullOutput />
        setCommands((prev) => [
          ...prev,
          {
            input: cmd,
            output,
            timestamp: new Date(),
          },
        ])
        return
      case "cd /home":
      case "cd home":
        setCurrentSection("home")
        // Clear and show home section (whoami + about)
        setCommands([
          {
            input: "whoami",
            output: <WhoamiOutput />,
            timestamp: new Date(),
          },
          {
            input: "cat about.txt",
            output: <AboutOutput />,
            timestamp: new Date(),
          },
        ])
        return
      case "cd /skills":
      case "cd skills":
        setCurrentSection("skills")
        clearAndShowSection(<SkillsOutput />, "skills")
        return
      case "cd /projects":
      case "cd projects":
        setCurrentSection("projects")
        clearAndShowSection(<ProjectsOutput />, "projects")
        return
      case "cd /experience":
      case "cd experience":
        setCurrentSection("experience")
        clearAndShowSection(<ExperienceOutput />, "experience")
        return
      case "cd /contact":
      case "cd contact":
      case "contact":
        setCurrentSection("contact")
        clearAndShowSection(<ContactOutput />, "contact")
        return
      case "ls":
        output = <LsOutput />
        break
      case "help":
        output = <HelpOutput />
        break
      case "clear":
        // Reset to home section
        setCurrentSection("home")
        setCommands([
          {
            input: "whoami",
            output: <WhoamiOutput />,
            timestamp: new Date(),
          },
          {
            input: "cat about.txt",
            output: <AboutOutput />,
            timestamp: new Date(),
          },
        ])
        return
      default:
        output = <div className="text-red-400">Command not found: {cmd}</div>
    }

    setCommands((prev) => [
      ...prev,
      {
        input: cmd,
        output,
        timestamp: new Date(),
      },
    ])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()

      if (suggestions.length > 0) {
        if (suggestionIndex === -1) {
          // First tab - show first suggestion
          setSuggestionIndex(0)
          setCurrentInput(suggestions[0])
        } else {
          // Cycle through suggestions
          const nextIndex = (suggestionIndex + 1) % suggestions.length
          setSuggestionIndex(nextIndex)
          setCurrentInput(suggestions[nextIndex])
        }
      }
    } else if (e.key === "ArrowUp" && showSuggestions) {
      e.preventDefault()
      if (suggestions.length > 0) {
        const newIndex = suggestionIndex <= 0 ? suggestions.length - 1 : suggestionIndex - 1
        setSuggestionIndex(newIndex)
        setCurrentInput(suggestions[newIndex])
      }
    } else if (e.key === "ArrowDown" && showSuggestions) {
      e.preventDefault()
      if (suggestions.length > 0) {
        const newIndex = (suggestionIndex + 1) % suggestions.length
        setSuggestionIndex(newIndex)
        setCurrentInput(suggestions[newIndex])
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
      setSuggestionIndex(-1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      handleCommand(currentInput)
      setCurrentInput("")
      setShowSuggestions(false)
      setSuggestionIndex(-1)
    }
  }

  const handleTabClick = (section: Section) => {
    const command = `cd /${section}`
    setCurrentInput(command)
    handleCommand(command)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentInput(suggestion)
    setShowSuggestions(false)
    setSuggestionIndex(-1)
    inputRef.current?.focus()
  }

  if (isLoading) {
    return <LoadingScreenComponent loadingText={loadingText} loadingStep={loadingStep} />
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Container with Green Border */}
        <div className="border-2 border-green-500 bg-black text-green-400 font-mono">
          {/* Terminal Header */}
          <div className="border-b border-green-500 p-3">
            <div className="text-sm">Sahil Ansari's Portfolio | Terminal v1.0</div>
          </div>

          {/* Navigation Tabs */}
          <div className="p-4 text-center">
            <div className="flex justify-center gap-6 text-sm">
              {[
                { section: "home" as Section, label: "cd /home" },
                { section: "skills" as Section, label: "cd /skills" },
                { section: "projects" as Section, label: "cd /projects" },
                { section: "experience" as Section, label: "cd /experience" },
                { section: "contact" as Section, label: "cd /contact" },
              ].map(({ section, label }) => (
                <button
                  key={section}
                  onClick={() => handleTabClick(section)}
                  className={`hover:text-green-300 transition-colors underline ${
                    currentSection === section ? "text-green-300" : "text-green-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-4 min-h-[500px] max-h-[600px] overflow-y-auto relative terminal-scrollbar"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Command History */}
            {commands.map((command, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-green-400">{command.input}</span>
                </div>
                <div className="mt-2">{command.output}</div>
              </div>
            ))}

            {/* Hint Box - Only show on home section */}
            {currentSection === "home" && (
              <div className="my-6 p-3 border border-yellow-600 bg-yellow-900/10 text-yellow-400 text-sm">
                → Type: 'cat about.txt --full'
              </div>
            )}

            {/* Section-specific hints */}
            {currentSection === "skills" && (
              <div className="my-6 p-3 border border-blue-600 bg-blue-900/10 text-blue-400 text-sm">
                → Skills and technologies I work with. Type 'help' for more commands.
              </div>
            )}

            {currentSection === "projects" && (
              <div className="my-6 p-3 border border-purple-600 bg-purple-900/10 text-purple-400 text-sm">
                → Featured projects and work samples.
              </div>
            )}

            {currentSection === "experience" && (
              <div className="my-6 p-3 border border-cyan-600 bg-cyan-900/10 text-cyan-400 text-sm">
                → Professional experience and career journey. Type 'cd /home' to return home.
              </div>
            )}

            {currentSection === "contact" && (
              <div className="my-6 p-3 border border-pink-600 bg-pink-900/10 text-pink-400 text-sm">
                → Get in touch! Multiple ways to reach out and connect.
              </div>
            )}

            {/* Autocompletion Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="mb-4 p-2 border border-green-600 bg-green-900/10 rounded">
                <div className="text-green-300 text-xs mb-2">Suggestions (Tab to cycle, ↑↓ to navigate):</div>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`text-sm cursor-pointer px-2 py-1 rounded ${
                        index === suggestionIndex ? "bg-green-700 text-green-100" : "text-green-400 hover:bg-green-800"
                      }`}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400">/{currentSection}$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                placeholder="Type command..."
                autoFocus
              />
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-green-500 p-3 text-center text-xs text-green-600">
            © 2025 Sahil Ansari
          </div>
        </div>
      </div>
    </div>
  )
}
