import React from 'react';

const achievementsData = [
  {
    title: 'AI Frenzy Winner',
    description: 'Digital art via prompt engineering'
  },
  {
    title: 'Blockathon 2025 – Lightning Coder',
    description: 'ResQSense AI tool'
  }
];

export default function AchievementsSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section achievements" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="achievements__title slide-up">Achievements</h1>
        <div className="achievements__grid">
          {achievementsData.map((item, idx) => (
            <div className="achievement-card glass slide-up" key={item.title} style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <h3 className="achievement-card__title gradient-text">{item.title}</h3>
              <p className="achievement-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 