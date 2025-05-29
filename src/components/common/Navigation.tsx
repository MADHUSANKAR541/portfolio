"use client"; // This component needs to be a client component to use hooks
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle scroll to detect if past hero section
  useEffect(() => {
    const handleScroll = () => {
      // We'll assume scrolling past 80% of the viewport height means past the hero
      const scrollThreshold = window.innerHeight * 0.8; 
      if (window.scrollY > scrollThreshold) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <nav className={`navigation ${isScrolledPastHero ? 'navigation--scrolled' : ''} ${isMenuOpen ? 'navigation--mobile-open' : ''}`}>
      <div className="navigation__container">
        <Link href="/" className="navigation__logo" onClick={closeMenu}>
          MS
        </Link>
        {/* Mobile Toggle Button */}
        <button className="navigation__mobile-toggle" onClick={toggleMenu}>
          {/* You can use an icon here, like a hamburger menu */}
          ☰ {/* Placeholder for hamburger icon */}
        </button>
        {/* Desktop Navigation List */}
        <ul className="navigation__list navigation__list--desktop">
          {navItems.map((item) => (
            <li key={item.href} className="navigation__item">
              <Link href={item.href} className="navigation__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="navigation__mobile-dropdown">
             <ul className="navigation__list navigation__list--mobile">
              {navItems.map((item) => (
                <li key={item.href} className="navigation__item">
                  <Link href={item.href} className="navigation__link" onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 