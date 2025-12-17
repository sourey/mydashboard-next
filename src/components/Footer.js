'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-neo-dark text-white relative overflow-hidden" aria-labelledby="contact-title" itemScope itemType="https://schema.org/Person">
      {/* Top Marquee */}
      <div className="bg-neo-primary border-y-4 border-neo-dark py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              {['GET IN TOUCH', '★', 'LET\'S BUILD', '●', 'COLLABORATE', '✦', 'CREATE IMPACT', '★'].map((text, idx) => (
                <span key={idx} className={`text-xl font-black uppercase ${idx % 2 === 0 ? 'text-white' : 'text-neo-dark'}`}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <div>
            <span className="neo-tag bg-neo-accent text-neo-dark mb-6 inline-block">Contact</span>
            <h2 id="contact-title" className="neo-title text-5xl md:text-6xl lg:text-7xl uppercase mb-6 leading-[0.9]">
              Let&apos;s Build<br />
              <span className="text-neo-accent">Something</span><br />
              <span className="text-neo-primary">Cool</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Open to strategic partnerships, consulting engagements, and impactful opportunities. 
              Let&apos;s engineer something exceptional together.
            </p>

            {/* Email Button */}
            <a 
              href="mailto:sitaulasaurav@gmail.com" 
              className="neo-button bg-neo-accent text-neo-dark inline-flex items-center gap-3"
              itemProp="email"
              aria-label="Send email to Saurav Sitaula at sitaulasaurav@gmail.com"
            >
              <span aria-hidden="true">📧</span>
              Drop me an email
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="neo-box p-8 bg-white text-neo-dark">
            <h3 className="text-2xl font-black uppercase mb-6">Find Me Online</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <SocialCard 
                href="https://github.com/sourey" 
                label="GitHub" 
                icon={<GithubIcon />}
                color="bg-[#24292e]"
                description="Code & Projects"
                itemProp="sameAs"
              />
              <SocialCard 
                href="https://np.linkedin.com/in/saurav-sitaula-0bb174137" 
                label="LinkedIn"
                icon={<LinkedinIcon />}
                color="bg-[#0077b5]"
                description="Professional"
                itemProp="sameAs"
              />
              <SocialCard 
                href="https://www.instagram.com/sou_rey" 
                label="Instagram"
                icon={<InstagramIcon />}
                color="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]"
                description="Personal"
                itemProp="sameAs"
              />
              <SocialCard 
                href="https://www.facebook.com/soureyy" 
                label="Facebook"
                icon={<FacebookIcon />}
                color="bg-[#1877F2]"
                description="Connect"
                itemProp="sameAs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-neo-dark bg-neo-bg text-neo-dark">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="font-mono font-black text-xl uppercase">
              Saurav<span className="text-neo-primary">.dev</span>
            </div>

            {/* Copyright */}
            <p className="font-mono text-sm text-center">
              © {currentYear} Saurav Sitaula. 
              <span className="hidden md:inline"> Built with </span>
              <span className="text-neo-primary font-bold">Next.js</span>
              <span className="hidden md:inline"> & </span>
              <span className="text-neo-secondary font-bold">NeoBrutalism</span>
            </p>

            {/* Decorative */}
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-neo-primary border-2 border-neo-dark" />
              <div className="w-4 h-4 bg-neo-accent border-2 border-neo-dark" />
              <div className="w-4 h-4 bg-neo-secondary border-2 border-neo-dark" />
              <div className="w-4 h-4 bg-neo-purple border-2 border-neo-dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -right-20 w-40 h-40 border-4 border-white/10 rotate-12" />
      <div className="absolute bottom-1/4 -left-16 w-32 h-32 border-4 border-white/10 -rotate-12 rounded-full" />
    </footer>
  );
}

function SocialCard({ href, icon, label, color, description, itemProp }) {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className="neo-box p-4 group hover:-translate-y-1 hover:shadow-neo-lg transition-all overflow-hidden relative"
      aria-label={`Visit Saurav Sitaula's ${label} profile`}
      itemProp={itemProp}
    >
      {/* Background on hover */}
      <div className={`absolute inset-0 ${color} transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center`} />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-3xl mb-2 group-hover:text-white transition-colors group-hover:scale-110 transform">
          {icon}
        </div>
        <span className="font-black uppercase text-sm group-hover:text-white transition-colors">
          {label}
        </span>
        <span className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">
          {description}
        </span>
      </div>
    </a>
  );
}

// SVG Icons
function GithubIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-63.5 0-14.3 5.3-26.1 14.1-36.3-1.4-4.9-6.1-24.3 1.4-46.3 0 0 19.7-6.2 64.6 24.1 17.9-4.9 37-7.4 56.1-7.4 19.1 0 38.3 2.5 56.2 7.4 45-30.5 64.5-24.1 64.5-24.1 7.5 22 2.8 41.3 1.4 46.3 8.7 10.2 14.1 22 14.1 36.3 0 49.4-56.4 57.2-112.3 63.5 9.1 7.9 17.2 23.5 17.2 47.3 0 34-2.8 61.5-2.8 69.9 0 6.5 4.4 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
  )
}
