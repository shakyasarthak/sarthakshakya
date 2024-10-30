"use client"

import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Database } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-orange-400 to-blue-500">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
            Aspiring Data Analyst
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            Aspiring Data Science student passionate about transforming data into actionable insights.
            Currently seeking internship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}