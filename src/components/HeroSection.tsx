'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const phrases = useMemo(() => [
    'Senior Software Engineer',
    'Enterprise Architecture Specialist',
    'Cloud Solutions Architect',
    'Backend Systems Engineer'
  ], [])

  useEffect(() => {
    const currentText = phrases[currentPhrase]
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next phrase
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentPhrase, phrases])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center min-h-screen">
          
          {/* Left Column - Photo + Achievement */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-center">
            {/* Professional Photo - Elegant Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative">
                {/* Subtle Elegant Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/15 via-blue-500/10 to-slate-600/15 rounded-3xl blur-xl"></div>
                
                {/* Sophisticated Frame Background */}
                <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 rounded-3xl shadow-2xl">
                  {/* Elegant Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-slate-500/30 to-blue-500/40 rounded-3xl p-0.5 -z-10">
                    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl w-full h-full"></div>
                  </div>
                  
                  {/* Inner Frame with Refined Gradient */}
                  <div className="bg-gradient-to-br from-emerald-500/15 via-slate-600/10 to-blue-500/15 p-4 rounded-2xl border border-emerald-400/20 shadow-inner">
                    {/* Photo Container */}
                    <div className="relative w-96 h-96 rounded-xl overflow-hidden shadow-2xl">
                      {/* Elegant Photo Border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/60 via-slate-400/40 to-blue-400/60 rounded-xl p-1">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900">
                          <Image
                            src="/puneet_image.jpeg"
                            alt="Puneet Dimri - Senior Software Engineer"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                      
                      {/* Subtle Photo Enhancement */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-blue-500/5 z-10"></div>
                    </div>
                  </div>
                  
                  {/* Refined Professional Badge */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Minimalist Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-400/40 rounded-full blur-sm"></div>
                <div className="absolute -bottom-3 -right-6 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"></div>
                
                {/* Sophisticated Corner Accents */}
                <div className="absolute top-6 left-6 w-8 h-0.5 bg-gradient-to-r from-emerald-400/60 to-transparent rounded-full"></div>
                <div className="absolute top-6 left-6 w-0.5 h-8 bg-gradient-to-b from-emerald-400/60 to-transparent rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-8 h-0.5 bg-gradient-to-l from-blue-400/60 to-transparent rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-0.5 h-8 bg-gradient-to-t from-blue-400/60 to-transparent rounded-full"></div>
              </div>
            </motion.div>

            {/* Compact Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-4 border border-emerald-400/20 w-full max-w-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-sm">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Latest Achievement</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Successfully migrated enterprise applications to multi-cloud infrastructure, 
                      achieving 99.9% uptime and 70% reduction in deployment time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Main Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full text-emerald-400 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Puneet Dimri
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-12 flex items-center"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400">
                  {displayedText}
                  <span className="animate-pulse ml-1">|</span>
                </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-300 leading-relaxed max-w-xl"
              >
                Driving digital transformation through enterprise-grade software solutions. 
                8+ years of expertise in designing and implementing scalable backend systems, 
                cloud infrastructure, and modern application architectures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-3 text-sm text-gray-400"
              >
                <span className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full">
                  📍 Vancouver, BC
                </span>
                <span className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full">
                  💼 Senior Software Engineer
                </span>
                <span className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full">
                  🚀 8+ Years Experience
                </span>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                View My Work
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/PuneetDimriResume.pdf"
                download
                className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let&apos;s Connect
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <span className="text-gray-400 text-sm">Connect with me:</span>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Punit5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/punitdimrii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:punit.dimri@gmail.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default HeroSection