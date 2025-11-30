'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col relative">
      {/* Marquee Banner */}
      <div className="bg-neo-dark border-y-4 border-neo-dark py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              {['FULLSTACK DEVELOPER', '✦', 'REACT ENTHUSIAST', '★', '5+ YEARS EXPERIENCE',  '●', 'JAVASCRIPT WIZARD'].map((text, idx) => (
                <span key={idx} className={`text-xl font-black uppercase ${idx % 2 === 0 ? 'text-white' : 'text-neo-accent'}`}>
                  {text}
                </span>
              ))}
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
            
            <h1 className="neo-title text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] mb-6">
              <span className="block">Saurav</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '3px #0A0A0A' }}>Sitaula</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="neo-box px-4 py-2 bg-neo-primary font-black text-lg">
                Fullstack
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
                A highly skilled and versatile <span className="retro-highlight font-bold">Full Stack Software Engineer</span> with over 5 years of experience in developing robust and scalable web applications.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Proficient in <span className="font-bold">JavaScript, React, Redux, Node.js</span>, and databases like MySQL and PostgreSQL. Demonstrated expertise in front-end development, back-end engineering, and RESTful API development.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <StatBox number="5+" label="Years Exp" color="bg-neo-primary" />
                <StatBox number="20+" label="Projects" color="bg-neo-secondary" />
                <StatBox number="∞" label="Curiosity" color="bg-neo-purple" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="neo-box p-6 md:p-8 bg-neo-dark text-white relative overflow-hidden">
            {/* Striped decoration */}
            <div className="absolute inset-0 striped-bg opacity-10" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black uppercase">
                  <span className="text-neo-accent">Core</span> Skills
                </h3>
                <span className="text-sm font-mono opacity-60">Technologies I love working with</span>
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
