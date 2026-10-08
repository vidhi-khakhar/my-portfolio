import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FractalTree from './FractalTree';

const roles = [
  "BSc Computer Science and Engineering Student @ TU Delft",
  "Ex-AI Intern @ Vattenfall",
  "Teaching Assistant @ TU Delft",
];

const PAUSE_FULL = 2000;
const TYPE_SPEED = 65;
const DELETE_SPEED = 65;

function ArrowUpRight(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Home() {
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];
    let timeoutId;

    if (!isDeleting && roleText === currentRole) {
      // fully typed: pause, then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_FULL);
    } else if (isDeleting && roleText === '') {
      // fully deleted: move to next role, resume typing
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    } else {
      const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
      timeoutId = setTimeout(() => {
        setRoleText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [roleText, isDeleting, loopNum]);

  return (
    <section id="home" className="min-h-[70vh] flex items-center px-8 pt-4 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-12">
        <div className="w-full md:max-w-xl md:shrink-0">
          <p className="text-lg text-slate-400 font-mono">
            Hello, world! My name is
          </p>

          <h1 className="text-5xl font-bold text-slate-100 mt-2">
            Vidhi Khakhar
          </h1>

          <p className="text-lg text-slate-400 font-mono mt-2 min-h-[1.75rem]">
            {roleText}
            <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#e2e8f0]"
            >
              My experience <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-cyan-300 hover:underline"
            >
              View CV <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="hidden md:block pointer-events-none -translate-y-16">
          <FractalTree width={650} height={780} maxDepth={10} />
        </div>
      </div>
    </section>
  );
}

export default Home;