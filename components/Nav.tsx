'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#system', label: 'How It Works' },
  { href: '#case', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#" className="logo" aria-label="SQWAD Agency home">
          <span className="logo-mark">SQWAD</span>
          <span className="logo-tag">Agency</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#book" className="nav-cta">
            <span>Book a Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}