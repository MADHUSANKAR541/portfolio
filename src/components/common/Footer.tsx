import React from 'react';
import Link from 'next/link';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/madhusankar2003',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/madhusankar2003',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/madhusankar2003',
    icon: 'twitter'
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo and Description */}
          <div className="footer__brand">
            <h2 className="footer__logo">MS</h2>
            <p className="footer__description">
              Full Stack Developer passionate about creating innovative solutions and building amazing web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="footer__nav">
            <h3>Navigation</h3>
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="footer__social">
            <h3>Connect</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link glass"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Madhu Sankar. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <span className="heart">❤</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
} 