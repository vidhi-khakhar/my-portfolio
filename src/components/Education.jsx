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


// Custom Animated CSE Code Terminal Graphic, created by AI
function AnimatedCodeTerminal() {
  return (
    <div
      aria-hidden="true"
      className="relative w-64 shrink-0 mt-8"
      style={{ animation: 'code-bounce 3s ease-in-out infinite' }}
    >
      <div className="flex aspect-[7/4] flex-col rounded-xl bg-white p-4 shadow-lg shadow-black/30">
        {/* Title bar */}
        <div className="mb-4 flex items-center justify-between border-b border-[#e2e8f0] pb-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="font-mono text-[10px] text-[#64748b]">CSEStudent.cs</span>
        </div>

        {/* Code */}
        <div className="whitespace-nowrap font-mono text-xs leading-4 text-slate-900">
          <div>
            <span className="font-semibold text-violet-600">class</span>{' '}
            <span className="text-amber-600">CSEStudent</span> {'{'}
          </div>
          <div className="pl-4">
            <span className="text-cyan-700">string</span> status ={' '}
            <span className="font-semibold text-emerald-600">{'"learning"'}</span>;
          </div>
          <div>{'}'}</div>
        </div>

        {/* Terminal line, pinned to the bottom of the card */}
        <div className="mt-auto flex items-center gap-1.5 font-mono text-xs leading-4 text-slate-900">
          <span className="text-cyan-700">&gt;</span>
          <span>compiling</span>
          <span className="inline-block h-3 w-1.5 animate-pulse bg-cyan-500" />
        </div>
      </div>

      {/* Code icon badge */}
      <div className="absolute -bottom-3 -right-3 rounded-lg bg-cyan-400 p-2 text-slate-900 shadow-lg shadow-black/30">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
    </div>
  );
}

function InstitutionLogo({ src, title }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${title} logo`}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-white p-1.5 border border-slate-700 shrink-0 shadow-md"
      />
    );
  }
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-md">
      <span className="text-xl font-bold text-cyan-400">{title.charAt(0)}</span>
    </div>
  );
}

function Education() {
  return (
    <Section id="education">
      <div className="flex items-center justify-between gap-6 mb-4 sm:mb-2">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 whitespace-nowrap">
            <span className="text-cyan-400" aria-hidden="true">/</span> education
          </h2>
          <div className="flex-1 h-px bg-slate-700" aria-hidden="true" />
        </div>

        <div className="hidden sm:block">
          <AnimatedCodeTerminal />
        </div>
      </div>

      <div className="w-full">
        {educationData.map((entry, i) => (
          <div
            key={entry.title}
            className={`flex items-start gap-4 sm:gap-5 py-4 transition-all duration-700 ease-out ${
              i !== 0 ? 'border-t border-slate-800/80' : 'pt-2'
            }`}
          >
            <InstitutionLogo src={entry.logo} title={entry.title} />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-slate-100">{entry.title}</h3>
              <p className="text-cyan-400/90 text-sm md:text-base font-medium">{entry.subtitle}</p>
              <p className="text-xs font-mono text-slate-400 my-1">{entry.dates}</p>

              {entry.isHighSchool ? (
                <div className="space-y-1 mt-1.5 text-slate-300 text-sm md:text-base leading-snug">
                  <p className="font-medium text-slate-200">{entry.diplomaText}</p>
                  <p>{entry.hlSubjects}</p>
                  <p>{entry.slSubjects}</p>
                </div>
              ) : (
                <div className="space-y-1 mt-1.5 text-slate-300 text-sm md:text-base leading-snug max-w-4xl">
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