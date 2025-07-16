"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Rocket, Star } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handlePortalClick = () => {
    window.open("https://siakad.stiedwimulya.ac.id", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <Star className="text-white opacity-60" size={Math.random() * 8 + 4} />
          </div>
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6">
            <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            STIE Dwimulya
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">Under Maintenance</h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We're working hard to bring you an amazing new experience. Our website will be back online soon with
            exciting new features!
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="bg-black/30 backdrop-blur-md border-purple-500/30 mb-8 animate-pulse-slow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white text-center mb-4">Launching in:</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-purple-200">Days</div>
              </div>
              <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-blue-200">Hours</div>
              </div>
              <div className="bg-gradient-to-b from-pink-600 to-pink-800 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-pink-200">Minutes</div>
              </div>
              <div className="bg-gradient-to-b from-green-600 to-green-800 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-green-200">Seconds</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portal Button */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Need to access our academic system?</p>
          <Button
            onClick={handlePortalClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Access SIAKAD Portal
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">© 2025 STIE Dwimulya. All rights reserved.</p>
          <p className="text-xs mt-2">Target Launch: August 17th, 2025 - Indonesia Independence Day</p>
        </div>
      </div>

      {/* Additional CSS for custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
