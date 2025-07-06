'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Code, Cloud, Database, Server } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Everbridge Inc',
      role: 'Senior Software Developer',
      period: 'November 2022 - Present',
      location: 'Vancouver, BC',
      achievements: [
        'Developed and maintained the Analytics Back-end for generating user reports related to incident management using Java',
        'Implemented front-end components using React to provide a seamless user experience for report generation and visualization',
        'Utilized PostgreSQL and BigQuery (Google Cloud Platform) for efficient data storage and retrieval',
        'Designed and executed unit tests to ensure the reliability and performance of the backend services'
      ],
      technologies: ['Java', 'React', 'PostgreSQL', 'BigQuery', 'GCP'],
      icon: Code,
      color: 'emerald'
    },
    {
      company: 'Samsung',
      role: 'Senior Software Developer',
      period: 'August 2021 - November 2022',
      location: 'Seoul, South Korea',
      achievements: [
        'Successfully developed backend SMR (Security Management Release) spring boot application for providing security updates',
        'Dockerized KSCB (Knox Samsung care for business) application and migrated from AWS EC2 to EKS',
        'Successfully migrated KSCB application to support multi-cloud (AWS and Azure)',
        'Achieved Microsoft Azure Fundamentals Certification'
      ],
      technologies: ['Java', 'Spring Boot', 'Docker', 'AWS', 'Azure', 'EKS'],
      icon: Cloud,
      color: 'blue'
    },
    {
      company: 'Northland Properties',
      role: 'Product Lead - Mobius',
      period: 'November 2017 - August 2021',
      location: 'Vancouver, BC',
      achievements: [
        'Led development and maintenance of Mobius, the primary booking engine for hotel chains and restaurants',
        'Successfully integrated Mobius with Maestro for 2-way integration with PMS',
        'Created RESTFUL API for accessing current rates and inventories of various hotels',
        'Streamlined deployment process using Ansible and AWS EC2 instances'
      ],
      technologies: ['Java', 'REST API', 'AWS', 'Ansible', 'Redis'],
      icon: Server,
      color: 'purple'
    },
    {
      company: 'QuoteMedia Ltd',
      role: 'Product Lead - Alert Services',
      period: 'December 2016 - November 2017',
      location: 'Toronto, ON',
      achievements: [
        'Led development of Alert Services providing email and text alerts for stock prices',
        'Enhanced and maintained Alert services using JAVA, PL/SQL, JSP and HTML',
        'Improved response time for alerts and added robustness to the software',
        'Migrated product to Spring Boot and added unit test cases'
      ],
      technologies: ['Java', 'Spring Boot', 'PL/SQL', 'JSP', 'HTML'],
      icon: Database,
      color: 'orange'
    }
  ]

  const certifications = [
    {
      name: 'Generative AI',
      organization: 'Databricks',
      date: 'Apr 2025',
      level: 'Professional',
      skills: ['Large Language Models', 'Prompt Engineering', 'Enterprise AI']
    },
    {
      name: 'Kafka Developer Skills',
      organization: 'Confluent',
      date: 'Jul 2021',
      level: 'Professional',
      skills: ['Event Streaming', 'Kafka Connect', 'Data Pipelines']
    },
    {
      name: 'Azure Fundamentals',
      organization: 'Microsoft',
      date: 'Jul 2021',
      level: 'Professional',
      skills: ['Cloud Computing', 'Azure Services', 'Security']
    },
    {
      name: 'Scrum Master',
      organization: 'LinkedIn',
      date: 'Mar 2021',
      level: 'Professional',
      skills: ['Agile Methodologies', 'Sprint Planning', 'Team Leadership']
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-500 border-emerald-400',
      blue: 'bg-blue-500 border-blue-400',
      purple: 'bg-purple-500 border-purple-400',
      orange: 'bg-orange-500 border-orange-400'
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <div className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Key Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Highlights from 8+ years of delivering scalable solutions and leading technical initiatives across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative flex items-start"
                  >
                    <div className={`absolute left-0 w-12 h-12 rounded-full ${getColorClasses(exp.color)} flex items-center justify-center border-4 border-slate-800`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="ml-20 bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <h4 className="text-lg font-semibold text-emerald-400">{exp.company}</h4>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <div className="flex items-center text-gray-400 mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/30 backdrop-blur-sm rounded-lg p-6 border border-slate-600/30 sticky top-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-emerald-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-sm">{cert.name}</h4>
                      <span className="text-xs text-gray-400">{cert.date}</span>
                    </div>
                    <div className="text-emerald-400 text-sm font-medium mb-2">{cert.organization}</div>
                    <div className="text-xs text-gray-400 mb-3">{cert.level}</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-slate-500/30 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection