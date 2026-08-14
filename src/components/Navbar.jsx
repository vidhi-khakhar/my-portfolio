import { useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
];

const socialLinks = [
  {
    label: 'Email Vidhi Khakhar',
    href: 'mailto:vidhi.inquiries@gmail.com',
    icon: MailIcon,
    isExternal: false,
  },
  {
    label: 'Vidhi Khakhar GitHub Profile',
    href: 'https://github.com/vidhi-khakhar',
    icon: GithubIcon,
    isExternal: true,
  },
  {
    label: 'Vidhi Khakhar LinkedIn Profile',
    href: 'https://www.linkedin.com/in/vkhakhar/',
    icon: LinkedinIcon,
    isExternal: true,
  },
];

// SVG Icon Components created by AI. 
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 6 9-6" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.41 6.84 9.77.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5C19.14 20.66 22 16.81 22 12.26 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {}
        <a 
          href="#home" 
          className="font-bold text-lg text-slate-100 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md"
        >
          Vidhi Khakhar
        </a>

        {}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {}
        <div className="hidden md:flex items-center gap-5 text-slate-300">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-100 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="text-2xl font-mono leading-none" aria-hidden="true">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="md:hidden bg-slate-900 border-b border-slate-800 flex flex-col items-center py-6 gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col items-center gap-3 w-full">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full text-center">
                <a
                  href={`#${link.id}`}
                  className="block py-2 text-slate-300 hover:text-cyan-400 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 pt-3 text-slate-300 border-t border-slate-800 w-1/2 justify-center">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;