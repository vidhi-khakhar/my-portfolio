import { Link } from 'react-router-dom';

// \uFE0E forces plain-text presentation, so devices never swap the arrow for a colourful emoji
const ARROW = '\u2197\uFE0E';

const footerLinks = [
  { label: 'Email', href: 'mailto:vidhi.inquiries@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vkhakhar/', external: true },
  { label: 'GitHub', href: 'https://github.com/vidhi-khakhar', external: true },
  { label: 'CV', to: '/cv' },
];

const linkClass =
  'inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-cyan-400';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 px-8 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-400">&copy; {year} Vidhi Khakhar</p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link to={item.to} className={linkClass}>
                  {item.label} <span aria-hidden="true">{ARROW}</span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={linkClass}
                >
                  {item.label} <span aria-hidden="true">{ARROW}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;