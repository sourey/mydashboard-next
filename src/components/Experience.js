export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "UBA Solutions - A Monotype Partner Company",
      period: "Sep 2024 - Present",
      location: "Lalitpur District, Nepal · Hybrid",
      description: null,
      skills: []
    },
    {
      role: "Senior Development Lead",
      company: "Techart Trekkies",
      period: "Nov 2022 - Feb 2024",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Implemented logistics solutions as Senior Development Lead. Developed systems using JavaScript and React. Designed databases and APIs for efficient data handling. Improved server deployment processes. Managed feature releases following SDLC practices. Led development teams, enhancing productivity and innovation. Delivered scalable solutions that improved logistics operations.",
      skills: ["Laravel", "Analytical Skills", "+10 skills"]
    },
    {
      role: "Senior Full Stack Engineer",
      company: "Techart Trekkies",
      period: "Sep 2021 - Oct 2022",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Developed and maintained logistics and education web applications as Senior Full Stack Engineer. Built responsive front-end interfaces using React and JavaScript. Designed and optimized databases for efficient data management. Created RESTful APIs to facilitate seamless data flow. Implemented server-side logic and improved deployment processes. Collaborated with cross-functional teams to deliver feature releases. Mentored junior developers and contributed to code reviews. Resolved complex technical issues, enhancing system performance and reliability.",
      skills: ["Laravel", "Analytical Skills", "+18 skills"]
    },
    {
      role: "Full Stack Engineer",
      company: "Techart Trekkies",
      period: "Mar 2019 - Aug 2021",
      location: "Nepal",
      description: "Working with JavaScript; React and Node/Laravel",
      skills: ["Laravel", "Analytical Skills", "+12 skills"]
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-center transform -rotate-2">
        <span className="bg-neo-secondary px-4 py-2 border-3 border-neo-dark shadow-neo text-white">
          Experience
        </span>
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="neo-box p-6 md:p-8 relative group hover:-translate-y-1 hover:shadow-neo-lg transition-all"
          >
            <div className="absolute -top-3 -right-3 bg-neo-primary text-white px-3 py-1 border-3 border-neo-dark font-bold text-sm shadow-neo">
              {exp.period}
            </div>

            <h3 className="text-2xl md:text-3xl font-black uppercase mb-1">{exp.role}</h3>
            <h4 className="text-lg md:text-xl font-mono font-bold text-gray-600 mb-4 border-b-3 border-neo-dark inline-block pb-1">
              {exp.company}
            </h4>
            
            <p className="text-sm font-mono mb-4 text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-neo-dark rounded-full"></span>
              {exp.location}
            </p>

            {exp.description && (
              <p className="mb-6 font-medium leading-relaxed">
                {exp.description}
              </p>
            )}

            {exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-bold px-2 py-1 bg-neo-bg border-2 border-neo-dark hover:bg-neo-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

