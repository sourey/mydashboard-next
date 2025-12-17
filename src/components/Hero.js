'use client';

import { useEffect, useState } from 'react';

// Websites worked on
const workedOnSites = [
  {
    name: 'MyFonts',
    url: 'https://www.myfonts.com/',
    description: 'World\'s largest font marketplace',
    color: '#E31837',
  },
  {
    name: 'Monotype Fonts',
    url: 'https://www.monotypefonts.com/',
    description: 'Enterprise font platform',
    color: '#000000',
  },
  {
    name: 'AllImpexo',
    url: 'https://app.allimpexo.com/',
    description: 'Business management app',
    color: '#4F46E5',
  },
  {
    name: 'Imagine Inquiry Sys',
    url: 'https://imagineinquirysys.com/',
    description: 'Learning management system',
    color: '#059669',
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col relative" aria-labelledby="hero-name" role="region">
      {/* Worked On Banner */}
      <div className="bg-neo-dark border-y-4 border-neo-dark py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-6 mr-6">
              <span className="text-white/60 text-sm font-bold uppercase tracking-wider px-3">
                Shipped Products
              </span>
              <span className="text-neo-accent text-xl">✦</span>
              {workedOnSites.map((site, idx) => (
                <a
                  key={`${setIndex}-${idx}`}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-all group"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ backgroundColor: site.color }}
                  >
                    {site.name.charAt(0)}
                  </div>
                  <span className="text-white font-bold text-sm group-hover:text-neo-accent transition-colors">
                    {site.name}
                  </span>
                  <span className="text-white/40 text-xs">↗</span>
                </a>
              ))}
              <span className="text-neo-primary text-xl">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Name & Title */}
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="neo-tag bg-neo-lime text-neo-dark">Hello, I&apos;m</span>
            </div>
            
            <h1 id="hero-name" className="neo-title text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] mb-6">
              <span className="block" itemProp="givenName">Saurav</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '3px #0A0A0A' }} itemProp="familyName">Sitaula</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="neo-box px-4 py-2 bg-neo-primary font-black text-lg">
                Senior
              </span>
              <span className="neo-box px-4 py-2 bg-neo-secondary font-black text-lg">
                Software
              </span>
              <span className="neo-box px-4 py-2 bg-neo-accent font-black text-lg">
                Engineer
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/sourey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="neo-button bg-neo-dark text-white"
              >
                GitHub ↗
              </a>
              <a 
                href="https://np.linkedin.com/in/saurav-sitaula-0bb174137" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="neo-button-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: About Card */}
          <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="neo-box p-6 md:p-8 bg-white relative">
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-neo-accent border-4 border-neo-dark flex items-center justify-center">
                <span className="text-2xl animate-bounce-slow">👋</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 section-title-underline">
                About Me
              </h3>
              
              <p className="text-lg leading-relaxed mb-6 mt-8">
                I&apos;m a <span className="retro-highlight font-bold">Senior Full Stack Software Engineer</span> with 7+ years of hands-on experience architecting and delivering production-grade web applications that scale.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I bring deep expertise in <span className="font-bold">JavaScript, TypeScript, React, Node.js</span>, and database systems including PostgreSQL and MongoDB. My track record spans leading development teams, building complex e-commerce platforms, and engineering solutions that drive real business impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <StatBox number="7+" label="Years Exp" color="bg-neo-primary" />
                <StatBox number="25+" label="Projects" color="bg-neo-secondary" />
                <StatBox number="∞" label="Ambition" color="bg-neo-purple" />
              </div>
            </div>
          </div>
        </div>

        {/* Worked On Section - Enhanced */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="neo-box p-6 md:p-8 bg-white relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <span className="neo-tag bg-neo-primary text-white mb-2 inline-block">Portfolio Highlights</span>
                <h3 className="text-2xl font-black uppercase">
                  Products I&apos;ve <span className="text-neo-primary">Shipped</span>
                </h3>
              </div>
              <span className="text-sm font-mono text-gray-500">Live production applications</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workedOnSites.map((site, idx) => (
                <a
                  key={idx}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-box p-4 group hover:-translate-y-2 hover:shadow-neo-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover background */}
                  <div 
                    className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left opacity-10"
                    style={{ backgroundColor: site.color }}
                  />
                  
                  <div className="relative z-10">
                    {/* Logo placeholder */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black mb-3 shadow-neo border-2 border-neo-dark"
                      style={{ backgroundColor: site.color }}
                    >
                      {site.name.charAt(0)}
                    </div>
                    
                    <h4 className="font-black text-lg uppercase mb-1 group-hover:text-neo-primary transition-colors leading-tight">
                      {site.name}
                    </h4>
                    
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {site.description}
                    </p>
                    
                    <div className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400 group-hover:text-neo-dark transition-colors">
                      Visit <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className={`mt-8 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="neo-box p-6 md:p-8 bg-neo-dark text-white relative overflow-hidden">
            {/* Striped decoration */}
            <div className="absolute inset-0 striped-bg opacity-10" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black uppercase">
                  <span className="text-neo-accent">Core</span> Expertise
                </h3>
                <span className="text-sm font-mono opacity-60">Battle-tested technologies I deliver with</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'JavaScript', color: 'bg-neo-accent text-neo-dark' },
                  { name: 'TypeScript', color: 'bg-neo-blue text-white' },
                  { name: 'React', color: 'bg-neo-secondary text-white' },
                  { name: 'Next.js', color: 'bg-white text-neo-dark' },
                  { name: 'Node.js', color: 'bg-neo-lime text-neo-dark' },
                  { name: 'PostgreSQL', color: 'bg-neo-purple text-white' },
                  { name: 'MongoDB', color: 'bg-neo-orange text-white' },
                  { name: 'GraphQL', color: 'bg-neo-primary text-white' },
                ].map((tech, idx) => (
                  <span 
                    key={tech.name} 
                    className={`px-4 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default ${tech.color}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm font-bold uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-4 border-neo-dark rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-neo-dark rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatBox({ number, label, color }) {
  return (
    <div className={`p-4 ${color} border-4 border-neo-dark text-center text-white`}>
      <div className="text-3xl md:text-4xl font-black">{number}</div>
      <div className="text-xs uppercase tracking-wider font-bold opacity-90">{label}</div>
    </div>
  );
}
