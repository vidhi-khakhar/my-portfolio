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
      "Evaluated how Retrieval-Augmented Generation (RAG) can increase efficiency in software development teams working on large, complex enterprise systems by mapping AI capabilities to real-world developer workflows.", // Added missing comma here
      "Designed a cloud-based RAG Model proof of concept using Microsoft Azure (AI Foundry, AI Search, Blob Storage, Copilot Studio, Power Automate) to act as an expert in a complex, regulated energy trading platform.",
      "Explored the integration of DevOps data to accelerate software troubleshooting and improve project planning insights for both engineering and business stakeholders in a regulated enterprise environment."
    ],
    skills: ["RAG", "Generative AI", "Microsoft Azure", "Copilot Studio", "Power Automate", "Workflow Optimization"],
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
        className="w-12 h-12 rounded-xl object-contain bg-white p-1.5 border border-slate-700 shrink-0"
      />
    );
  }
  return (
    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
      <span className="text-lg font-bold text-cyan-400">{title.charAt(0)}</span>
    </div>
  );
}

function Work() {
  const [activeTab, setActiveTab] = useState('technology');

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
      <div className="flex gap-3 mb-10">
        <button
          onClick={() => setActiveTab('technology')}
          className={`px-4 py-2 text-sm font-mono rounded-lg transition-all duration-200 border ${
            activeTab === 'technology'
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-400/50 font-semibold'
              : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Technology & Engineering
        </button>
        <button
          onClick={() => setActiveTab('teaching')}
          className={`px-4 py-2 text-sm font-mono rounded-lg transition-all duration-200 border ${
            activeTab === 'teaching'
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-400/50 font-semibold'
              : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Teaching & Mentorship
        </button>
      </div>

      {/* Aligned List */}
      <div className="w-full">
        {filteredWork.map((entry, i) => (
          <div
            key={`${entry.company}-${entry.title}`}
            className={`flex items-start gap-5 py-6 ${
              i !== 0 ? 'border-t border-slate-800/80' : ''
            }`}
          >
            <CompanyLogo src={entry.logo} title={entry.company} />
            
            <div className="flex-1">
              {/* Role & Company */}
              <h3 className="text-lg font-semibold text-slate-100">
                {entry.title} <span className="text-cyan-400 font-normal">@ {entry.company}</span>
              </h3>
              
              {/* Dates */}
              <p className="text-xs text-slate-500 my-1">{entry.dates}</p>

              {/* Description (Renders conditionally if present) */}
              {entry.description && (
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {entry.description}
                </p>
              )}

              {/* Course / Project Bullets */}
              {entry.bullets.length > 0 && (
                <ul className="list-disc list-outside ml-4 text-sm text-slate-300 space-y-1.5 mb-3">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="text-slate-400">
                      <span className="text-slate-300 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60"
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