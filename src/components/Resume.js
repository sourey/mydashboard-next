'use client';

import { useEffect, useState } from 'react';

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="resume" 
      className="py-20 px-4 relative"
      aria-labelledby="resume-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="neo-tag bg-neo-lime text-neo-dark mb-4 inline-block">Resume</span>
            <h2 id="resume-title" className="neo-title text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
              My <span className="text-neo-primary">Curriculum</span> Vitae
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              7+ years of experience architecting scalable solutions. Download my CV to learn more about my professional journey.
            </p>
          </div>

          {/* CV Card */}
          <div className="neo-box bg-white p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neo-accent opacity-10 transform rotate-45 translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-neo-primary opacity-10 transform -rotate-12 -translate-x-8 translate-y-8" />
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: CV Preview */}
                <div className="relative group">
                  <div className="neo-box bg-neo-bg p-6 relative overflow-hidden">
                    {/* Document Header */}
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-neo-dark">
                      <div className="w-16 h-16 bg-neo-dark rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-black text-white">SS</span>
                      </div>
                      <div>
                        <h3 className="font-black text-xl uppercase">Saurav Sitaula</h3>
                        <p className="text-sm text-gray-600 font-bold">Software Architect & Lead</p>
                      </div>
                    </div>
                    
                    {/* Preview Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-black uppercase text-neo-primary mb-2">Experience</h4>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-neo-dark text-white px-2 py-1 rounded font-bold">Monotype</span>
                          <span className="text-xs bg-neo-secondary text-white px-2 py-1 rounded font-bold">Techart</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-black uppercase text-neo-primary mb-2">Skills</h4>
                        <div className="flex gap-1 flex-wrap">
                          {['React', 'Node.js', 'TypeScript', 'React Native'].map(skill => (
                            <span key={skill} className="text-[10px] bg-neo-accent/20 text-neo-dark px-2 py-0.5 rounded font-bold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-black uppercase text-neo-primary mb-2">Education</h4>
                        <p className="text-xs text-gray-600">BSc. CSIT — Tribhuvan University</p>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-neo-dark/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-black uppercase text-sm">Click to Download</span>
                    </div>
                  </div>
                  
                  {/* Document shadow effect */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-neo-dark -z-10 rounded-lg" />
                </div>

                {/* Right: Download Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                    Get the <span className="text-neo-primary">Full Picture</span>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    My CV contains detailed information about my professional experience, 
                    technical skills, education, and the projects I&apos;ve delivered across 
                    web and mobile platforms.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      '7+ years of hands-on experience',
                      '25+ projects delivered',
                      'Web, iOS & Android expertise',
                      'Enterprise-scale solutions',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-neo-lime border-2 border-neo-dark flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="font-bold text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/cv.pdf" 
                      download="Saurav_Sitaula_CV.pdf"
                      className="neo-button bg-neo-dark text-white inline-flex items-center justify-center gap-2 hover:bg-neo-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                    
                    <a 
                      href="/cv.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-button-outline inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              { label: 'Format', value: 'PDF', icon: '📄' },
              { label: 'Updated', value: 'Dec 2025', icon: '🔄' },
              { label: 'Pages', value: '2 Pages', icon: '📑' },
              { label: 'Language', value: 'English', icon: '🌐' },
            ].map((fact, idx) => (
              <div key={idx} className="neo-box bg-white p-4 text-center">
                <span className="text-2xl mb-2 block">{fact.icon}</span>
                <div className="font-black text-lg">{fact.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

