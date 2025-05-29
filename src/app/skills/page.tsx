import React from 'react';
import Navigation from '@/components/common/Navigation';

const skillsData = {
  technical: [
    { name: 'Python', level: 90, category: 'Programming Languages' },
    { name: 'JavaScript', level: 85, category: 'Programming Languages' },
    { name: 'TypeScript', level: 80, category: 'Programming Languages' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'TensorFlow', level: 85, category: 'AI/ML' },
    { name: 'PyTorch', level: 80, category: 'AI/ML' },
    { name: 'SQL', level: 85, category: 'Database' },
    { name: 'MongoDB', level: 75, category: 'Database' },
  ],
  soft: [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Team Leadership', level: 80 },
    { name: 'Project Management', level: 85 },
    { name: 'Critical Thinking', level: 90 },
  ]
};

export default function Skills() {
  return (
    <>
      <Navigation />
      <main>
        <section className="section skills">
          <div className="container">
            <h1 className="skills__title slide-up">Skills & Expertise</h1>
            
            {/* Technical Skills */}
            <div className="skills__section slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="gradient-text">Technical Skills</h2>
              <div className="skills__grid">
                {skillsData.technical.map((skill, index) => (
                  <div key={skill.name} className="skill-card glass" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="skill-card__header">
                      <h3>{skill.name}</h3>
                      <span className="skill-card__category">{skill.category}</span>
                    </div>
                    <div className="skill-card__progress">
                      <div 
                        className="skill-card__progress-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="skill-card__level">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="skills__section slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="gradient-text">Soft Skills</h2>
              <div className="skills__grid">
                {skillsData.soft.map((skill, index) => (
                  <div key={skill.name} className="skill-card glass" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <div className="skill-card__header">
                      <h3>{skill.name}</h3>
                    </div>
                    <div className="skill-card__progress">
                      <div 
                        className="skill-card__progress-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="skill-card__level">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Expertise */}
            <div className="skills__expertise slide-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="gradient-text">Areas of Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-card glass">
                  <h3>AI & Machine Learning</h3>
                  <p>Developing intelligent systems and predictive models using state-of-the-art AI technologies.</p>
                </div>
                <div className="expertise-card glass">
                  <h3>Full-Stack Development</h3>
                  <p>Building scalable and performant web applications using modern frameworks and best practices.</p>
                </div>
                <div className="expertise-card glass">
                  <h3>Data Engineering</h3>
                  <p>Designing and implementing robust data pipelines and ETL processes.</p>
                </div>
                <div className="expertise-card glass">
                  <h3>Cloud Architecture</h3>
                  <p>Deploying and managing applications on cloud platforms with focus on scalability and security.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 