import Link from 'next/link';
import InstagramGallery from '@/components/InstagramGallery';
import Recommendations from '@/components/Recommendations';

export const metadata = {
  title: "Hobbies | Saurav Sitaula",
  description: "Photography, favorite movies, series, and books - A glimpse into my interests beyond code.",
};

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-neo-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 dot-pattern opacity-40 pointer-events-none" />
      
      {/* Floating decorative shapes */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-neo-orange border-4 border-neo-dark rotate-12 animate-float opacity-60 hidden lg:block" />
      <div className="fixed bottom-40 right-20 w-12 h-12 bg-neo-lime border-4 border-neo-dark rounded-full animate-float-delayed opacity-60 hidden lg:block" />
      
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="w-full py-4 px-4 sticky top-0 z-50 bg-neo-bg/95 backdrop-blur-sm border-b-4 border-neo-dark">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Back to Home */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-1 bg-neo-accent border-4 border-neo-dark transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="relative bg-neo-dark text-white px-4 py-2 font-mono font-black text-xl uppercase tracking-tighter transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                ← <span className="text-neo-accent">Back</span>
              </div>
            </Link>
            
            {/* Page Title */}
            <h1 className="neo-title text-2xl md:text-3xl uppercase">
              <span className="bg-neo-orange text-white px-3 py-1 border-4 border-neo-dark">Hobbies</span>
            </h1>

            {/* Home Link */}
            <Link 
              href="/" 
              className="px-4 py-2 font-black text-sm uppercase tracking-wider border-4 border-neo-dark shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-neo-lime"
            >
              Home
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="neo-tag bg-neo-purple text-white mb-6 inline-block">Beyond Code</span>
            <h2 className="neo-title text-5xl md:text-7xl lg:text-8xl uppercase mb-6">
              Life Outside<br />
              <span className="text-neo-orange">The Terminal</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600">
              When I&apos;m not coding, you&apos;ll find me capturing moments, watching great stories, or lost in a good book.
            </p>
          </div>
        </section>

        {/* Instagram Gallery Section */}
        <InstagramGallery />

        {/* Recommendations Section */}
        <Recommendations />

        {/* Footer CTA */}
        <section className="py-16 bg-neo-dark text-white border-t-4 border-neo-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="neo-title text-3xl md:text-4xl uppercase mb-4">
              Got a Recommendation?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              I&apos;m always looking for new movies, series, or books to explore. Let me know your favorites!
            </p>
            <Link href="/#contact" className="neo-button bg-neo-accent text-neo-dark inline-block">
              Share with me →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}


