import Link from 'next/link';

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Saurav Sitaula's portfolio to explore projects, experience, and more.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neo-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Decorative shapes */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-neo-accent border-4 border-neo-dark rotate-12 animate-float opacity-60 hidden lg:block" aria-hidden="true" />
      <div className="fixed bottom-40 right-20 w-12 h-12 bg-neo-primary border-4 border-neo-dark rounded-full animate-float-delayed opacity-60 hidden lg:block" aria-hidden="true" />
      
      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-neo-primary transform translate-x-3 translate-y-3 border-4 border-neo-dark" />
          <h1 className="relative neo-title text-[120px] md:text-[180px] leading-none bg-white border-4 border-neo-dark px-8 py-4">
            404
          </h1>
        </div>
        
        {/* Message */}
        <div className="neo-box p-8 bg-white mb-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you&apos;re looking for seems to have wandered off into the void.
            But don&apos;t worry, there&apos;s plenty more to explore!
          </p>
          
          {/* Navigation Options */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="neo-button bg-neo-dark text-white"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/#projects" 
              className="neo-button-outline"
            >
              View Projects
            </Link>
            <Link 
              href="/#contact" 
              className="neo-button bg-neo-accent text-neo-dark"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Fun suggestion */}
        <p className="text-sm font-mono text-gray-500">
          Error code: 404 | Maybe try searching for &quot;Saurav Sitaula&quot; instead? 😉
        </p>
      </div>
    </main>
  );
}

