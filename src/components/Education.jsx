import Section from './Section';

import tudelftLogo from '../assets/tudelft-logo.png'; 
import ishLogo from '../assets/ish-logo.jpg';
import harvardLogo from '../assets/harvard-logo.png'; 

const educationData = [
  {
    dates: "2024 – 2027",
    title: "Delft University of Technology",
    subtitle: "Bachelor's degree, Computer Science and Engineering",
    details: "Skills: Machine Learning, Algorithms and Data Structures, Information and Data Management, Software Engineering Methods, and more.",
    logo: tudelftLogo,
  },
  {
    dates: "2009 – May 2024",
    title: "International School of The Hague",
    subtitle: "High School Diploma, International Baccalaureate (IBDP)",
    logo: ishLogo,
    isHighSchool: true,
    diplomaText: "Graduated with an IB DP Diploma and a Bilingual Diploma in English and Dutch Language and Literature.",
    hlSubjects: "HL: Computer Science, Business Management, Mathematics Analysis & Approaches.",
    slSubjects: "SL: Physics, English A Language & Literature, Dutch A Language & Literature.",
  },
  {
    dates: "2022 – 2023",
    title: "Harvard Business School - Summer Programme",
    subtitle: "Sustainable Product Design and the Innovation Ecosystem",
    diplomaText: "Final Grade: A.  99/100.",
    details: "Investigated how sustainable product design can give companies a competitive advantage, primarily through the use of technology. Created a business plan and presentation specifically on the industrial use cases for artificial and virtual reality (AR/VR) technologies.",
    logo: harvardLogo,
  },
];

// rounded square for icon
function InstitutionLogo({ src, title }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${title} logo`}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain bg-white p-2 border border-slate-700 shrink-0 shadow-md"
      />
    );
  }
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-md">
      <span className="text-2xl font-bold text-cyan-400">{title.charAt(0)}</span>
    </div>
  );
}

// Custom Animated CSE Code Terminal Graphic, created by AI
function AnimatedCodeTerminal() {
  return (
    <div 
      aria-hidden="true"
      className="relative w-48 sm:w-56 h-32 bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-sm shrink-0 mt-8 animate-[bounce_4s_infinite_ease-in-out]"
    >
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[10px] font-mono text-slate-500">cse_student.cs</span>
      </div>

      {/* Code Lines with Blinking Cursor */}
      <div className="space-y-1.5 font-mono text-xs">
        <div className="flex items-center gap-1">
          <span className="text-purple-400 font-semibold">class</span>
          <span className="text-amber-300">CSStudent</span>
          <span className="text-slate-400">{'{}'}</span>
        </div>
        <div className="flex items-center gap-1.5 pl-3">
          <span className="text-cyan-400">status:</span>
          <span className="text-emerald-400 font-semibold">'learning'</span>
        </div>
        <div className="flex items-center gap-1 pl-3">
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-300">compiling</span>
          <span className="w-1.5 h-3 bg-cyan-400 inline-block animate-pulse ml-0.5" />
        </div>
      </div>

      {}
      <div className="absolute -bottom-2 -right-2 bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 p-2 rounded-lg shadow-lg backdrop-blur-md">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
    </div>
  );
}

function Education() {
  return (
    <Section id="education">
      {}
      <div className="flex items-center justify-between gap-6 mb-8 sm:mb-4">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 whitespace-nowrap">
            <span className="text-cyan-400" aria-hidden="true">/</span> education
          </h2>
          <div className="flex-1 h-px bg-slate-700" aria-hidden="true" />
        </div>

        {}
        <div className="hidden sm:block">
          <AnimatedCodeTerminal />
        </div>
      </div>

      {}
      <div className="w-full">
        {educationData.map((entry, i) => (
          <div
            key={entry.title}
            className={`flex items-start gap-4 sm:gap-6 py-6 transition-all duration-700 ease-out ${
              i !== 0 ? 'border-t border-slate-800/80' : 'pt-2'
            }`}
          >
            <InstitutionLogo src={entry.logo} title={entry.title} />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-100">{entry.title}</h3>
              <p className="text-cyan-400/90 text-base font-medium mt-0.5">{entry.subtitle}</p>
              <p className="text-xs font-mono text-slate-400 my-1.5">{entry.dates}</p>

              {entry.isHighSchool ? (
                <div className="space-y-1.5 mt-2 text-slate-300 text-base leading-relaxed">
                  <p className="font-medium text-slate-200">{entry.diplomaText}</p>
                  <p>{entry.hlSubjects}</p>
                  <p>{entry.slSubjects}</p>
                </div>
              ) : (
                <div className="space-y-1.5 mt-2 text-slate-300 text-base leading-relaxed max-w-4xl">
                  {entry.diplomaText && (
                    <p className="font-semibold text-slate-100">{entry.diplomaText}</p>
                  )}
                  {entry.details && <p>{entry.details}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Education;