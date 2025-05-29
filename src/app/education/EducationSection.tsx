import React from 'react';

const educationData = [
  {
    institution: 'St. Joseph\'s Institute of Technology',
    degree: 'B.Tech in AI & Data Science',
    period: '2022–2026',
    cgpa: '8.92'
  }
];

export default function EducationSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section education" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="education__title slide-up">Education</h1>
        <div className="education__grid">
          {educationData.map((edu, idx) => (
            <div className="education-card glass slide-up" key={edu.degree + edu.institution} style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <h3 className="education-card__degree gradient-text">{edu.degree}</h3>
              <span className="education-card__institution">{edu.institution}</span>
              <span className="education-card__period">{edu.period}</span>
              <p className="education-card__cgpa">CGPA: {edu.cgpa}</p>
              {/* Removed description as it is not in content.md */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 