const projects = [
  {
    name: 'react-trivia',
    description: 'A React app to play trivia games.',
    tags: ['JavaScript', 'React'],
    link: 'https://github.com/sourey/react-trivia'
  },
  {
    name: 'kodakgram-react',
    description: 'A React app clone of Instagram.',
    tags: ['JavaScript', 'React'],
    link: 'https://github.com/sourey/kodakgram-react'
  },
  {
    name: 'shopping-cart-typescript',
    description: 'Shopping cart implementation using TypeScript.',
    tags: ['TypeScript'],
    link: 'https://github.com/sourey/shopping-cart-typescript'
  },
  {
    name: 'movies_recommendation',
    description: 'Movie recommendation system with content based filtering using cosine similarity.',
    tags: ['JavaScript', 'ML'],
    link: 'https://github.com/sourey/movies_recommendation'
  },
  {
    name: 'jira_clone',
    description: 'A simplified Jira clone built with React/Babel and Node/TypeScript.',
    tags: ['React', 'Node', 'TypeScript'],
    link: 'https://github.com/sourey/jira_clone'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-right">
        <span className="bg-neo-accent px-4 py-2 border-3 border-neo-dark shadow-neo">Selected Projects</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <a 
            key={project.name} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-box p-6 group hover:bg-neo-dark hover:text-white transition-colors block"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black font-mono uppercase group-hover:text-neo-accent">{project.name}</h3>
              <span className="text-2xl group-hover:rotate-45 transition-transform">↗</span>
            </div>
            <p className="mb-6 font-medium border-l-4 border-neo-primary pl-4 py-1">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold border-2 border-neo-dark px-2 py-1 bg-white text-neo-dark group-hover:border-white">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

