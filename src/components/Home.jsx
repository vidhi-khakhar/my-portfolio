import { Callback, useEffect, useState } from 'react';
import FractalTree from './FractalTree';

const roles = [
  "BSc Computer Science and Engineering Student @ TU Delft",
  "Ex-AI Intern @ Vattenfall",
  "Teaching Assistant @ TU Delft",
];

function Home() {
  const [greetingText, setGreetingText] = useState('');
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [phase, setPhase] = useState('greeting'); // greeting -> name -> rotating

  const greeting = "Hello, world! My name is";
  const name = "Vidhi Khakhar";
  const PAUSE_FULL = 2000;   // pause once a role is fully typed
  const TYPE_SPEED = 65;
  const DELETE_SPEED = 65;

  // Phase 1: type greeting
  useEffect(() => {
    let timeoutId;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setGreetingText(greeting.slice(0, i));
      if (i >= greeting.length) {
        clearInterval(timer);
        timeoutId = setTimeout(() => setPhase('name'), 300);
      }
    }, 40);
    return () => {
      clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Phase 2: type name, then hand off to rotating
  useEffect(() => {
    if (phase !== 'name') return;
    let timeoutId;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setNameText(name.slice(0, i));
      if (i >= name.length) {
        clearInterval(timer);
        timeoutId = setTimeout(() => setPhase('rotating'), 300);
      }
    }, 80);
    return () => {
      clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase]);

  // Phase 3: rotating type/delete loop through roles, forever
  useEffect(() => {
    if (phase !== 'rotating') return;

    const currentRole = roles[loopNum % roles.length];
    let timeoutId;

    if (!isDeleting && roleText === currentRole) {
      // fully typed — pause, then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_FULL);
    } else if (isDeleting && roleText === '') {
      // fully deleted — move to next role, resume typing
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
  }, [phase, roleText, isDeleting, loopNum]);

  return (
    <section id="home" className="min-h-[70vh] flex items-center px-8 pt-4 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-12">
        <div className="max-w-xl shrink-0">
          <p className="text-lg text-slate-400 font-mono min-h-[1.75rem]">
            {greetingText}
            {phase === 'greeting' && (
              <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
            )}
          </p>

          <h1 className="text-5xl font-bold text-slate-100 mt-2 min-h-[3.5rem]">
            {nameText}
            {phase === 'name' && (
              <span className="text-cyan-400 ml-1 animate-pulse">|</span>
            )}
          </h1>

          <p className="text-lg text-slate-400 font-mono mt-2 min-h-[1.75rem]">
            {phase === 'rotating' && roleText}
            {phase === 'rotating' && (
              <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
            )}
          </p>
        </div>

        <div className="hidden md:block pointer-events-none -translate-y-16">
          <FractalTree width={650} height={780} maxDepth={10} />
        </div>
      </div>
    </section>
  );
}

export default Home;