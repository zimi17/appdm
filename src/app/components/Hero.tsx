'use client'
import bgLine2Img from '@/assets/images/other/bg-lines-2.png'
import bgLine2DarkImg from '@/assets/images/other/bg-lines-2-dark.png'
import hero from '@/assets/images/landing/agency-2/hero.png'
import { LuArrowUpRight } from 'react-icons/lu'
import Link from 'next/link'
import { useLayoutContext } from '@/context'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We educate leaders who{' '}
                <span className="text-red-600">make a difference</span> in the world
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Combining bold ideas, powerful pedagogy, and collaborative cohort-based learning 
                to deliver unparalleled management education and foster lifelong learning networks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Programs
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-red-600 hover:text-red-600 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">2,000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">150+</div>
                <div className="text-sm text-gray-600">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">MBA Program</h3>
                    <p className="text-red-100">Transform your career</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Two-year full-time program</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Case method learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Global network access</span>
                  </div>
                </div>

                <button className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50"></div>
    </section>
  );
}
