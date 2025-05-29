import React from 'react';

const certificationsData = [
  {
    name: 'OpenAI Generative',
    issuer: 'Infosys'
  },
  {
    name: 'Java',
    issuer: 'IIT Bombay, NPTEL'
  },
  {
    name: 'MongoDB Introduction',
    issuer: 'MongoDB'
  },
  {
    name: 'DBMS',
    issuer: 'NPTEL'
  },
  {
    name: 'Raspberry Pi Course',
    issuer: '' // Issuer not specified in content.md
  }
];

export default function CertificationsSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section certifications" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="certifications__title slide-up">Certifications</h1>
        <div className="certifications__grid">
          {certificationsData.map((cert, idx) => (
            <div
              className="certification-card glass slide-up"
              key={cert.name}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <h3 className="certification-card__name gradient-text">{cert.name}</h3>
              <span className="certification-card__issuer">{cert.issuer}</span>
              {/* Removed year and link as they are not in content.md */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 