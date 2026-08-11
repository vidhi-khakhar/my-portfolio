import { useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
];

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 6 9-6" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.41 6.84 9.77.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5C19.14 20.66 22 16.81 22 12.26 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 px-8 py-4 flex items-center shadow-sm">
      <div className="hidden md:flex items-center gap-10">
        <span className="font-bold text-lg text-slate-100">Vidhi Khakhar</span>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <span className="md:hidden font-bold text-lg text-slate-100">Vidhi Khakhar</span>

      <div className="hidden md:flex items-center gap-5 ml-auto text-slate-300">
        <a href="mailto:vidhi.inquiries@gmail.com" aria-label="Email" className="hover:text-cyan-400 transition-colors">
          <MailIcon className="w-5 h-5" />
        </a>
        <a href="https://github.com/vidhi-khakhar" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition-colors">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/vkhakhar/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>

      <button
        className="md:hidden text-2xl text-slate-100 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 flex flex-col items-center py-4 md:hidden gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="py-1 text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-6 pt-2 text-slate-300">
            <a href="mailto:vidhi.inquiries@gmail.com" aria-label="Email"><MailIcon className="w-5 h-5" /></a>
            <a href="https://github.com/vidhi-khakhar" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/vkhakhar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;