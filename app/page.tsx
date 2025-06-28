"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CalculatorPage() {
  const [input, setInput] = useState("")

  const handleClick = (val: string) => {
    if (val === "C") return setInput("")
    if (val === "+/-") return setInput(prev => (prev.startsWith("-") ? prev.slice(1) : "-" + prev))
    if (val === "=") {
      try {
        setInput(eval(input).toString())
      } catch {
        setInput("Error")
      }
      return
    }
    setInput(prev => prev + val)
  }

  const buttons = [
    ["C", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-6 flex flex-col justify-end">
      {/* Title */}
      <div className="text-right text-sm text-white/60 mb-1">Calculator</div>

      {/* Display */}
      <div className="text-right text-5xl font-light break-words min-h-[72px] mb-6">
        {input || "0"}
      </div>

      {/* Button Grid */}
      <div className="space-y-3 text-white">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-3">
            {row.map((btn, colIndex) => {
              const isZero = btn === "0" && rowIndex === 4
              const isOperator = ["/", "*", "-", "+"].includes(btn)
              const isSpecial = btn === "C" || btn === "+/-" || btn === "%"
              const isEquals = btn === "="

              const baseClasses = `
                ${isZero ? "aspect-[2/1] col-span-2" : "aspect-square"}
                w-full rounded-[1.25rem] text-xl font-semibold
                bg-current text-black
              `

              return (
                <Button
                  key={colIndex}
                  onClick={() => handleClick(btn)}
                  className={baseClasses}
                  style={{
                    color:
                      isOperator || isEquals
                        ? "black"
                        : "white",
                    backgroundColor:
                      isEquals
                        ? "white"
                        : isOperator
                        ? "currentColor"
                        : isSpecial
                        ? "#999" // optional gray tone for utility buttons
                        : "currentColor",
                  }}
                  variant="ghost"
                >
                  {btn}
                </Button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
