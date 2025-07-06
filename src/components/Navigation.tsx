'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react'

const Navigation = () => {
  const theme = 'dark'
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()

  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ], [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Punit5', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/punitdimrii', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:punit.dimri@gmail.com', label: 'Email' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element)

      let currentSection = 'hero'
      let minDistance = Infinity
      
      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2
        const distance = Math.abs(elementCenter - viewportCenter)
        
        // If section is in viewport and closest to center
        if (rect.top < window.innerHeight && rect.bottom > 0 && distance < minDistance) {
          minDistance = distance
          currentSection = section.id
        }
      }

      setActiveSection(currentSection)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [navItems])

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-slate-900/80 backdrop-blur-md border-slate-700/50' 
            : 'bg-white/80 backdrop-blur-md border-gray-200/50'
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Puneet <span className="text-emerald-500">Dimri</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-emerald-500'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-500 rounded-full"
                      initial={false}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 200, 
                        damping: 30,
                        mass: 1,
                        duration: 0.6
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Download Resume */}
              <motion.a
                href="/PuneetDimriResume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2 rounded-lg ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className={`md:hidden overflow-hidden ${
            theme === 'dark' ? 'bg-slate-900/95' : 'bg-white/95'
          } backdrop-blur-md border-t ${
            theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200/50'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Nav Items */}
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ x: 10 }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-emerald-500'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 space-y-4">
              <motion.a
                href="/PuneetDimriResume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download Resume
              </motion.a>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}

export default Navigation