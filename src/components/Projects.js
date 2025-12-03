'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'Take 2',
    description: 'An interactive card game built with modern web technologies. Deal cards, strategize, and have fun! Play it live now.',
    tags: ['React', 'Game', 'Interactive'],
    link: 'https://take-2-tau.vercel.app/',
    featured: true,
    color: 'bg-neo-orange',
    emoji: '🃏',
    isLive: true
  },
  {
    name: 'Jira Clone',
    description: 'A simplified Jira clone built with React/Babel and Node/TypeScript. Full project management capabilities.',
    tags: ['React', 'Node', 'TypeScript'],
    link: 'https://github.com/sourey/jira_clone',
    featured: true,
    color: 'bg-neo-purple',
    emoji: '📋'
  },
  {
    name: 'Movies Recommendation',
    description: 'Movie recommendation system with content based filtering using cosine similarity. ML-powered suggestions.',
    tags: ['JavaScript', 'ML', 'Algorithms'],
    link: 'https://github.com/sourey/movies_recommendation',
    featured: false,
    color: 'bg-neo-primary',
    emoji: '🎬'
  },
  {
    name: 'React Trivia',
    description: 'A React app to play trivia games. Test your knowledge with fun questions!',
    tags: ['JavaScript', 'React'],
    link: 'https://github.com/sourey/react-trivia',
    color: 'bg-neo-secondary',
    emoji: '🧠'
  },
  {
    name: 'Kodakgram',
    description: 'A React app clone of Instagram. Share moments, connect with friends.',
    tags: ['JavaScript', 'React', 'Social'],
    link: 'https://github.com/sourey/kodakgram-react',
    color: 'bg-neo-orange',
    emoji: '📸'
  },
  {
    name: 'Shopping Cart',
    description: 'Shopping cart implementation using TypeScript. E-commerce ready with type safety.',
    tags: ['TypeScript', 'E-commerce'],
    link: 'https://github.com/sourey/shopping-cart-typescript',
    color: 'bg-neo-accent',
    emoji: '🛒'
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neo-lime opacity-20 border-4 border-neo-dark transform rotate-12 translate-x-32 -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-neo-purple opacity-20 border-4 border-neo-dark transform -rotate-12 -translate-x-24 translate-y-16" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="neo-tag bg-neo-purple text-white mb-4 inline-block">Portfolio</span>
            <h2 className="neo-title text-4xl md:text-6xl lg:text-7xl uppercase">
              Selected<br />
              <span className="text-neo-primary">Projects</span>
            </h2>
          </div>
          <a 
            href="https://github.com/sourey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neo-button bg-neo-dark text-white self-start md:self-end"
          >
            View All on GitHub ↗
          </a>
        </div>
        
        {/* Featured Projects - Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, idx) => (
            <a 
              key={project.name} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-box p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-neo-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background color on hover */}
              <div className={`absolute inset-0 ${project.color} transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left`} />
              
              <div className="relative z-10">
                {/* Featured badge */}
                <div className="absolute -top-2 -right-2 bg-neo-accent border-4 border-neo-dark px-3 py-1 font-black text-xs uppercase rotate-3">
                  {project.isLive ? '🔴 LIVE DEMO' : '⭐ Featured'}
                </div>

                <span className="text-5xl mb-4 block">{project.emoji}</span>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-lg mb-6 group-hover:text-white/90 transition-colors leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="neo-tag bg-white group-hover:bg-neo-dark group-hover:text-white group-hover:border-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-black uppercase text-sm group-hover:text-white transition-colors">
                  {project.isLive ? 'Play Now' : 'View Project'}
                  <span className="transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform text-xl">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Other Projects - Smaller Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <a 
              key={project.name} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-box p-6 group hover:bg-neo-dark transition-all duration-300 hover:-translate-y-2 hover:shadow-neo-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <span className={`w-4 h-4 ${project.color} border-2 border-neo-dark rotate-45`} />
              </div>
              
              <h3 className="text-xl font-black uppercase mb-2 group-hover:text-neo-accent transition-colors">
                {project.name}
              </h3>
              
              <p className="text-sm mb-4 group-hover:text-white/80 transition-colors line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.tags.slice(0, 2).map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-bold border-2 border-neo-dark px-2 py-1 bg-white text-neo-dark group-hover:border-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 neo-box p-8 md:p-12 bg-neo-lime text-center relative overflow-hidden">
          <div className="absolute inset-0 striped-bg opacity-20" />
          <div className="relative z-10">
            <h3 className="neo-title text-3xl md:text-4xl uppercase mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a href="#contact" className="neo-button bg-neo-dark text-white inline-block">
              Let&apos;s Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
