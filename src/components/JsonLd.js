export function JsonLd() {
  const siteUrl = "https://sauravsitaula.com.np";
  
  // Person Schema - Most important for name searches
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Saurav Sitaula",
    givenName: "Saurav",
    familyName: "Sitaula",
    alternateName: ["sourey", "sou_rey", "soureyy", "Saurav", "सौरभ सिटौला"],
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/profile-photo.jpg`,
      width: 400,
      height: 400,
    },
    description: "Software Architect based in Kathmandu, Nepal with 7+ years architecting scalable web and mobile applications. CSIT graduate from Tribhuvan University. Expert in React, React Native, Node.js, TypeScript — delivering solutions across Web, iOS, and Android platforms.",
    email: "sitaulasaurav@gmail.com",
    jobTitle: "Software Architect",
    worksFor: {
      "@type": "Organization",
      name: "UBA Solutions - A Monotype Partner Company",
      url: "https://www.monotype.com",
      parentOrganization: {
        "@type": "Organization",
        name: "Monotype",
        url: "https://www.monotype.com",
      },
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Tribhuvan University",
        alternateName: "TU",
        url: "https://tu.edu.np",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressCountry: "Nepal",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "CSIT - Computer Science and Information Technology",
        description: "Bachelor's degree program in Computer Science and Information Technology",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "BSc CSIT",
      credentialCategory: "Bachelor's Degree",
      educationalLevel: "Bachelor",
      about: {
        "@type": "Thing",
        name: "Computer Science and Information Technology",
      },
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "React.js",
      "React Native",
      "iOS Development",
      "Android Development",
      "Cross-Platform Mobile Development",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Redux",
      "Full Stack Development",
      "Web Development",
      "Mobile App Development",
      "Software Architecture",
      "System Design",
      "Technical Leadership",
      "E-commerce Development",
      "Headless Shopify",
    ],
    knowsLanguage: ["English", "Nepali", "Hindi"],
    nationality: {
      "@type": "Country",
      name: "Nepal",
      alternateName: "NP",
    },
    birthPlace: {
      "@type": "Place",
      name: "Nepal",
    },
    homeLocation: {
      "@type": "Place",
      name: "Kathmandu, Nepal",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati",
        addressCountry: "Nepal",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      addressCountry: "Nepal",
      postalCode: "44600",
    },
    sameAs: [
      "https://github.com/sourey",
      "https://np.linkedin.com/in/saurav-sitaula-0bb174137",
      "https://www.instagram.com/sou_rey",
      "https://www.facebook.com/soureyy",
      "https://sauravsitaula.com.np",
    ],
  };

  // WebSite Schema - For sitelinks search box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Saurav Sitaula - Portfolio",
    alternateName: ["Saurav Sitaula", "sauravsitaula.com.np", "saurav.dev"],
    description: "Official portfolio of Saurav Sitaula — Senior Full Stack Software Engineer from Nepal with 7+ years of expertise in building scalable web applications",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: ["en-US", "en-NP"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ProfilePage Schema - Optimized for personal brand searches
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Saurav Sitaula - Senior Full Stack Software Engineer | Nepal",
    description: "Official portfolio of Saurav Sitaula showcasing 7+ years of professional experience, projects, and technical expertise. Based in Kathmandu, Nepal.",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: "en-US",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  // ItemList Schema for Projects
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#projects`,
    name: "Projects by Saurav Sitaula",
    description: "Production-grade software projects and web applications engineered by Saurav Sitaula",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Take 2",
          description: "An interactive card game built with modern web technologies",
          url: "https://take-2-tau.vercel.app/",
          applicationCategory: "Game",
          operatingSystem: "Web Browser",
          author: { "@id": `${siteUrl}/#person` },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareSourceCode",
          name: "Jira Clone",
          description: "A full-featured project management application built with React and Node/TypeScript",
          url: "https://github.com/sourey/jira_clone",
          codeRepository: "https://github.com/sourey/jira_clone",
          programmingLanguage: ["TypeScript", "React", "Node.js"],
          author: { "@id": `${siteUrl}/#person` },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareSourceCode",
          name: "Movies Recommendation System",
          description: "ML-powered movie recommendation engine using content-based filtering and cosine similarity",
          url: "https://github.com/sourey/movies_recommendation",
          codeRepository: "https://github.com/sourey/movies_recommendation",
          programmingLanguage: ["JavaScript"],
          author: { "@id": `${siteUrl}/#person` },
        },
      },
    ],
  };

  // Organization Schema - For work context
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saurav Sitaula - Software Development Services",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    founder: {
      "@id": `${siteUrl}/#person`,
    },
    description: "Expert software development services by Saurav Sitaula — 7+ years delivering scalable, high-performance web applications",
    areaServed: ["Nepal", "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "sitaulasaurav@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
    sameAs: [
      "https://github.com/sourey",
      "https://np.linkedin.com/in/saurav-sitaula-0bb174137",
    ],
  };

  // FAQ Schema - Great for featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Saurav Sitaula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula is a Software Architect based in Kathmandu, Nepal with over 7 years of professional experience. He holds a CSIT degree from Tribhuvan University (TU) and specializes in React, React Native, Node.js, and TypeScript. He architects web and mobile applications, currently at UBA Solutions, a Monotype Partner Company.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Saurav Sitaula specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula has deep expertise in JavaScript, TypeScript, React, React Native, Next.js, Node.js, PostgreSQL, MongoDB, and GraphQL. He specializes in architecting scalable web and mobile applications across Web, iOS, and Android platforms, as well as headless e-commerce solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Where did Saurav Sitaula study?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula is a CSIT (Computer Science and Information Technology) graduate from Tribhuvan University (TU), Nepal's premier educational institution.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Saurav Sitaula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Saurav Sitaula via email at sitaulasaurav@gmail.com, connect on LinkedIn at linkedin.com/in/saurav-sitaula-0bb174137, or explore his work on GitHub at github.com/sourey. His portfolio is available at sauravsitaula.com.np.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Saurav Sitaula based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula is based in Kathmandu, Nepal. He works in a hybrid capacity as a Senior Software Engineer at UBA Solutions - A Monotype Partner Company, and is available for remote collaborations worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What is Saurav Sitaula's current role?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula serves as a Senior Software Engineer at UBA Solutions - A Monotype Partner Company. He drives full-stack development for Monotype's font management and e-commerce services, architecting solutions with React, Node.js, and headless Shopify.",
        },
      },
      {
        "@type": "Question",
        name: "Is Saurav Sitaula available for freelance or consulting work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Saurav Sitaula is open to freelance projects, consulting engagements, and full-time opportunities. With 7+ years of proven expertise, he welcomes discussions about challenging projects and innovative ideas. Contact him at sitaulasaurav@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "How many years of experience does Saurav Sitaula have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurav Sitaula has over 7 years of professional experience in software architecture and development. His career spans roles from developer to architect and technical lead, building production-grade web and mobile applications for diverse industries including font technology, e-commerce, education, and logistics.",
        },
      },
    ],
  };

  // LocalBusiness Schema - For local Nepal searches
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saurav Sitaula - Software Development",
    description: "Expert software development services — 7+ years delivering scalable React, Node.js, and full-stack web solutions",
    url: siteUrl,
    telephone: "",
    email: "sitaulasaurav@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      addressCountry: "NP",
      postalCode: "44600",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7172,
      longitude: 85.3240,
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    founder: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
