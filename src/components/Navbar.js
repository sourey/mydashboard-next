import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b-3 border-neo-dark bg-white py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black font-mono uppercase tracking-tighter hover:underline decoration-4 underline-offset-4 decoration-neo-primary">
          Saurav.dev
        </Link>
        <div className="hidden md:flex gap-6 font-bold">
          <Link href="#about" className="hover:text-neo-primary transition-colors">About</Link>
          <Link href="#stack" className="hover:text-neo-primary transition-colors">Tech Stack</Link>
          <Link href="#experience" className="hover:text-neo-primary transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-neo-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-neo-primary transition-colors">Contact</Link>
        </div>
        <Link href="#contact" className="md:hidden font-bold border-2 border-neo-dark px-2 py-1 shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-neo-accent">
          Menu
        </Link>
      </div>
    </nav>
  );
}

