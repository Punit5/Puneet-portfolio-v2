'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  linkedIn?: string
}

const TestimonialsSection = () => {
  const { theme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "Everbridge",
      content: "Puneet's expertise in backend development and cloud migration was instrumental in our analytics platform success. His ability to architect scalable solutions while maintaining code quality is exceptional. He consistently delivered complex features ahead of schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      linkedIn: "https://linkedin.com/in/sarahchen"
    },
    {
      id: 2,
      name: "Michael Kim",
      role: "Senior Product Manager",
      company: "Samsung",
      content: "Working with Puneet on the multi-cloud migration project was a game-changer. His deep understanding of AWS and Azure, combined with his Spring Boot expertise, made the complex migration seamless. A true professional who delivers results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      linkedIn: "https://linkedin.com/in/michaelkim"
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      role: "CTO",
      company: "Northland Properties",
      content: "Puneet led our booking engine development with remarkable skill and leadership. His API design and integration work with multiple PMS systems was flawless. He's the kind of developer every team needs - reliable, innovative, and results-driven.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      linkedIn: "https://linkedin.com/in/jenniferwalsh"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Lead Developer",
      company: "QuoteMedia",
      content: "Puneet's work on our financial alert system transformed our entire notification infrastructure. His optimization skills reduced processing time by 65% while improving reliability. An exceptional developer with strong problem-solving abilities.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      linkedIn: "https://linkedin.com/in/davidrodriguez"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Engineering Manager",
      company: "Tech Innovations Inc",
      content: "Puneet's mentorship and technical leadership were invaluable to our team. His expertise in Java and cloud technologies, combined with his collaborative approach, made complex projects feel manageable. Highly recommended for any senior development role.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      linkedIn: "https://linkedin.com/in/lisathompson"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What Colleagues Say
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Testimonials from team leads, managers, and colleagues I&apos;ve worked with across different companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white border-gray-200'
                } backdrop-blur-sm rounded-2xl p-8 border shadow-xl`}
              >
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-full ${
                    theme === 'dark' ? 'bg-emerald-500/20' : 'bg-emerald-100'
                  }`}>
                    <Quote className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < currentTestimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className={`text-lg leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      &ldquo;{currentTestimonial.content}&rdquo;
                    </p>
                    
                    <div className="text-center">
                      <h4 className={`font-semibold text-lg mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {currentTestimonial.name}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
                >
                  {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                
                <motion.button
                  onClick={goToNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-emerald-500'
                        : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  index === currentIndex
                    ? theme === 'dark'
                      ? 'bg-emerald-500/20 border-emerald-400/50'
                      : 'bg-emerald-50 border-emerald-200'
                    : theme === 'dark'
                      ? 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/50'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                } border backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className={`font-medium text-sm ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection