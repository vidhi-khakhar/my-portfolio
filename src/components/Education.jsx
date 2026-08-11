import Section from './Section';

// Import your images from the assets folder
import tudelftLogo from '../assets/tudelft-logo.png'; 
import ishLogo from '../assets/ish-logo.jpg';
import harvardLogo from '../assets/harvard-logo.jpg'; 

const educationData = [
  {
    dates: "2024 – 2027",
    title: "Delft University of Technology",
    subtitle: "Bachelor's degree, Computer Science and Engineering",
    details: "Skills: Java, JavaScript, and more.",
    logo: tudelftLogo,
  },
  {
    dates: "2009 – May 2024",
    title: "International School of The Hague",
    subtitle: "High School Diploma, International Baccalaureate (IBDP)",
    details: "HL: Computer Science, Business Management, Mathematics Analysis & Approaches. SL: Physics, English A Language & Literature, Dutch A Language & Literature.",
    logo: ishLogo,
  },
  {
    dates: "2022 – 2023",
    title: "Harvard Extension School",
    subtitle: "Sustainable Product Design and the Innovation Ecosystem",
    details: "Grade: A",
    logo: harvardLogo,
  },
];

function InstitutionLogo({ src, title }) {
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

function Education() {
  return (
    <Section id="education">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-cyan-400">/</span> education
        </h2>
        <div className="flex-1 h-px bg-slate-700" />
      </div>

      {/* Aligned List */}
      <div className="w-full">
        {educationData.map((entry, i) => (
          <div
            key={entry.title}
            className={`flex items-start gap-5 py-6 ${
              i !== 0 ? 'border-t border-slate-800/80' : ''
            }`}
          >
            <InstitutionLogo src={entry.logo} title={entry.title} />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-100">{entry.title}</h3>
              <p className="text-slate-300 text-sm font-medium">{entry.subtitle}</p>
              <p className="text-xs text-slate-500 my-1">{entry.dates}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{entry.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Education;