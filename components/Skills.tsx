const skillCategories = [
  {
    title: "Programming & Tools",
    skills: [
      "Python (NumPy, Pandas)",
      "SQL (MySQL, PostgreSQL, MongoDB)",
      "Git & GitHub",
      "Jupyter Notebook",
      "VS Code"
    ]
  },
  {
    title: "Data Analysis & ML",
    skills: [
      "scikit-learn",
      "Statistical Analysis",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation"
    ]
  },
  {
    title: "Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "D3.js basics"
    ]
  },
  {
    title: "Relevant Coursework",
    skills: [
      "Data Mining",
      "Statistical Methods",
      "Database Management",
      "Artificial Intelligence",
      "Data Visualization"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Skills & Coursework</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i}
                    className="bg-gray-50 p-2 rounded hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        {/* <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Google Data Analytics Professional Certificate",
                issuer: "Google",
                date: "2023"
              },
              {
                title: "Machine Learning Specialization",
                issuer: "Stanford Online & Coursera",
                date: "2023"
              },
              {
                title: "SQL for Data Science",
                issuer: "UC Davis & Coursera",
                date: "2022"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}