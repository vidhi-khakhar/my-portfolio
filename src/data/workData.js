export const typeLabel = {
  project: 'Project',
  experience: 'Experience',
  education: 'Education',
};

export const workData = [
  // PROJECTS (newest first)
  {
    slug: 'portfolio-website',
    type: 'project',
    title: 'Personal portfolio website',
    summary: 'This site: a React portfolio with hand-built animations, deployed on Vercel.',
    period: 'June 2026 - Present',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    overview:
      'A portfolio built from scratch with React, Vite, and Tailwind CSS. The typewriter intro, the fractal tree, and the skills carousel are all written by hand, without animation libraries.',
    bullets: [
      'Built responsive, mobile-first layouts for every section.',
      'Set up continuous deployment on Vercel, an XML sitemap, and Google Search Console.',
      'Added client-side routing so the CV, projects, and experience have their own pages.',
    ],
    link: 'https://github.com/vidhi-khakhar/my-portfolio',
    related: [],
  },
  {
    slug: 'vraag',
    type: 'project',
    title: 'VRAAG: Enterprise Trading RAG Platform',
    summary: "A proof-of-concept RAG assistant for Vattenfall's energy trading platform.",
    period: 'Aug 2025 – Nov 2025',
    technologies: ['Azure AI Foundry', 'Azure AI Search', 'Copilot Studio', 'Power Automate', 'RAG'],
    overview:
      "A proof-of-concept RAG solution for Vattenfall's energy trading platform (VHP). It combines vector-indexed source code, Azure DevOps sprint tracking, and automated documentation flows under the Vattenfall AI Platform (VAIP).",
    bullets: [
      'Built a cloud-based proof of concept that connects vector-indexed source code with Azure DevOps data.',
      'Evaluated the system on representative developer workflows and documented its design and limitations.',
      'Delivered the proof of concept together with design, build, and testing documentation.',
    ],
    link: null,
    related: ['vattenfall'],
  },
  {
    slug: 'foodpal',
    type: 'project',
    title: 'FoodPal: Recipe Management Application',
    summary: 'A full-stack Java desktop app for organizing and sharing recipes.',
    period: 'Dec 2025 - Jan 2026',
    technologies: ['Java', 'JavaFX', 'Spring Boot', 'REST API', 'Maven'],
    overview:
      'A full-stack Java desktop application to organize and share recipes. Users collaborate through a distributed server built with Spring Boot, while personal favorites and shopping lists are managed locally in a JavaFX client.',
    bullets: [
      'Distributed server built with Spring Boot and a REST API.',
      'JavaFX client that keeps personal favorites and shopping lists locally.',
    ],
    link: null,
    related: [],
  },
  {
    slug: 'echo-cat',
    type: 'project',
    title: 'Echo Cat: An x86 Assembly Game',
    summary: 'A Chrome Dinosaur spinoff written in x86-64 Assembly.',
    period: 'Sep 2025 – Nov 2025',
    technologies: ['Assembly x86-64', 'raylib', 'Linux'],
    overview:
      'An Assembly x86-64 spinoff of the Chrome Dinosaur game, created for the CSE1400 Computer Organization course at TU Delft together with a classmate.',
    bullets: [
      'Implemented the game in x86-64 Assembly, using the raylib graphics library.',
      'Developed and run on Linux as part of the Computer Organization course.',
    ],
    link: null,
    related: ['tu-delft'],
  },

  // EXPERIENCE (newest first)
    {
    slug: 'tu-delft-ta-mentor',
    type: 'experience',
    title: 'TU Delft',
    subtitle: 'Teaching Assistant and Student Mentor',
    summary: 'Teaching computer science and mentoring first-year students, helping them build rigorous problem-solving skills and settle into university life.',
    period: 'Aug 2026 – Present',
    technologies: ['Teaching', 'Communication', 'Mentorship', 'Community building'],
    overview: null,
    sections: [
      {
        heading: 'Teaching Assistant',
        text: 'As a teaching assistant for multiple courses, I support students academically by answering questions on the course material, guiding lab sessions, giving assignment feedback, and grading coursework and exams.',
        bullets: [
          'Identify misconceptions, ask targeted questions, and turn complex concepts into clear explanations.',
          'Answer technical and non-technical questions, help with debugging, and guide them to their own solutions',
        ],
        courses: [
          {
            name: 'Computer Organization',
            topics: 'Assembly x86-64, logic gates, binary representation and operations',
          },
          {
            name: 'Introduction to Programming',
            topics: 'Object-oriented programming in Java',
          },
          {
            name: 'Reasoning and Logic',
            topics: 'Propositional and predicate logic, mathematical proofs, and puzzles',
          },
        ],
      },
      {
        heading: 'Student Mentor',
        text: 'I guided a cohort of 23 first-year students through their transition to university life with weekly academic and supportive meetings, advising on study strategies, navigating the university, and building community.',
        bullets: [
          'Contributed to an inclusive learning environment and fostered bonding within the cohort.',
          'Taught students about university matters such as study techniques and anti-fraud.',
        ],
      },
    ],
    bullets: [],
    link: null,
    related: ['tu-delft'],
  },
      {
    slug: 'vattenfall',
    type: 'experience',
    title: 'Vattenfall',
    subtitle: 'AI Intern',
    summary: 'Researched and prototyped a RAG assistant for a regulated energy-trading platform.',
    period: 'Aug 2025 – Nov 2025',
    technologies: ['Azure', 'AI Foundry', 'AI Search', 'Blob Storage', 'Copilot Studio', 'Power Automate', 'RAG'],
    overviewHeading: 'Assignment',
    overview:
      "Vattenfall's energy trading platform is a large Java system that has been in development for over a decade, passing through rotating developer teams. This history makes the codebase slow to learn, for new developers and stakeholders alike. The assignment was to use Retrieval-Augmented Generation (RAG) on Microsoft Azure to answer questions about the platform in plain business language, with answers showing references to the actual code and documentation.",
    bullets: [
      'Analyzed developer workflows on a regulated energy-trading platform with a 1M+ line codebase across 40+ folders, where 35,000+ lines were undocumented and 200+ significant changes landed every month since 2009.',
      'Researched RAG architectures and Azure AI services, then built a cloud-based proof of concept (Microsoft Azure, AI Foundry, AI Search, Blob Storage, Copilot Studio, Power Automate) integrating vector-indexed source code with Azure DevOps data.',
      'Worked with Data Privacy and Security Officers to meet governance requirements.',
      'Evaluated the system on representative developer workflows and delivered the PoC with Design, Build and Test documentation.',
    ],
    linkedinPost: {
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7406607311126941696?collapsed=1',
      height: 631,
      scale: 0.75,
    },
    related: ['vraag'],
  },
    {
    slug: 'tutor',
    type: 'experience',
    title: 'Private Tutoring',
    subtitle: 'IB Mathematics and Physics Tutor',
    summary: 'Tutored IB Diploma students one-on-one in Mathematics and Physics, turning difficult topics into clear, step-by-step understanding.',
    period: '2024 – 2025',
    technologies: ['Mathematics', 'Physics', 'IB Diploma', 'One-on-one teaching', 'Communication'],
    overview:
      'I tutored students one-on-one through the two-year, pre-university International Baccalaureate (IB) Diploma Programme, helping them build a solid understanding of Mathematics and Physics.',
    bullets: [
      'Tutored IB Diploma students one-on-one in Mathematics and Physics, adapting explanations to each student.',
      'Broke complex concepts down into clear steps to improve understanding and performance.',
      'Drew on my own IB Diploma coursework, including Higher Level Mathematics: Analysis & Approaches and Standard Level Physics, to explain the material from a student\'s point of view.',
    ],
    link: null,
    related: ['ish'],
  },

  // EDUCATION
  {
    slug: 'tu-delft',
    type: 'education',
    title: 'Delft University of Technology',
    subtitle: 'BSc Computer Science and Engineering',
    summary: 'Focused on algorithms, machine learning, and large-scale data systems.',
    period: '2024 – 2027',
    technologies: ['Algorithms and Data Structures', 'Machine Learning', 'Software Engineering Methods', 'Information and Data Management'],
    overview: null,
    bullets: [
      'Teaching assistant and student mentor at the university (see Experience).',
    ],
    link: null,
    related: ['tu-delft-ta-mentor', 'echo-cat'],
  },
  {
    slug: 'ish',
    type: 'education',
    title: 'International School of The Hague',
    subtitle: 'International Baccalaureate Diploma',
    summary: 'Graduated with an IB Diploma and a bilingual English and Dutch diploma.',
    period: '2009 – May 2024',
    technologies: ['HL Computer Science', 'HL Business Management', 'HL Mathematics: Analysis & Approaches'],
    overview: null,
    bullets: [
      'Bilingual Diploma in English and Dutch Language and Literature.',
      'Standard Level: Physics, English A Language & Literature, Dutch A Language & Literature.',
    ],
    link: null,
    related: [],
  },
  {
    slug: 'harvard',
    type: 'education',
    title: 'Harvard Business School',
    subtitle: 'Summer Programme: Sustainable Product Design and the Innovation Ecosystem',
    summary: 'A programme on how sustainable design creates competitive advantage through technology.',
    period: '2022 – 2023',
    technologies: ['Sustainable design', 'Innovation', 'AR/VR'],
    overview: null,
    bullets: [
      'Final grade: A (99/100).',
      'Built a business plan and presentation on industrial use cases for AR/VR technologies.',
    ],
    link: null,
    related: [],
  },
];