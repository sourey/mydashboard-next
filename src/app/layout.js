import localFont from "next/font/local";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://sauravsitaula.com.np";

export const metadata = {
  // Primary Meta Tags
  title: {
    default: "Saurav Sitaula | Senior Full Stack Software Engineer | React & Node.js Expert | Nepal",
    template: "%s | Saurav Sitaula"
  },
  description: "Saurav Sitaula — Senior Full Stack Software Engineer based in Kathmandu, Nepal. 7+ years of proven expertise delivering high-performance web applications. CSIT graduate from Tribhuvan University. Currently engineering scalable solutions at Monotype. Deep proficiency in React, Node.js, TypeScript, and Next.js.",
  keywords: [
    // Name variations - critical for person searches
    "Saurav Sitaula",
    "Saurav",
    "Sitaula",
    "सौरभ सिटौला",
    "sourey",
    "sou_rey",
    "soureyy",
    "sitaulasaurav",
    
    // Professional titles
    "Full Stack Developer",
    "Software Engineer",
    "Senior Software Engineer",
    "Full Stack Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    
    // Technical skills
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "React Expert",
    "Node.js Expert",
    
    // Location-based - Nepal targeting
    "Software Engineer Nepal",
    "Web Developer Nepal",
    "Developer Kathmandu",
    "Kathmandu Developer",
    "Nepal Software Engineer",
    "Nepali Developer",
    "Software Engineer Kathmandu",
    "React Developer Nepal",
    "Full Stack Developer Nepal",
    
    // Education - TU/CSIT targeting
    "CSIT Graduate",
    "Tribhuvan University",
    "TU CSIT",
    "Computer Science Nepal",
    "CSIT Developer",
    "BSc CSIT",
    "Computer Science and Information Technology",
    
    // Company associations
    "Monotype Developer",
    "Monotype Software Engineer",
    "UBA Solutions",
    "Techart Trekkies",
  ],
  authors: [{ name: "Saurav Sitaula", url: siteUrl }],
  creator: "Saurav Sitaula",
  publisher: "Saurav Sitaula",
  
  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-NP": "/",
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Saurav Sitaula - Portfolio",
    title: "Saurav Sitaula | Senior Full Stack Software Engineer | Nepal",
    description: "Senior Full Stack Software Engineer with 7+ years of expertise. Architecting robust, scalable web applications using React, Node.js, and TypeScript. Based in Kathmandu, Nepal. Currently at Monotype.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saurav Sitaula - Senior Full Stack Software Engineer from Nepal",
        type: "image/png",
      },
      {
        url: `${siteUrl}/og-image-square.png`,
        width: 600,
        height: 600,
        alt: "Saurav Sitaula",
        type: "image/png",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Saurav Sitaula | Senior Full Stack Software Engineer | Nepal",
    description: "7+ years engineering high-impact web solutions. React, Node.js, TypeScript specialist. CSIT graduate from TU. Driving innovation at Monotype.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@sou_rey",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0A0A0A" },
    ],
  },
  
  // Manifest
  manifest: "/manifest.json",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code", // Add from Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Additional Meta
  category: "technology",
  classification: "Portfolio Website",
  
  // App-specific
  applicationName: "Saurav Sitaula Portfolio",
  referrer: "origin-when-cross-origin",
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Other important meta tags
  other: {
    "theme-color": "#0A0A0A",
    "color-scheme": "light",
    "msapplication-TileColor": "#0A0A0A",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Saurav Sitaula",
    "geo.region": "NP-3",
    "geo.placename": "Kathmandu",
    "geo.position": "27.7172;85.3240",
    "ICBM": "27.7172, 85.3240",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://np.linkedin.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
