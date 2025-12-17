export default function Loading() {
  return (
    <div className="min-h-screen bg-neo-bg flex items-center justify-center" aria-label="Loading page content">
      <div className="relative">
        {/* Main loader box */}
        <div className="neo-box p-8 bg-white animate-pulse">
          <div className="flex flex-col items-center gap-4">
            {/* Logo skeleton */}
            <div className="w-24 h-8 bg-neo-dark animate-pulse rounded" />
            
            {/* Loading bars */}
            <div className="flex gap-2">
              <div className="w-3 h-8 bg-neo-primary animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-3 h-8 bg-neo-accent animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-3 h-8 bg-neo-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
              <div className="w-3 h-8 bg-neo-purple animate-bounce" style={{ animationDelay: '450ms' }} />
            </div>
            
            {/* Loading text */}
            <p className="font-mono font-bold text-sm uppercase tracking-wider">
              Loading...
            </p>
          </div>
        </div>
        
        {/* Decorative shadow */}
        <div className="absolute -inset-1 bg-neo-dark -z-10 translate-x-2 translate-y-2" />
      </div>
    </div>
  );
}

