import React from 'react';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Taskify',
    description: 'Full-stack task management application with advanced search capabilities.',
    technologies: ['React', 'Next.js', 'Elasticsearch'],
    image: 'https://postimg.cc/kB8f1TS6',
    category: 'Full-Stack',
    link: 'https://todoapp-plum-seven.vercel.app/',
    github: '#'
  },
  {
    title: 'Synesthetic Experience Generator',
    description: 'Accessibility technology project featuring Web Speech API integration.',
    technologies: ['JavaScript', 'Web Speech API', 'HTML/CSS'],
    image: 'https://via.placeholder.com/400x300?text=Synesthetic',
    category: 'Accessibility',
    link: 'https://madhusankar541.github.io/SynestheticGen/',
    github: '#'
  },
  {
    title: 'VCatalyst',
    description: 'AI-driven startup support platform for entrepreneurs and innovators.',
    technologies: ['Python', 'AI/ML', 'React'],
    image: 'https://via.placeholder.com/400x300?text=VCatalyst',
    category: 'AI/ML',
    link: '#',
    github: '#'
  },
  {
    title: 'GreenShift',
    description: 'Sustainability platform for carbon monitoring and environmental impact tracking.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/400x300?text=GreenShift',
    category: 'Full-Stack',
    link: '#',
    github: '#'
  },
  {
    title: 'LearnX',
    description: 'Real-time interactive learning platform for enhanced educational experiences.',
    technologies: ['React.js', 'WebRTC', 'Node.js'],
    image: 'https://via.placeholder.com/400x300?text=LearnX',
    category: 'Full-Stack',
    link: '#',
    github: '#'
  },
  {
    title: 'Sugarcane AI',
    description: 'Creative design project utilizing advanced prompt engineering techniques.',
    technologies: ['Python', 'AI/ML', 'Prompt Engineering'],
    image: 'https://via.placeholder.com/400x300?text=Sugarcane+AI',
    category: 'AI/ML',
    link: '#',
    github: '#'
  },
  {
    title: 'Hack A Bot',
    description: 'RPA automation project using UiPath for streamlined business processes.',
    technologies: ['UiPath', 'RPA', 'Automation'],
    image: 'https://via.placeholder.com/400x300?text=Hack+A+Bot',
    category: 'Automation',
    link: '#',
    github: '#'
  }
];

export default function ProjectsSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section projects" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="projects__title slide-up">Featured Projects</h1>
        {/* Project Filters */}
        <div className="projects__filters slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="filter-button active">All</button>
          <button className="filter-button">Full-Stack</button>
          <button className="filter-button">AI/ML</button>
          <button className="filter-button">Accessibility</button>
          <button className="filter-button">Automation</button>
        </div>
        {/* Projects Grid */}
        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card glass slide-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="project-card__image">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <div className="project-card__overlay">
                  <div className="project-card__links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card__content">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__technologies">
                  {project.technologies.map(tech => (
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