import { useRef, useEffect, useState } from 'react';

// SVG Icons created by AI.
function GitIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="17" cy="10" r="2.2" />
      <path d="M6 8.2V15.8" />
      <path d="M6 6c6 0 11 0.5 11 4" />
    </svg>
  );
}

function NodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="M8 12h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

function JavaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M7 16c-1.5 1 0 2.5 3 2.8 4 0.4 8-0.3 8-2 0-1-1.3-1.6-2.3-1.9" />
      <path d="M9 3c-2 2 3 3.5 1 6-1.2 1.4-1.2 2.6 0 4" />
      <ellipse cx="12" cy="18.5" rx="6.5" ry="1.6" />
    </svg>
  );
}

function PythonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c-3 0-3.4 1.3-3.4 3v2h6.8v1H6.2C4.5 8 3 9 3 12s1.5 4 3.2 4h1.5v-2.3c0-2 1.7-3.7 3.9-3.7h4.2c1.6 0 2.9-1.3 2.9-3V5c0-1.7-.9-3-4.7-3H12z" />
      <path d="M12 22c3 0 3.4-1.3 3.4-3v-2H8.6v-1h9.2c1.7 0 3.2-1 3.2-4s-1.5-4-3.2-4h-1.5v2.3c0 2-1.7 3.7-3.9 3.7H8.2c-1.6 0-2.9 1.3-2.9 3v3c0 1.7.9 3 4.7 3H12z" />
    </svg>
  );
}

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function HtmlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 4 5 4l1.2 14L12 20l5.8-2L19 4H8Z" />
      <path d="M8.5 8h7l-.3 3H9l.2 2.3 2.8.8 2.8-.8.2-2" />
    </svg>
  );
}

function CssIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 4h14l-1.2 14L12 20l-5.8-2L5 4Z" />
      <path d="M15.5 8h-7l.3 3h6.4l-.3 3.3-2.9.8-2.8-.8-.2-1.6" />
    </svg>
  );
}

function SqlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" />
      <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" />
    </svg>
  );
}

function AssemblyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  );
}

function ChevronIcon({ direction, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  );
}

const baseSkills = [
  { name: 'Java', Icon: JavaIcon, color: '#f89820' },
  { name: 'Python', Icon: PythonIcon, color: '#3776ab' },
  { name: 'Git', Icon: GitIcon, color: '#f05033' },
  { name: 'JavaScript', special: 'js' },
  { name: 'HTML', Icon: HtmlIcon, color: '#e34f26' },
  { name: 'CSS', Icon: CssIcon, color: '#1572b6' },
  { name: 'Node.js', Icon: NodeIcon, color: '#5fa04e' },
  { name: 'React', Icon: ReactIcon, color: '#61dafb' },
  { name: 'SQL', Icon: SqlIcon, color: '#00758f' },
  { name: 'Assembly x86-64', Icon: AssemblyIcon, color: '#6b21a8' }
];

function SkillCard({ skill }) {
  if (skill.special === 'js') {
    return (
      <div className="bg-white border border-slate-200/80 rounded-xl flex items-center justify-center gap-3.5 h-20 sm:h-24 w-full select-none shadow-md px-4">
        <div className="w-8 h-8 rounded bg-[#f7df1e] flex items-center justify-center font-black text-slate-900 text-sm shrink-0">
          JS
        </div>
        <span className="text-base sm:text-lg font-bold text-slate-800 truncate">JavaScript</span>
      </div>
    );
  }
  const { name, Icon, color } = skill;
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl flex items-center justify-center gap-3.5 h-20 sm:h-24 w-full select-none shadow-md px-4">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" style={{ color }} />
      <span className="text-base sm:text-lg font-bold text-slate-800 truncate">{name}</span>
    </div>
  );
}

function SkillsCarousel() {
  const total = baseSkills.length;
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualAnimating, setIsManualAnimating] = useState(false);

  const extendedSkills = [...baseSkills, ...baseSkills, ...baseSkills];

  const posRef = useRef(total * (100 / itemsToShow));
  const trackRef = useRef(null);
  const requestRef = useRef(null);
  const touchStartRef = useRef(0);

  const SPEED = 0.035;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setItemsToShow(4);
      else if (window.innerWidth >= 768) setItemsToShow(3);
      else setItemsToShow(2);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const itemWidth = 100 / itemsToShow;
    const singleSetWidth = total * itemWidth;

    const animate = () => {
      if (!isHovered && !isManualAnimating) {
        posRef.current += SPEED;

        if (posRef.current >= singleSetWidth * 2) {
          posRef.current -= singleSetWidth;
        } else if (posRef.current < singleSetWidth) {
          posRef.current += singleSetWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}%)`;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered, isManualAnimating, itemsToShow, total]);

  // Step movement with manual animation lock
  const moveBy = (direction) => {
    if (isManualAnimating) return;

    setIsManualAnimating(true);
    const itemWidth = 100 / itemsToShow;
    const singleSetWidth = total * itemWidth;

    const currentCardIndex = direction > 0 
      ? Math.floor(posRef.current / itemWidth) 
      : Math.ceil(posRef.current / itemWidth);

    const targetIndex = currentCardIndex + direction;
    const targetPos = targetIndex * itemWidth;

    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)';
      trackRef.current.style.transform = `translateX(-${targetPos}%)`;
    }

    setTimeout(() => {
      posRef.current = targetPos;

      if (posRef.current >= singleSetWidth * 2) {
        posRef.current -= singleSetWidth;
      } else if (posRef.current < singleSetWidth) {
        posRef.current += singleSetWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-${posRef.current}%)`;
      }

      setIsManualAnimating(false);
    }, 300);
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsHovered(true);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    if (Math.abs(diff) > 40) {
      moveBy(diff > 0 ? 1 : -1);
    }
    setIsHovered(false);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-slate-100 mb-4">Skills:</h3>

      <div 
        className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 touch-pan-y"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={() => moveBy(-1)}
          disabled={isManualAnimating}
          aria-label="Previous skill"
          className="w-10 h-10 rounded-full bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 flex items-center justify-center shrink-0 transition-colors shadow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <ChevronIcon direction="left" className="w-5 h-5" />
        </button>

        {/* Carousel Window */}
        <div className="overflow-hidden flex-1 py-1">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${posRef.current}%)`,
            }}
          >
            {extendedSkills.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="px-2 shrink-0"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => moveBy(1)}
          disabled={isManualAnimating}
          aria-label="Next skill"
          className="w-10 h-10 rounded-full bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 flex items-center justify-center shrink-0 transition-colors shadow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <ChevronIcon direction="right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default SkillsCarousel;