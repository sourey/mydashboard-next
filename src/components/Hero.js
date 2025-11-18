export default function Hero() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start max-w-6xl mx-auto px-4 py-20">
      <div className="neo-box p-8 md:p-12 bg-neo-accent rotate-[-1deg] hover:rotate-0 transition-transform mb-12">
        <h2 className="font-mono font-bold text-xl md:text-2xl mb-2">Hello, I&apos;m</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          Saurav<br />Sitaula
        </h1>
        <p className="font-mono text-lg md:text-xl font-bold bg-white inline-block px-2 py-1 border-2 border-neo-dark">
          JavaScript Developer & Tech Enthusiast
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 w-full">
        <div className="neo-box p-6 bg-white">
          <h3 className="text-2xl font-black mb-4 border-b-3 border-neo-dark pb-2 inline-block">About Me</h3>
          <p className="text-lg leading-relaxed">
            I&apos;m a passionate JavaScript developer specializing in <span className="font-bold bg-neo-secondary px-1">Node.js</span>, <span className="font-bold bg-neo-secondary px-1">React</span>, Php, and Laravel. 
            I love building efficient, scalable, and maintainable software solutions. Currently based in Kathmandu, Nepal.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="https://github.com/sourey" target="_blank" rel="noopener noreferrer" className="neo-button bg-neo-dark text-white hover:bg-gray-800">
              GitHub
            </a>
            <a href="https://np.linkedin.com/in/saurav-sitaula-0bb174137" target="_blank" rel="noopener noreferrer" className="neo-button bg-[#0077b5] text-white border-neo-dark">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="neo-box p-6 bg-neo-primary text-white flex flex-col justify-center items-center text-center">
          <p className="font-mono text-xl mb-4">Currently Learning</p>
          <div className="flex flex-wrap gap-2 justify-center">
             {['Next.js', 'Go', 'Astro'].map(tech => (
               <span key={tech} className="bg-white text-neo-dark border-2 border-neo-dark px-3 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

