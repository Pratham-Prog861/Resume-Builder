
import SampleResume from '@/components/SampleResume'
import React from 'react'

const templates = [
  {
    title: 'Software Developer',
    description: 'A modern, clean template tailored for software engineers and developers. Highlight your projects, skills, and experience in tech.',
    icon: '💻',
    example: {
      name: 'Jane Doe',
      role: 'Full Stack Developer',
      highlights: [
        'Built scalable web applications using React and Node.js',
        'Experience with cloud platforms (AWS, Azure)',
        'Open-source contributor and hackathon winner',
      ],
    },
  },
  {
    title: 'Cyber Security Specialist',
    description: 'A professional template designed for cyber security roles. Emphasize certifications, security skills, and relevant experience.',
    icon: '🛡️',
    example: {
      name: 'Alex Smith',
      role: 'Cyber Security Analyst',
      highlights: [
        'Certified CISSP, CEH',
        'Implemented company-wide security protocols',
        'Skilled in penetration testing and risk assessment',
      ],
    },
  },
  {
    title: 'Data Scientist',
    description: 'Showcase your analytical skills, data projects, and technical expertise with this data-focused template.',
    icon: '📊',
    example: {
      name: 'Priya Patel',
      role: 'Data Scientist',
      highlights: [
        'Developed predictive models for e-commerce analytics',
        'Proficient in Python, R, and SQL',
        'Published research in machine learning journals',
      ],
    },
  },
  {
    title: 'Product Manager',
    description: 'A business-oriented template for product managers. Focus on leadership, product launches, and cross-functional skills.',
    icon: '📈',
    example: {
      name: 'Michael Lee',
      role: 'Product Manager',
      highlights: [
        'Launched SaaS products with 100k+ users',
        'Led cross-functional teams (dev, design, marketing)',
        'Expert in Agile and Scrum methodologies',
      ],
    },
  },
  {
    title: 'UI/UX Designer',
    description: 'A visually appealing template for designers. Highlight your portfolio, design skills, and creative projects.',
    icon: '🎨',
    example: {
      name: 'Sara Kim',
      role: 'UI/UX Designer',
      highlights: [
        'Designed award-winning mobile apps',
        'Skilled in Figma, Sketch, Adobe XD',
        'Strong portfolio of web and mobile projects',
      ],
    },
  },
]

const page = () => {
  return (
    <>
      <main className="max-w-5xl mt-10 mb-10 mx-auto py-16 px-4 min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 rounded-3xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Choose a Resume Template
        </h1>
        <div className="w-20 h-1 mx-auto mb-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-pink-400" />
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Select a template that best fits your role. Each template is designed to highlight your unique skills and experience.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {templates.map((template) => (
            <div
              key={template.title}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-900/90 flex flex-col gap-4 hover:border-blue-500 dark:hover:border-yellow-400 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-[5px] rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4">
                <span className="text-4xl drop-shadow-md">{template.icon}</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition">
                    {template.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {template.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-gray-50 dark:bg-gray-800/70 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="font-medium text-gray-800 dark:text-gray-100 mb-1">
                  {template.example.name} <span className="text-sm text-gray-500 dark:text-gray-400">/ {template.example.role}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  {template.example.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SampleResume />
    </>
  )
}

export default page