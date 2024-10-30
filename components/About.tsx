"use client"

import { motion } from 'framer-motion'

export default function About() {
  // const stats = [
  //   { label: "GPA", value: "3.8" },
  //   { label: "Projects", value: "12+" },
  //   { label: "Courses", value: "20+" },
  //   { label: "Certifications", value: "3" }
  // ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              I'm an Aspiring Data Science student with a passion for uncovering insights from complex datasets. 
              My academic journey has equipped me with strong analytical skills and a deep understanding of 
              statistical methods. I'm eager to apply these skills in a real-world setting through an internship 
              opportunity.
              THIS IS A TEST LINEEEEEEE
            </p>
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-orange-400 to-blue-500" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}