'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'
import { Code, Cloud, Database, Settings, TrendingUp, Award } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface Skill {
  name: string
  level: number
  category: string
  color: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  years: number
}

const SkillsVisualization = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Skill[] = [
    {
      name: 'Java',
      level: 95,
      category: 'Backend',
      color: 'from-orange-500 to-red-500',
      icon: Code,
      description: '8+ years of enterprise Java development',
      years: 8
    },
    {
      name: 'Spring Boot',
      level: 90,
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      icon: Settings,
      description: 'Microservices and enterprise applications',
      years: 6
    },
    {
      name: 'AWS',
      level: 85,
      category: 'Cloud',
      color: 'from-yellow-500 to-orange-500',
      icon: Cloud,
      description: 'EC2, EKS, S3, Lambda, and more',
      years: 5
    },
    {
      name: 'Azure',
      level: 80,
      category: 'Cloud',
      color: 'from-blue-500 to-indigo-500',
      icon: Cloud,
      description: 'Multi-cloud deployments and migrations',
      years: 3
    },
    {
      name: 'PostgreSQL',
      level: 90,
      category: 'Database',
      color: 'from-blue-600 to-purple-600',
      icon: Database,
      description: 'Complex queries and performance optimization',
      years: 7
    },
    {
      name: 'MongoDB',
      level: 80,
      category: 'Database',
      color: 'from-green-600 to-green-700',
      icon: Database,
      description: 'NoSQL database design and operations',
      years: 4
    },
    {
      name: 'Docker',
      level: 85,
      category: 'DevOps',
      color: 'from-blue-400 to-cyan-500',
      icon: Settings,
      description: 'Containerization and orchestration',
      years: 5
    },
    {
      name: 'Kubernetes',
      level: 80,
      category: 'DevOps',
      color: 'from-indigo-500 to-purple-600',
      icon: Settings,
      description: 'Container orchestration at scale',
      years: 3
    },
    {
      name: 'React',
      level: 80,
      category: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      icon: Code,
      description: 'Modern frontend development',
      years: 4
    },
    {
      name: 'TypeScript',
      level: 75,
      category: 'Frontend',
      color: 'from-blue-600 to-indigo-600',
      icon: Code,
      description: 'Type-safe JavaScript development',
      years: 3
    }
  ]

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))]

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)


  const RadialProgress = ({ skill, index }: { skill: Skill; index: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 100)
      return () => clearTimeout(timer)
    }, [skill.level, index])

    const circumference = 2 * Math.PI * 40
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (animatedLevel / 100) * circumference

    return (
      <div
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 min-h-[280px] ${
          theme === 'dark'
            ? 'bg-slate-800/50 border-slate-700/50 hover:border-emerald-400/50'
            : 'bg-white border-gray-200 hover:border-emerald-300'
        } border backdrop-blur-sm group hover:scale-105 hover:shadow-xl`}
      >
        {/* Inline Tooltip */}
        <AnimatePresence>
          {hoveredSkill === skill.name && showTooltip(skill)}
        </AnimatePresence>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={theme === 'dark' ? '#374151' : '#e5e7eb'}
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke={`url(#gradient-${skill.name.replace(/\s+/g, '')})`}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id={`gradient-${skill.name.replace(/\s+/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <skill.icon className={`w-8 h-8 ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
              }`} />
            </div>
            
            {/* Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-xs font-bold mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {animatedLevel}%
              </span>
            </div>
          </div>
          
          <h3 className={`text-lg font-semibold mb-2 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {skill.name}
          </h3>
          
          <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
            theme === 'dark' 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            {skill.category}
          </div>
          
          <p className={`text-sm text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {skill.years} years
          </p>
          
        </div>
      </div>
    )
  }

  // Clear hover state when scrolling or clicking elsewhere
  useEffect(() => {
    const handleScroll = () => setHoveredSkill(null)
    const handleClick = () => setHoveredSkill(null)
    
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClick)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Inline tooltip component that shows above the hovered skill
  const showTooltip = (skill: Skill) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-full px-4 py-3 rounded-lg shadow-xl z-30 pointer-events-none w-72 ${
        theme === 'dark' 
          ? 'bg-slate-900/95 border-slate-700 text-white' 
          : 'bg-white/95 border-gray-200 text-gray-900'
      } border backdrop-blur-sm`}
      style={{
        left: '50%',
        transform: 'translateX(-50%) translateY(-100%)'
      }}
    >
      <div className="text-center">
        <h4 className="font-semibold text-sm mb-1">{skill.name}</h4>
        <p className={`text-xs leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {skill.description}
        </p>
      </div>
      {/* Arrow pointing down - centered */}
      <div 
        className={`absolute top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
          theme === 'dark' ? 'border-t-slate-900/95' : 'border-t-white/95'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      ></div>
    </motion.div>
  )

  return (
    <div className="py-16 relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className={`text-3xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Technical Expertise
        </h3>
        <p className={`text-lg max-w-3xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Comprehensive skill set across the full software development lifecycle
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-emerald-500 text-white shadow-lg'
                : theme === 'dark'
                  ? 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <RadialProgress skill={skill} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className={`text-center p-6 rounded-lg ${
          theme === 'dark' 
            ? 'bg-slate-800/30 border-slate-700/30' 
            : 'bg-gray-50 border-gray-200'
        } border`}>
          <TrendingUp className={`w-12 h-12 mx-auto mb-4 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`} />
          <h4 className={`text-xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            8+ Years Experience
          </h4>
          <p className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Deep expertise across enterprise technologies
          </p>
        </div>

        <div className={`text-center p-6 rounded-lg ${
          theme === 'dark' 
            ? 'bg-slate-800/30 border-slate-700/30' 
            : 'bg-gray-50 border-gray-200'
        } border`}>
          <Award className={`w-12 h-12 mx-auto mb-4 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`} />
          <h4 className={`text-xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Multiple Certifications
          </h4>
          <p className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            AWS, Azure, Kafka, and more
          </p>
        </div>

        <div className={`text-center p-6 rounded-lg ${
          theme === 'dark' 
            ? 'bg-slate-800/30 border-slate-700/30' 
            : 'bg-gray-50 border-gray-200'
        } border`}>
          <Settings className={`w-12 h-12 mx-auto mb-4 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`} />
          <h4 className={`text-xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Full Stack Proficiency
          </h4>
          <p className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            From backend to frontend and everything in between
          </p>
        </div>
      </motion.div>

    </div>
  )
}

export default SkillsVisualization