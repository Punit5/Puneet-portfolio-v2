'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, Tag, Search, Filter } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readTime: number
  publishedAt: string
  image: string
  slug: string
}

const BlogSection = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Microservices Architecture: Lessons from Production",
      excerpt: "Key insights and best practices learned while building and scaling microservices at enterprise level, including service communication patterns and data consistency strategies.",
      content: "Full article content here...",
      category: "Architecture",
      tags: ["Microservices", "Spring Boot", "Java", "Architecture"],
      readTime: 8,
      publishedAt: "2024-01-15",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      slug: "microservices-architecture-lessons-production"
    },
    {
      id: 2,
      title: "AWS to Azure: Multi-Cloud Migration Strategy",
      excerpt: "A comprehensive guide to planning and executing multi-cloud migrations, covering challenges, solutions, and best practices from real-world experience.",
      content: "Full article content here...",
      category: "Cloud",
      tags: ["AWS", "Azure", "Cloud Migration", "DevOps"],
      readTime: 12,
      publishedAt: "2024-01-08",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      slug: "aws-azure-multi-cloud-migration-strategy"
    },
    {
      id: 3,
      title: "Spring Boot Performance Optimization Techniques",
      excerpt: "Practical techniques to optimize Spring Boot applications for better performance, including JVM tuning, database optimization, and caching strategies.",
      content: "Full article content here...",
      category: "Performance",
      tags: ["Spring Boot", "Performance", "JVM", "Optimization"],
      readTime: 10,
      publishedAt: "2024-01-01",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      slug: "spring-boot-performance-optimization"
    },
    {
      id: 4,
      title: "Building Resilient APIs with Circuit Breakers",
      excerpt: "How to implement fault tolerance in distributed systems using circuit breaker patterns, with practical examples using Hystrix and Resilience4j.",
      content: "Full article content here...",
      category: "Architecture",
      tags: ["APIs", "Resilience", "Circuit Breaker", "Microservices"],
      readTime: 7,
      publishedAt: "2023-12-25",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      slug: "building-resilient-apis-circuit-breakers"
    },
    {
      id: 5,
      title: "Docker Containerization Best Practices",
      excerpt: "Essential Docker practices for production deployments, including image optimization, security considerations, and orchestration strategies.",
      content: "Full article content here...",
      category: "DevOps",
      tags: ["Docker", "Containers", "DevOps", "Kubernetes"],
      readTime: 9,
      publishedAt: "2023-12-18",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop",
      slug: "docker-containerization-best-practices"
    },
    {
      id: 6,
      title: "Database Scaling Strategies for High Traffic",
      excerpt: "Comprehensive guide to scaling databases for high-traffic applications, covering sharding, replication, and caching strategies.",
      content: "Full article content here...",
      category: "Database",
      tags: ["Database", "Scaling", "PostgreSQL", "Performance"],
      readTime: 11,
      publishedAt: "2023-12-10",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      slug: "database-scaling-strategies-high-traffic"
    }
  ]

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
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
            Technical Blog
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing insights, best practices, and lessons learned from building enterprise software solutions
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-400 focus:border-emerald-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
                } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className={`w-5 h-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-emerald-500 text-white'
                        : theme === 'dark'
                          ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`group cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-emerald-400/50' 
                  : 'bg-white border-gray-200 hover:border-emerald-300'
              } backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' 
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className={`flex items-center space-x-4 text-sm mb-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`mb-4 line-clamp-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`inline-flex items-center px-2 py-1 rounded text-xs ${
                        theme === 'dark' 
                          ? 'bg-slate-700/50 text-gray-300' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-emerald-500 group-hover:text-emerald-400 transition-colors">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-700 hover:bg-slate-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogSection