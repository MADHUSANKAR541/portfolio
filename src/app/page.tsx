import React from 'react';
import Navigation from '@/components/common/Navigation';
import AboutSection from '@/app/about/AboutSection';
import SkillsSection from '@/app/skills/SkillsSection';
import ProjectsSection from '@/app/projects/ProjectsSection';
import ExperienceSection from '@/app/experience/ExperienceSection';
import AchievementsSection from '@/app/achievements/AchievementsSection';
import EducationSection from '@/app/education/EducationSection';
import ContactSection from '@/app/contact/ContactSection';

export default function Home() {
  return (
    <>
    <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section hero" id="hero" data-aos="fade-up">
          <div className="container">
            <div className="hero__content">
              <h1 className="hero__title slide-up">
                Madhu Sankar S
              </h1>
              <h2 className="hero__subtitle slide-up" style={{ animationDelay: '0.2s' }}>
                AI & Full-Stack Developer
              </h2>
              <p className="hero__description slide-up" style={{ animationDelay: '0.4s' }}>
                Building smarter experiences through data, design, and AI.
              </p>
              <div className="hero__cta slide-up" style={{ animationDelay: '0.6s' }}>
                <a href="#about" className="button button--primary mr-2">
                  About Me
                </a>
                <a href="#projects" className="button button--secondary">
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
          <div className="hero__background">
            <div className="hero__gradient"></div>
            <div className="hero__particles"></div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection id="about" dataAos="fade-right" />
        {/* Achievements Section */}
        <AchievementsSection id="achievements" dataAos="zoom-in" />
        {/* Education Section */}
        <EducationSection id="education" dataAos="fade-up" />
        {/* Contact Section */}
        <SkillsSection id="skills" dataAos="fade-left" />
        {/* Projects Section */}
        <ProjectsSection id="projects" dataAos="zoom-in-up" />
        {/* Experience Section */}
        <ExperienceSection id="experience" dataAos="fade-up" />
        <ContactSection id="contact" dataAos="fade-up" />
      
      </main>
    </>
  );
} 