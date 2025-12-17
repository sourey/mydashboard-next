'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full py-4 px-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neo-bg/95 backdrop-blur-sm border-b-4 border-neo-dark' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="group relative"
          aria-label="Saurav Sitaula - Home"
          title="Saurav Sitaula Portfolio"
        >
          <div className="absolute -inset-1 bg-neo-accent border-4 border-neo-dark transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          <div className="relative bg-neo-dark text-white px-4 py-2 font-mono font-black text-xl uppercase tracking-tighter transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            Saurav<span className="text-neo-accent">.dev</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 items-center">
          <NavLink href="#about" color="bg-neo-lime">About</NavLink>
          <NavLink href="#experience" color="bg-neo-secondary text-white">Experience</NavLink>
          <NavLink href="#stack" color="bg-neo-accent">Stack</NavLink>
          <NavLink href="#projects" color="bg-neo-purple text-white">Projects</NavLink>
          <NavLink href="/hobbies" color="bg-neo-orange text-white">Hobbies</NavLink>
          <a 
            href="#contact" 
            className="neo-button bg-neo-primary text-sm py-2"
          >
            Contact →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden font-black text-2xl border-4 border-neo-dark w-12 h-12 flex items-center justify-center shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all ${
            isOpen ? 'bg-neo-primary text-white rotate-90' : 'bg-neo-accent'
          }`}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden absolute top-full left-0 right-0 bg-neo-bg border-b-4 border-neo-dark" role="menu">
          <div className="flex flex-col p-4 gap-3 max-w-7xl mx-auto">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)} color="bg-neo-lime">
              <span className="mr-2">👋</span> About
            </MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsOpen(false)} color="bg-neo-secondary text-white">
              <span className="mr-2">💼</span> Experience
            </MobileNavLink>
            <MobileNavLink href="#stack" onClick={() => setIsOpen(false)} color="bg-neo-accent">
              <span className="mr-2">⚡</span> Tech Stack
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsOpen(false)} color="bg-neo-purple text-white">
              <span className="mr-2">🚀</span> Projects
            </MobileNavLink>
            <MobileNavLink href="/hobbies" onClick={() => setIsOpen(false)} color="bg-neo-orange text-white">
              <span className="mr-2">📸</span> Hobbies
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} color="bg-neo-primary text-white">
              <span className="mr-2">📧</span> Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, color = 'bg-white' }) {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 font-black text-sm uppercase tracking-wider border-4 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all ${color}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick, color = 'bg-white' }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`flex items-center p-4 font-black text-lg uppercase tracking-wider border-4 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all ${color}`}
    >
      {children}
    </Link>
  );
}
