'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b-3 border-neo-dark bg-white py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black font-mono uppercase tracking-tighter hover:underline decoration-4 underline-offset-4 decoration-neo-primary">
          Saurav.dev
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-bold">
          <DesktopNavLink href="#about">About</DesktopNavLink>
          <DesktopNavLink href="#stack">Tech Stack</DesktopNavLink>
          <DesktopNavLink href="#experience">Experience</DesktopNavLink>
          <DesktopNavLink href="#projects">Projects</DesktopNavLink>
          <DesktopNavLink href="#contact">Contact</DesktopNavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden font-bold border-2 border-neo-dark px-3 py-2 shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${isOpen ? 'bg-neo-primary text-white' : 'bg-neo-accent'}`}
        >
          {isOpen ? '✕ Close' : '☰ Menu'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+3px)] left-0 right-0 bg-neo-bg border-b-3 border-neo-dark p-6 flex flex-col gap-4 shadow-neo-lg animate-slideDown">
          <MobileNavLink href="#about" onClick={() => setIsOpen(false)} color="bg-neo-secondary">About</MobileNavLink>
          <MobileNavLink href="#stack" onClick={() => setIsOpen(false)} color="bg-neo-accent">Tech Stack</MobileNavLink>
          <MobileNavLink href="#experience" onClick={() => setIsOpen(false)} color="bg-neo-primary text-white">Experience</MobileNavLink>
          <MobileNavLink href="#projects" onClick={() => setIsOpen(false)} color="bg-[#BD93F9] text-white">Projects</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} color="bg-neo-dark text-white">Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

function DesktopNavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="hover:text-neo-primary transition-colors font-bold text-lg relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-neo-primary transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, children, onClick, color = 'bg-white' }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`block w-full p-4 font-black text-xl uppercase tracking-wider border-3 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all text-center ${color}`}
    >
      {children}
    </Link>
  );
}
