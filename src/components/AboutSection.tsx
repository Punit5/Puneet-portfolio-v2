'use client'

import { motion } from 'framer-motion'
import { Calendar, Rocket, Building, Zap, Settings, Cloud, Database, Palette } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import SkillsVisualization from './SkillsVisualization'

const AboutSection = () => {
  const { theme } = useTheme()
  const achievements = [
    { icon: Calendar, value: '8+', label: 'Years of Experience' },
    { icon: Rocket, value: '15+', label: 'Projects Delivered' },
    { icon: Building, value: '4', label: 'Enterprise Companies' },
    { icon: Zap, value: '99.9%', label: 'System Uptime' }
  ]

  const expertiseAreas = [
    {
      icon: Settings,
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'Microservices', 'RESTful APIs'],
      color: 'emerald'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Database Management',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery'],
      color: 'purple'
    },
    {
      icon: Palette,
      title: 'Frontend Technologies',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
      color: 'orange'
    }
  ]

  const companies = [
    { name: 'Everbridge', logo: 'E', years: '2022-Present', color: 'emerald' },
    { name: 'Samsung', logo: 'S', years: '2021-2022', color: 'blue' },
    { name: 'Northland Properties', logo: 'N', years: '2017-2021', color: 'purple' },
    { name: 'QuoteMedia', logo: 'Q', years: '2016-2017', color: 'orange' }
  ]

  const skillCategories = [
    { name: 'Java', level: 95, color: 'emerald' },
    { name: 'Spring Boot', level: 90, color: 'green' },
    { name: 'AWS', level: 85, color: 'blue' },
    { name: 'React', level: 80, color: 'cyan' },
    { name: 'Docker', level: 85, color: 'purple' }
  ]

  return (
    <div className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>About Me</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Senior Software Developer with 8+ years of experience building scalable, high-performance applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-slate-700/50 border-slate-600/30 hover:border-emerald-400/50' 
                      : 'bg-white border-gray-200 hover:border-emerald-300'
                  } backdrop-blur-sm rounded-lg p-6 text-center border transition-all duration-300`}
                >
                  <achievement.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
                  <div className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.value}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-slate-700/30 backdrop-blur-sm rounded-lg p-6 border border-slate-600/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack Expertise</h3>
              <div className="space-y-4">
                {skillCategories.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        className={`h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <area.icon className="w-8 h-8 mb-4 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-sm text-gray-400">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-slate-700/30 backdrop-blur-sm rounded-lg p-6 border border-slate-600/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Key Companies & Organizations</h3>
              <div className="grid grid-cols-2 gap-4">
                {companies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {company.logo}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{company.name}</div>
                      <div className="text-gray-400 text-xs">{company.years}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Skills Visualization */}
        <SkillsVisualization />
      </div>
    </div>
  )
}

export default AboutSection