import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

// Page-specific metadata enhancements
export const metadata = {
  title: "Saurav Sitaula | Software Architect | React, React Native & Node.js | Nepal",
  description: "Saurav Sitaula — Software Architect with 7+ years of expertise. Architecting scalable web and mobile applications with React, React Native, Node.js. Delivering solutions across Web, iOS, and Android. Based in Kathmandu, Nepal.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-bg relative overflow-hidden" itemScope itemType="https://schema.org/WebPage">
      {/* Background pattern - decorative only */}
      <div className="fixed inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Floating decorative shapes - hidden from screen readers */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-neo-accent border-4 border-neo-dark rotate-12 animate-float opacity-60 hidden lg:block" aria-hidden="true" />
      <div className="fixed top-40 right-20 w-12 h-12 bg-neo-primary border-4 border-neo-dark rounded-full animate-float-delayed opacity-60 hidden lg:block" aria-hidden="true" />
      <div className="fixed bottom-40 left-20 w-20 h-20 bg-neo-secondary border-4 border-neo-dark animate-spin-slow opacity-40 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} aria-hidden="true" />
      <div className="fixed top-1/2 right-10 w-8 h-32 bg-neo-purple border-4 border-neo-dark animate-float opacity-50 hidden lg:block" aria-hidden="true" />
      
      {/* Main content with proper semantic structure */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Main content area with semantic article wrapper */}
        <article itemScope itemType="https://schema.org/Person" itemProp="mainEntity">
          {/* Hidden but indexable content for SEO */}
          <meta itemProp="name" content="Saurav Sitaula" />
          <meta itemProp="jobTitle" content="Senior Full Stack Software Engineer" />
          <meta itemProp="email" content="sitaulasaurav@gmail.com" />
          <meta itemProp="url" content="https://saurav.dev" />
          <link itemProp="sameAs" href="https://github.com/sourey" />
          <link itemProp="sameAs" href="https://np.linkedin.com/in/saurav-sitaula-0bb174137" />
          <link itemProp="sameAs" href="https://www.instagram.com/sou_rey" />
          
          <Hero />
          <Experience />
          <Resume />
          <TechStack />
          <Projects />
        </article>
        
        <Footer />
      </div>
    </main>
  );
}
