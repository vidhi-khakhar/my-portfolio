import echoCatScreenshot from '../assets/echo-cat.png';
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
    summary: 'This site: a React portfolio built with Vite and Tailwind CSS, deployed on Vercel.',
    period: '2026-Present',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'JavaScript', 'Vercel', 'Git', 'Vibe coding'],
    overview:
      'A multi-page portfolio built with React and Vite and styled with Tailwind CSS. React Router handles navigation between the homepage, the CV, and the work pages, and the site is deployed on Vercel from a GitHub repository. Animations and graphics are by Claude AI.',
    repoDescription: 'Source code for this portfolio: React, Vite, Tailwind CSS, and React Router. ',
    bullets: [
      'Built the interface as reusable React components, with state and effects for interactive features.',
      'Used React Router for client-side routing, with a Vercel rewrite rule so every page works when opened or refreshed directly.',
      'Stored projects, experience, and education in one data file, so the Work page list, filter tabs, and detail pages are all generated from it.',
      'Styled everything with Tailwind CSS using a shared colour theme and responsive, mobile-first layouts.',
      'Set up continuous deployment from GitHub to Vercel, so every push to the main branch publishes a new version over HTTPS.',
      'Added search engine basics: page titles and descriptions, Open Graph tags, an XML sitemap, and Google Search Console.',
    ],
    link: 'https://github.com/vidhi-khakhar/my-portfolio',
    related: [],
  },
       {
    slug: 'vraag',
    type: 'project',
    title: 'VRAAG: Enterprise Trading RAG Platform',
    summary: 'A proof-of-concept AI assistant that answers technical and product-planning questions about a large energy-trading platform.',
    period: 'Aug 2025 – Nov 2025',
    technologies: ['Azure AI Foundry', 'Azure AI Search', 'Blob Storage', 'Copilot Studio', 'Power Automate', 'Azure DevOps', 'Vector search', 'RAG'],
    overviewHeading: 'Overview',
    overview:
      'VRAAG is a proof-of-concept assistant built with Retrieval-Augmented Generation (RAG). It answers technical and non-technical questions by retrieving and combining information from internal documentation. It also uses Azure DevOps data, such as sprints, bugs, and tasks, so it can answer product-planning questions that source code alone cannot answer. An extension uses Power Automate to reduce manual documentation work. When it detects relevant code changes, it can trigger workflows that create or update wiki pages, so the documentation stays in sync with the code.',
    sections: [
      {
        heading: 'Example questions',
        bullets: [
          'Is Feature Y already implemented, or planned for an upcoming sprint?',
          'What are the next steps recommended by the development team?',
          'Which bugs were fixed in the last sprint?',
          'What open tasks are still unresolved for Component X?',
        ],
      },
    ],
    bullets: [
      'Researched RAG architectures and Azure AI services, then built a cloud-based proof of concept using Azure AI Foundry, AI Search, Blob Storage, Copilot Studio, and Power Automate.',
      'Integrated vector-indexed source code with Azure DevOps data (sprints, bugs, and tasks) to answer product-planning questions that code alone cannot answer.',
      'Designed a Power Automate extension that triggers wiki page updates when relevant code changes are detected.',
      'Worked with Data Privacy and Security Officers to meet governance requirements.',
      'Evaluated the system on representative developer workflows and delivered the proof of concept with design, build, and test documentation.',
    ],
    link: null,
    related: ['vattenfall'],
  },
    {
    slug: 'foodpal',
    type: 'project',
    title: 'FoodPal: Recipe Management Application',
    summary: 'A full-stack Java desktop app for creating, sharing, and exploring recipes.',
    period: 'Nov 2025 – Jan 2026',
    technologies: ['Java', 'JavaFX', 'Spring Boot', 'REST API', 'Maven', 'Agile teamwork'],
    overviewHeading: 'Overview',
    overview:
      'FoodPal is a full-stack Java desktop application for organizing and sharing recipes. A Spring Boot server lets users collaborate on shared recipes, while a JavaFX client keeps personal favorites and shopping lists on the user\'s own computer. It was built as a group project for a university software engineering course.',
    bullets: [
      'Built a client-server application with a Spring Boot server and a JavaFX desktop client.',
      'Added a nutritional overview with a pie chart of fat, carbohydrates, and protein, and a healthiness label (healthy, moderately healthy, or unhealthy) calculated from calories per 100 g.',
      'Implemented recipe search with alphabetical and date sorting, where multiple search terms must all match.',
      'Added a shopping list with a reminder that notifies the user at a chosen date and time.',
      'Supported live language switching between English, Dutch, Spanish, and Romanian.',
    ],
    link: 'https://github.com/vidhi-khakhar/recipe-management-app',
    related: [],
  },
    {
    slug: 'echo-cat',
    type: 'project',
    title: 'Echo Cat: An x86 Assembly Game',
    summary: 'A Chrome Dinosaur spin-off written in x86-64 Assembly, with graphics and audio from the raylib library.',
    period: 'Sep 2025 – Nov 2025',
    technologies: ['Assembly x86-64', 'C', 'raylib', 'Linux', 'GCC'],
    overviewHeading: 'Overview',
    overview:
      'Echo Cat is a spin-off of the Chrome Dinosaur game, written in x86-64 Assembly for the Computer Organization course at TU Delft and built together with a classmate. Graphics and audio come from the raylib C library, called through small helper functions. The course staff approved this in advance. The game runs on Linux, and Windows users can run it through WSL. Press Space to start and jump, and R to restart.',
    repoDescription: 'Source code and build instructions for Echo Cat: x86-64 Assembly with raylib.',
    images: [
      {
        src: echoCatScreenshot,
        alt: 'Screenshot of Echo Cat gameplay',
        caption: 'Echo Cat gameplay',
      },
    ],
    bullets: [
      'Implemented the Chrome Dinosaur game in x86-64 Assembly for the Computer Organization course.',
      'Used the raylib C library through helper functions to draw the visuals and play audio, after getting approval from the course staff.',
      'Built and ran the game on Linux with GCC, and wrote installation and run instructions for other players.',
    ],
    link: 'https://github.com/soulara28/EchoCat',
    related: ['tu-delft', 'tu-delft-ta-mentor'],
  },
    {
    slug: 'netnote',
    type: 'project',
    title: 'NetNote: Collaborative Markdown Notes',
    summary: 'A collaborative Markdown note-taking app built by a four-person Agile team in Java, Spring Boot, and JavaFX.',
    period: 'Nov 2025 – Jan 2026',
    technologies: ['Java 21', 'Spring Boot', 'JavaFX', 'REST API', 'WebSockets', 'Maven', 'Agile teamwork'],
    overviewHeading: 'Overview',
    overview:
      'NetNote is a collaborative note-taking app where notes are written in Markdown and shown as formatted text. A Spring Boot server stores the notes and a JavaFX desktop client edits them, with real-time synchronisation between users. It was built by a four-person Agile team for a university software engineering course.',
    bullets: [
      'Built a client-server application with a Spring Boot server and a JavaFX desktop client, connected through REST APIs and WebSockets.',
      'Implemented live Markdown rendering, note search, and embedded files that show their type and size.',
      'Added multi-collection support, so collections can be stored on and opened from different servers on the same network.',
      'Implemented undo and redo for creating, deleting, and moving notes, plus keyboard shortcuts for common actions.',
      'Supported live language switching between English, Dutch, Romanian, and Polish, and custom stylesheets for the rendered Markdown.',
      'Worked in weekly sprints with a four-person team.',
    ],
    link: 'https://github.com/vidhi-khakhar/NetNotes',
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
    subtitle: 'Artificial Intelligence (AI) Intern',
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
    subtitle: 'International Baccalaureate Mathematics and Physics Tutor',
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
    summary: 'A computer science degree focused on algorithms, machine learning, and large-scale data systems, combined with project, teaching, and industry work.',
    period: '2024 – 2028 (expected)',
    technologies: [
      'Algorithms and Data Structures',
      'Object-Oriented Programming',
      'Machine Learning',
      'Big Data Processing',
      'Software Engineering Methods',
      'Probability and Statistics',
    ],
    overviewHeading: 'Overview',
    overview:
      'I am studying for a BSc in Computer Science and Engineering at TU Delft. My coursework covers algorithms and data structures, object-oriented programming, machine learning, and big data processing with Spark and Flink. I am especially interested in AI and large-scale data systems, and in the engineering and evaluation methods that make AI systems reliable and secure in production.',
    sections: [
      {
        heading: 'Alongside my degree',
        text: 'I apply what I learn outside the lecture hall.',
        bullets: [
          'Worked as an AI intern at Vattenfall, where I built a proof-of-concept RAG assistant on Microsoft Azure.',
          'Support first-year students as a teaching assistant and student mentor at TU Delft.',
        ],
      },
      {
        heading: 'What I am looking for',
        text: 'I am looking for internship and research opportunities in AI, machine learning, and data systems, where I can work on real problems and keep learning.',
      },
    ],
    bullets: [],
    link: null,
    related: ['vattenfall', 'tu-delft-ta-mentor', 'netnote', 'foodpal', 'echo-cat'],
  },
      {
    slug: 'ish',
    type: 'education',
    title: 'International School of The Hague',
    subtitle: 'International Baccalaureate Diploma',
    summary: 'Completed the IB Diploma with a bilingual diploma in English and Dutch, alongside engineering, leadership, and sport.',
    period: '2009 – May 2024',
    technologies: [
      'HL Computer Science',
      'HL Business Management',
      'HL Mathematics: Analysis & Approaches',
      'SL Physics',
      'SL English A',
      'SL Dutch A',
    ],
    overviewHeading: 'Overview',
    overview:
      'I completed the International Baccalaureate Diploma Programme (IB DP) at the International School of The Hague. The IB DP is a two-year programme built around six academic subjects and a common core. Each subject is assessed in several ways, such as written exams, oral assessments, lab work, essays, and independent research projects. The core has three parts: Theory of Knowledge (TOK), an Extended Essay (EE), and Creativity, Activity, Service (CAS).',
    sections: [
      {
        heading: 'Subjects',
        bullets: [
          'Higher Level: Computer Science, Business Management, and Mathematics: Analysis & Approaches.',
          'Standard Level: Physics, English A Language & Literature, and Dutch A Language & Literature.',
          'Core: Theory of Knowledge, Extended Essay, and Creativity, Activity, Service.',
        ],
      },
      {
        heading: 'Extracurriculars',
        bullets: [
          'Silverbacks Engineering: Head of Finance and engineer for a team building a battery-powered eco car for Shell Eco-marathon and Greenpower Benelux. We learnt soldering, 3D modelling, and mechanical engineering for sustainability.',
          'Badminton: Captain of the school\'s first competitive badminton team, which travelled to Lugano for the ESC and won first place. I also won the Coaches Choice award.',
          'Global Issues Network (GIN): Worked on the UN Sustainable Development Goals and hosted an event for 200+ students from schools across the country, with workshops on important global issues.',
          'Gender and Sexuality Alliance (GSA): Planned many pride and diversity events, in support of women\'s rights and LGBTQ rights.',
          'Model United Nations: Took part in 10+ Model United Nations events, learning how to write constructive mock resolutions and communicate effectively.',
        ],
      },
    ],
    bullets: [
      'Graduated with a bilingual diploma in English and Dutch.',
      'Received an award for an outstanding Theory of Knowledge essay.',
    ],
    link: null,
    related: ['tutor'],
  },
    {
    slug: 'harvard',
    type: 'education',
    title: 'Harvard Summer School',
    subtitle: 'Sustainable Product Design and the Innovation Ecosystem',
    summary: 'A Harvard Summer School Program (HSSP) course on designing innovative products with the least possible environmental impact.',
    period: '2022 – 2023',
    technologies: [
      'Sustainable design',
      'Product innovation',
      'Augmented reality',
      'Simulation modelling',
      'Programming',
    ],
    overviewHeading: 'Overview',
    overview:
      'In the Harvard Summer School Program (HSSP) course "Sustainable Product Design and the Innovation Ecosystem", I learned how to create innovative products with the least possible environmental impact. At the end of the course, I developed a product proposal for a sustainable innovation that could address a global issue. I named it IGNITE.',
    bullets: [
      'Final grade: A (99/100).',
      'Developed IGNITE, a proposal for a futuristic firework that gives customers the same experience as a real firework with zero emissions.',
      'Researched augmented reality, programming, simulation modelling, and computing devices to design the product.',
      'Presented the final proposal as a business plan as well as a recorded presentation.',
    ],
    link: null,
    related: ['ish'],
        video: {
      id: 'aNI1BVYrMZA',
      title: 'IGNITE final presentation',
      note: 'IGNITE is a fictional concept created for a school assignment. This presentation was made to demonstrate presentation skills.',

    },
  },
];