export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "UBA Solutions - A Monotype Partner Company",
      period: "2024 - Present",
      location: "Lalitpur District, Nepal · Hybrid",
      description: "Driving full-stack development for Monotype font management and e-commerce services, leveraging React, Node.js, and headless Shopify to craft innovative e-commerce experiences.",
      skills: ["React", "Node.js", "Headless Shopify", "E-commerce"]
    },
    {
      role: "Senior Developer, Development Lead",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2023 - 2024",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Managed end-to-end web application development, ensuring seamless backend/frontend integration and successful product deployment. Led development initiatives for education and logistics web applications, encompassing feasibility analysis, feature planning, and documentation for streamlined releases. Directed full-stack development from conception to deployment, optimizing team efficiency and aligning projects with organizational goals.",
      skills: ["Full Stack Development", "Team Leadership", "Project Management", "Web Applications"]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2021 - 2023",
      location: "Kathmandu, Bāgmatī, Nepal",
      description: "Developed full-stack web applications using React, Laravel, and Spring Boot, including database schema design and REST API integration. Built interactive web applications with React and Redux, deploying features and mentoring junior developers in web and React Native development. Executed full-stack development from relational database design to frontend integration, providing technical guidance and support for feature releases and bug fixes.",
      skills: ["React", "Laravel", "Spring Boot", "Redux", "Mentoring"]
    },
    {
      role: "Web Application Intern, Developer",
      company: "Techart Trekkies Pvt Ltd.",
      period: "2018 - 2021",
      location: "Nepal",
      description: "Create CRUD applications, develop UI wireframes, translate the wireframes into code with react and develop the backend to support it. Mainly used Spring Boot and Laravel.",
      skills: ["Spring Boot", "Laravel", "React", "UI/UX"]
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
