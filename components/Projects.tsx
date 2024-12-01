"use client"

import { motion } from 'framer-motion'
import { LineChart, Database, Brain, GitBranch, Wind } from 'lucide-react'

const projects = [
  {
    icon: <Wind className="w-6 h-6" />,
    title: "AQI Prediction for Kathmandu Valley",
    description: "Developed a time series forecasting model using XGBoost to predict Air Quality Index (AQI) for Kathmandu Valley. Processed and analyzed 4 years of historical data (2017-2021), implemented feature engineering, and achieved accurate predictions for 2022.",
    tools: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Seaborn"],
    github: "https://github.com/shakyasarthak/Time-Series-Forecasting-Using-XGBoost",
    details: {
      keyFeatures: [
        "Data preprocessing and cleaning of 4-year AQI measurements",
        "Feature engineering including temporal features",
        "Time series visualization using Seaborn and Matplotlib",
        "XGBoost model implementation and optimization",
        "Performance evaluation using MSE metrics"
      ],
      technologies: {
        core: ["XGBoost", "Pandas", "NumPy"],
        visualization: ["Seaborn", "Matplotlib"],
        evaluation: ["Scikit-learn"]
      }
    }
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Customers Segmentation Analysis",
    description: "Applied K-means clustering to segment customers based on purchasing behaviors. Created comprehensive dashboard using Tableau for visualization. Provided actionable insights for marketing strategies.",
    tools: ["Python", "Tableau", "SQL", "Excel"],
    github: "https://github.com/shakyasarthak/customer-segmentation"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Nepal Stock Market Analysis",
    description: "Conducted time series analysis on historical stock data using Python. Implemented ARIMA and LSTM models for price prediction. Created interactive visualizations using Plotly.",
    tools: ["Python", "TensorFlow", "Plotly", "Pandas"],
    github: "https://github.com/shakyasarthak/stock-analysis"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                {projects[0].icon}
              </div>
              <h3 className="text-2xl font-semibold">{projects[0].title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6">{projects[0].description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {projects[0].details?.keyFeatures?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Core:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {projects[0].details?.technologies.core.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Visualization:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {projects[0].details?.technologies.visualization.map((tech, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href={projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-500 hover:text-orange-600"
            >
              <GitBranch className="w-4 h-4 mr-2" />
              View Project on GitHub
            </a>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-600"
              >
                <GitBranch className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}