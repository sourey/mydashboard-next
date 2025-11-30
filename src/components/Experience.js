'use client';

import { useEffect, useRef, useState } from 'react';

export default function Experience() {
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

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "UBA Solutions - A Monotype Partner Company",
      period: "2024 - Present",
      location: "Lalitpur District, Nepal · Hybrid",
      description: "Driving full-stack development for Monotype font management and e-commerce services, leveraging React, Node.js, and headless Shopify to craft innovative e-commerce experiences.",
      skills: ["React", "Node.js", "Headless Shopify", "E-commerce"],
      color: "bg-neo-primary",
      badge: "🔥 Current"
    },
    {
      role: "Senior Developer, Development Lead",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2023 - 2024",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Managed end-to-end web application development, ensuring seamless backend/frontend integration. Led development initiatives for education and logistics web applications, encompassing feasibility analysis and feature planning.",
      skills: ["Full Stack Development", "Team Leadership", "Project Management", "Web Applications"],
      color: "bg-neo-purple",
      badge: "👑 Lead"
    },
    {
      role: "Senior Full Stack Developer",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2021 - 2023",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Developed full-stack web applications using React, Laravel, and Spring Boot, including database schema design and REST API integration. Built interactive applications with React and Redux.",
      skills: ["React", "Laravel", "Spring Boot", "Redux", "Mentoring"],
      color: "bg-neo-secondary",
      badge: "⚡ Senior"
    },
    {
      role: "Web Application Intern → Developer",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2018 - 2021",
      location: "Nepal",
      description: "Created CRUD applications, developed UI wireframes, translated wireframes into code with React and developed the backend to support it.",
      skills: ["Spring Boot", "Laravel", "React", "UI/UX"],
      color: "bg-neo-accent",
      badge: "🌱 Growth"
    }
  ];

  return (
    <section id="experience" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-neo-accent transform translate-x-2 translate-y-2" />
            <h2 className="relative neo-title text-4xl md:text-6xl lg:text-7xl uppercase bg-neo-dark text-white border-4 border-neo-dark px-6 py-4 transform -rotate-1">
              Experience
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-neo-dark transform md:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionProperty: 'all',
                  transitionDuration: '500ms',
                  transitionDelay: `${idx * 150}ms` 
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 bg-neo-dark border-4 border-white rounded-full z-10 shadow-neo" />
                
                {/* Card */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="neo-box p-6 md:p-8 relative group hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-300">
                    {/* Period Badge */}
                    <div className={`absolute -top-4 ${idx % 2 === 0 ? '-right-2 md:-right-4' : '-right-2 md:-left-4'} ${exp.color} text-white px-4 py-2 border-4 border-neo-dark font-black text-sm shadow-neo transform rotate-2`}>
                      {exp.period}
                    </div>

                    {/* Badge */}
                    <span className="neo-tag mb-4 inline-block">{exp.badge}</span>

                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-lg font-mono font-bold text-gray-600 mb-4 pb-2 border-b-4 border-neo-dark inline-block">
                      {exp.company}
                    </h4>
                    
                    <p className="text-sm font-mono mb-4 text-gray-500 flex items-center gap-2">
                      <span className="inline-block w-4 h-4 bg-neo-primary rounded-full animate-pulse" />
                      {exp.location}
                    </p>

                    <p className="mb-6 leading-relaxed text-gray-700">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="neo-tag hover:bg-neo-lime transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                      <div className={`absolute bottom-0 right-0 w-24 h-24 ${exp.color} transform rotate-45 translate-x-12 translate-y-12 border-4 border-neo-dark`} />
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="w-4 h-4 bg-neo-dark rotate-45" />
          <div className="w-4 h-4 bg-neo-primary rotate-45" />
          <div className="w-4 h-4 bg-neo-accent rotate-45" />
          <div className="w-4 h-4 bg-neo-secondary rotate-45" />
          <div className="w-4 h-4 bg-neo-purple rotate-45" />
        </div>
      </div>
    </section>
  );
}
