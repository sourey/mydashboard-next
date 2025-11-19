'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-neo-bg py-6 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black font-mono uppercase tracking-tighter bg-white px-2 py-1 border-3 border-neo-dark shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all decoration-neo-primary">
          Saurav.dev
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 font-bold">
          <DesktopNavLink href="#about" color="bg-neo-secondary">About</DesktopNavLink>
          <DesktopNavLink href="#stack" color="bg-neo-accent">Tech Stack</DesktopNavLink>
          <DesktopNavLink href="#experience" color="bg-neo-primary text-white">Experience</DesktopNavLink>
          <DesktopNavLink href="#projects" color="bg-[#BD93F9] text-white">Projects</DesktopNavLink>
          <DesktopNavLink href="#contact" color="bg-neo-dark text-white">Contact</DesktopNavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden font-bold border-3 border-neo-dark px-3 py-2 shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${isOpen ? 'bg-neo-primary text-white' : 'bg-neo-accent'}`}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%)] left-4 right-4 bg-neo-bg flex flex-col gap-3 mt-2 p-4 border-3 border-neo-dark shadow-neo-lg">
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

function DesktopNavLink({ href, children, color = 'bg-white' }) {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 font-black text-sm uppercase tracking-wider border-3 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all ${color}`}
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
      className={`block w-full p-3 font-black text-lg uppercase tracking-wider border-3 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all text-center ${color}`}
    >
      {children}
    </Link>
  );
}
