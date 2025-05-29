import React from 'react';

const experienceData = [
  {
    company: 'C1x',
    role: 'Software Developer Intern',
    period: '2023 - Present',
    description: [
      'Developed and maintained full-stack applications using React and Node.js',
      'Implemented responsive UI components and optimized application performance',
      'Collaborated with cross-functional teams to deliver high-quality solutions'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
  },
  {
    company: 'Ozibook',
    role: 'Prompt Engineering Intern',
    period: '2023',
    description: [
      'Specialized in developing and optimizing AI prompts for various applications',
      'Created efficient prompt templates for improved AI model performance',
      'Conducted research on prompt engineering best practices'
    ],
    technologies: ['AI/ML', 'Prompt Engineering', 'Python', 'NLP']
  },
  {
    company: 'Ybi Foundations',
    role: 'ML Intern',
    period: '2022',
    description: [
      'Worked on machine learning models for data analysis and prediction',
      'Implemented data preprocessing pipelines and feature engineering',
      'Participated in model evaluation and optimization'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn']
  },
  {
    company: 'SystemTron',
    role: 'Python Intern',
    period: '2022',
    description: [
      'Developed Python-based automation scripts and tools',
      'Assisted in system integration and testing',
      'Contributed to documentation and code maintenance'
    ],
    technologies: ['Python', 'Automation', 'Testing', 'Documentation']
  }
];

export default function ExperienceSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section experience" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="experience__title slide-up">Professional Experience</h1>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <div 
              key={job.company} 
              className="timeline__item slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="timeline__content glass">
                <div className="timeline__period">{job.period}</div>
                <h3 className="timeline__company">{job.company}</h3>
                <h4 className="timeline__role">{job.role}</h4>
                <ul className="timeline__description">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline__technologies">
                  {job.technologies.map(tech => (
                    <span key={tech} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 