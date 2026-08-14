import { useState } from 'react';
import Section from './Section';

// Imports
import tudelftLogo from '../assets/tudelft-logo.png'; 
import tutoringLogo from '../assets/ib-logo.png'; 
import vattenfallLogo from '../assets/vattenfall-logo.png'; 

const workData = [
  {
    category: "technology",
    dates: "Aug 2025 – Nov 2025",
    title: "AI Intern",
    company: "Vattenfall",
    bullets: [
      "Evaluated how Retrieval-Augmented Generation (RAG) can increase efficiency in software development teams working on large, complex enterprise systems by mapping AI capabilities to real-world developer workflows.",
      "Designed a cloud-based RAG Model proof of concept using Microsoft Azure (AI Foundry, AI Search, Blob Storage, Copilot Studio, Power Automate) to act as an expert in a complex, regulated energy trading platform.",
      "Explored the integration of DevOps data to accelerate software troubleshooting and improve project planning insights for both engineering and business stakeholders in a regulated enterprise environment."
    ],
    skills: ["RAG", "Generative AI", "Microsoft Azure", "Copilot Studio", "Power Automate", "DevOps"],
    logo: vattenfallLogo,
  },
  {
    category: "teaching",
    dates: "Sep 2026 – July 2027",
    title: "Teaching Assistant",
    company: "Delft University of Technology",
    description: "Work collaboratively with lecturers to provide academic support across multiple courses through lab guidance, assignment feedback, and exam grading.",
    bullets: [
      "Introduction to Programming: Object-Oriented Programming in Java",
      "Computer Organization: Assembly x86-64, Logic Gates, Binary Representation & Operations",
      "Reasoning and Logic: Propositional & Predicate Logic, Mathematical Proofs, and Puzzles"
    ],
    skills: ["Java", "Assembly x86-64", "Logic", "Teaching", "Grading"],
    logo: tudelftLogo,
  },
  {
    category: "teaching",
    dates: "Sep 2026 – July 2027",
    title: "Student Mentor",
    company: "Delft University of Technology",
    description: "Guided a cohort of first-year students through their transition to university life by facilitating weekly academic and social support meetings. Advised on study strategies, university navigation, and community building.",
    bullets: [],
    skills: ["Leadership", "Mentorship", "Community Building", "Peer Engagement"],
    logo: tudelftLogo,
  },
  {
    category: "teaching",
    dates: "2024 – 2025",
    title: "Tutor",
    company: "Private Tutoring",
    description: "Tutored students in the two-year pre-university IB Diploma Program, providing instruction through breaking down complex concepts in Mathematics and Physics to enhance understanding and performance.",
    bullets: [],
    skills: ["Mathematics", "Physics", "IBDP", "1-on-1 Instruction"],
    logo: tutoringLogo,
  },
];

function CompanyLogo({ src, title }) {
  if (src) {
    return (
      <img
        src={src}
        alt={title}
        className="w-16 h-16 rounded-2xl object-contain bg-white p-2 border border-slate-700 shrink-0 shadow-md"
      />
    );
  }
  return (
    <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-md">
      <span className="text-2xl font-bold text-cyan-400">{title.charAt(0)}</span>
    </div>
  );
}

function Work() {
  const [activeTab, setActiveTab] = useState('technology');
  
  // Track if user has clicked the Teaching tab yet
  const [hasClickedTeaching, setHasClickedTeaching] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'teaching') {
      setHasClickedTeaching(true);
    }
  };

  const filteredWork = workData.filter(entry => entry.category === activeTab);

  return (
    <Section id="work">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-4xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-cyan-400">/</span> work experience
        </h2>
        <div className="flex-1 h-px bg-slate-700" />
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-3 mb-10 items-center">
        {/* Technology Tab */}
        <button
          onClick={() => handleTabChange('technology')}
          className={`px-4 py-2 text-sm font-mono rounded-lg transition-all duration-200 border ${
            activeTab === 'technology'
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-400/50 font-semibold'
              : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Technology & Engineering
        </button>

        {/* Teaching & Mentorship Tab with One-Time White Hint */}
        <div className="relative">
          <button
            onClick={() => handleTabChange('teaching')}
            className={`px-4 py-2 text-sm font-mono rounded-lg transition-all duration-200 border ${
              activeTab === 'teaching'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-400/50 font-semibold'
                : 'bg-slate-800/40 text-slate-300 border-slate-700/60 hover:text-white hover:border-slate-500'
            }`}
          >
            Teaching & Mentorship
          </button>

          {/* One-time "click me" hint arrow in bright white */}
          {!hasClickedTeaching && activeTab !== 'teaching' && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 flex items-center gap-1.5 text-white/90 text-xs font-mono pointer-events-none whitespace-nowrap animate-pulse drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              <span className="text-sm font-bold">←</span>
              <span>click me</span>
            </div>
          )}
        </div>
      </div>

      {/* Aligned List */}
      <div className="w-full">
        {filteredWork.map((entry, i) => (
          <div
            key={`${entry.company}-${entry.title}`}
            className={`flex items-start gap-6 py-8 transition-all duration-700 ease-out animate-in fade-in slide-in-from-left-8 fill-mode-backwards ${
              i !== 0 ? 'border-t border-slate-800/80' : ''
            }`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <CompanyLogo src={entry.logo} title={entry.company} />
            
            <div className="flex-1">
              {/* Role & Company */}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
                {entry.title} <span className="text-cyan-400/90 font-medium">@ {entry.company}</span>
              </h3>
              
              {/* Dates */}
              <p className="text-xs font-mono text-slate-400 my-1.5">{entry.dates}</p>

              {/* Description (Renders conditionally if present) */}
              {entry.description && (
                <p className="text-slate-300 text-base leading-relaxed mb-3 max-w-4xl">
                  {entry.description}
                </p>
              )}

              {/* Course / Project Bullets */}
              {entry.bullets.length > 0 && (
                <ul className="list-disc list-outside ml-5 text-base text-slate-300 space-y-1.5 mb-4 max-w-4xl">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="text-slate-400">
                      <span className="text-slate-300 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Work;