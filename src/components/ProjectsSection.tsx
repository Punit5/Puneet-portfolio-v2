'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, ChevronRight, Calendar, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  image: string
  outcomes: string[]
  details: string[]
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Analytics Backend System',
      company: 'Everbridge',
      period: '2022-2023',
      description: 'Developed and maintained the Analytics Back-end for generating user reports related to incident management, utilizing Java and React with PostgreSQL and BigQuery for efficient data handling.',
      technologies: ['Java', 'React', 'PostgreSQL', 'BigQuery', 'GCP'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      outcomes: [
        'Reduced report generation time by 60%',
        'Improved data processing efficiency by 45%',
        'Enhanced user experience with real-time analytics',
        'Implemented automated testing with 90% coverage'
      ],
      details: [
        'Implemented RESTful APIs using Java and Spring Boot',
        'Designed and optimized PostgreSQL database schema',
        'Integrated with Google BigQuery for large-scale data analytics',
        'Built responsive React components for data visualization'
      ]
    },
    {
      id: 2,
      title: 'Security Management Release System',
      company: 'Samsung',
      period: '2021-2022',
      description: 'Successfully developed backend SMR application for providing security updates, with multi-cloud support across AWS and Azure platforms.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'AWS', 'Azure'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
      outcomes: [
        'Achieved 99.9% system availability',
        'Reduced deployment time by 70%',
        'Successfully migrated to multi-cloud infrastructure',
        'Implemented automated security patches'
      ],
      details: [
        'Developed microservices architecture using Spring Boot',
        'Implemented multi-cloud deployment strategy',
        'Containerized applications using Docker',
        'Set up CI/CD pipelines for automated deployment'
      ]
    },
    {
      id: 3,
      title: 'Hotel Booking Engine',
      company: 'Northland Properties',
      period: '2017-2021',
      description: 'Led development of Mobius, the primary booking engine for hotel chains and restaurants, integrating with third-party PMS systems and implementing RESTful APIs.',
      technologies: ['Java', 'REST API', 'AWS', 'Ansible', 'Redis'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      outcomes: [
        'Increased booking efficiency by 40%',
        'Reduced system response time by 50%',
        'Successfully integrated with 5 major PMS systems',
        'Improved system scalability and reliability'
      ],
      details: [
        'Designed and implemented RESTful APIs',
        'Integrated with multiple third-party PMS systems',
        'Implemented caching using Redis',
        'Automated deployment using Ansible'
      ]
    },
    {
      id: 4,
      title: 'Financial Alert System',
      company: 'QuoteMedia',
      period: '2016-2017',
      description: 'Led development of Alert Services providing real-time email and text alerts for stock prices, improving response time and system robustness.',
      technologies: ['Java', 'Spring Boot', 'PL/SQL', 'JSP'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070',
      outcomes: [
        'Reduced alert processing time by 65%',
        'Increased system reliability to 99.9%',
        'Handled over 1M daily alert notifications',
        'Improved customer satisfaction by 40%'
      ],
      details: [
        'Developed real-time alert processing system',
        'Optimized database queries using PL/SQL',
        'Implemented email and SMS notification system',
        'Created monitoring and reporting dashboard'
      ]
    }
  ]

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/800x400/1f2937/10b981?text=${encodeURIComponent(project.title)}`;
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className="flex items-center text-emerald-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{project.period}</span>
            </div>
          </div>
          
          <div className="text-gray-300 mb-6">{project.description}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-emerald-400" />
                Technical Details
              </h4>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of enterprise-level applications and systems I&apos;ve built throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/600x300/1f2937/10b981?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  
                  <div className="text-emerald-400 font-medium mb-3">{project.company}</div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-slate-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span className="text-sm font-medium">View Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectsSection