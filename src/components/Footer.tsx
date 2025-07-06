'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Punit5',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/punitdimrii',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:punit.dimri@gmail.com',
      label: 'Email',
      color: 'hover:text-emerald-400'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">Puneet Dimri</h3>
                <p className="text-emerald-400 font-medium">Senior Software Developer</p>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming complex business requirements into scalable, reliable software solutions. 
                Specialized in backend development, cloud migration, and modern application architecture.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-slate-800/50 rounded-lg border border-slate-700/50 text-gray-400 ${link.color} transition-all duration-300`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-800/50 text-gray-400 px-2 py-1 rounded border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center text-gray-400 text-sm mb-4 sm:mb-0"
            >
              <span>© 2024 Puneet Dimri. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-emerald-400" />
              <span>and coffee in Vancouver</span>
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer