'use client';

import { useEffect, useRef, useState } from 'react';

const stacks = {
  Languages: {
    icon: '💻',
    color: 'bg-neo-accent',
    items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python']
  },
  Backend: {
    icon: '⚙️',
    color: 'bg-neo-secondary',
    items: ['Node.js', 'Express', 'Spring Framework', 'Laravel', 'NestJS']
  },
  Frontend: {
    icon: '🎨',
    color: 'bg-neo-purple',
    items: ['React', 'Redux', 'Next.js', 'Remix.js', 'Tailwind CSS']
  },
  Database: {
    icon: '🗄️',
    color: 'bg-neo-orange',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma']
  },
  Tools: {
    icon: '🛠️',
    color: 'bg-neo-primary',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions']
  },
};

export default function TechStack() {
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

  return (
    <section id="stack" className="py-20 relative" ref={sectionRef}>
      {/* Zigzag top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-neo-secondary" style={{
        clipPath: 'polygon(0% 0%, 2% 100%, 4% 0%, 6% 100%, 8% 0%, 10% 100%, 12% 0%, 14% 100%, 16% 0%, 18% 100%, 20% 0%, 22% 100%, 24% 0%, 26% 100%, 28% 0%, 30% 100%, 32% 0%, 34% 100%, 36% 0%, 38% 100%, 40% 0%, 42% 100%, 44% 0%, 46% 100%, 48% 0%, 50% 100%, 52% 0%, 54% 100%, 56% 0%, 58% 100%, 60% 0%, 62% 100%, 64% 0%, 66% 100%, 68% 0%, 70% 100%, 72% 0%, 74% 100%, 76% 0%, 78% 100%, 80% 0%, 82% 100%, 84% 0%, 86% 100%, 88% 0%, 90% 100%, 92% 0%, 94% 100%, 96% 0%, 98% 100%, 100% 0%)'
      }} />
      
      <div className="bg-neo-secondary pt-8 pb-20 border-y-4 border-neo-dark relative">
        {/* Cross pattern overlay */}
        <div className="absolute inset-0 cross-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute -inset-2 bg-neo-dark transform rotate-2" />
              <h2 className="relative neo-title text-4xl md:text-6xl lg:text-7xl uppercase text-center bg-white border-4 border-neo-dark shadow-neo-lg p-4 md:p-6 transform -rotate-1">
                <span className="text-neo-primary">Tech</span> Stack
              </h2>
            </div>
          </div>
          
          {/* Tech Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(stacks).map(([category, data], idx) => (
              <div 
                key={category} 
                className={`neo-box p-6 ${data.color} ${
                  idx === 0 ? 'lg:col-span-2' : ''
                } transform transition-all duration-500 hover:-translate-y-2 hover:shadow-neo-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{data.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {category}
                  </h3>
                </div>
                
                <div className={`flex flex-wrap gap-2 ${idx === 0 ? 'lg:gap-3' : ''}`}>
                  {data.items.map((tech, techIdx) => (
                    <span 
                      key={tech} 
                      className="bg-white text-neo-dark border-3 border-neo-dark px-3 py-2 font-bold text-sm shadow-[3px_3px_0px_0px_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#0A0A0A] transition-all cursor-default"
                      style={{ animationDelay: `${techIdx * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Marquee */}
          <div className="mt-16 overflow-hidden border-4 border-neo-dark bg-neo-dark py-3">
            <div className="animate-marquee-reverse whitespace-nowrap flex">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 mr-6">
                  {['JAVASCRIPT', '◆', 'REACT', '★', 'NODE.JS', '●', 'TYPESCRIPT', '✦', 'NEXT.JS', '◆', 'POSTGRESQL', '★'].map((text, idx) => (
                    <span 
                      key={idx} 
                      className={`text-lg font-black uppercase ${idx % 2 === 0 ? 'text-neo-accent' : 'text-white'}`}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-neo-secondary" style={{
        clipPath: 'polygon(0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%, 18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%, 36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%, 52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%, 68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%, 84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%)'
      }} />
    </section>
  );
}
