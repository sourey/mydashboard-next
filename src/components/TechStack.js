const stacks = {
  Languages: ['JavaScript', 'TypeScript', 'Java', 'Php', 'Python'],
  Backend: ['Node.js', 'Express', 'Spring Framework', 'Laravel'],
  Frontend: ['React', 'Redux', 'Next.js', 'Remix.js'],
};

export default function TechStack() {
  return (
    <section id="stack" className="py-20 bg-neo-secondary border-y-3 border-neo-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-center bg-white border-3 border-neo-dark shadow-neo inline-block p-4 rotate-2 mx-auto block transform">
          Tech Stack
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(stacks).map(([category, techs], idx) => (
            <div key={category} className={`neo-box p-6 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
              <h3 className="text-2xl font-bold font-mono mb-6 border-b-3 border-neo-dark pb-2 uppercase">{category}</h3>
              <ul className="space-y-3">
                {techs.map(tech => (
                  <li key={tech} className="flex items-center gap-2 font-bold">
                    <span className="w-3 h-3 bg-neo-dark block"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

