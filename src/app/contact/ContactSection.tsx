import React from 'react';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'madhusankar0a56@gmail.com',
    link: 'mailto:madhusankar0a56@gmail.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '9342311827',
    link: 'tel:9342311827'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Chennai, India',
    link: 'https://maps.google.com/?q=Chennai,India'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MADHUSANKAR541',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ms056/',
    icon: 'linkedin'
  }
];

export default function ContactSection(props: { id?: string; dataAos?: string }) {
  return (
    <section className="section contact" id={props.id || undefined} data-aos={props.dataAos} style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <h1 className="contact__title slide-up">Get in Touch</h1>
        <div className="contact__grid">
          {/* Contact Information */}
          <div className="contact__info slide-up">
            <h2>Let&apos;s Connect</h2>
            <p className="contact__description">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact__details">
              {contactInfo.map((info) => (
                <a 
                  key={info.title}
                  href={info.link}
                  className="contact__detail glass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__icon">{info.icon}</span>
                  <div>
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact__social">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link glass"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact__form-container slide-up">
            <form className="contact__form glass">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 