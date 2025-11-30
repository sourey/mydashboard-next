import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 dot-pattern opacity-40 pointer-events-none" />
      
      {/* Floating decorative shapes */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-neo-accent border-4 border-neo-dark rotate-12 animate-float opacity-60 hidden lg:block" />
      <div className="fixed top-40 right-20 w-12 h-12 bg-neo-primary border-4 border-neo-dark rounded-full animate-float-delayed opacity-60 hidden lg:block" />
      <div className="fixed bottom-40 left-20 w-20 h-20 bg-neo-secondary border-4 border-neo-dark animate-spin-slow opacity-40 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
      <div className="fixed top-1/2 right-10 w-8 h-32 bg-neo-purple border-4 border-neo-dark animate-float opacity-50 hidden lg:block" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
