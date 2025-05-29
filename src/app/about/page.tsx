import React from 'react';
import Navigation from '@/components/common/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <section className="section about">
          <div className="container">
            <div className="about__content">
              <h1 className="about__title slide-up">About Me</h1>
              <div className="about__grid">
                <div className="about__text slide-up" style={{ animationDelay: '0.2s' }}>
                  <p>
                    I'm a passionate AI & Full-Stack Developer with a strong focus on creating
                    intelligent and user-friendly applications. My journey in technology has
                    been driven by a deep curiosity about how we can leverage AI and modern
                    web technologies to solve real-world problems.
                  </p>
                  <p>
                    With expertise in prompt engineering, machine learning, and full-stack
                    development, I strive to build solutions that are not only technically
                    sound but also intuitive and impactful.
                  </p>
                </div>
                <div className="about__image slide-up" style={{ animationDelay: '0.4s' }}>
                  {/* Add profile image here */}
                </div>
              </div>
              
              <div className="about__stats">
                <div className="stat-card glass">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card glass">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card glass">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="about__social">
                <h2 className="gradient-text">Connect With Me</h2>
                <div className="social-links">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link glass">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link glass">
                    LinkedIn
                  </a>
                  <a href="mailto:your.email@example.com" className="social-link glass">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 