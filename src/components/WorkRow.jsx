import { Link } from 'react-router-dom';

const ARROW = '\u2197\uFE0E';

function WorkRow({ entry }) {
  return (
    <Link
      to={`/work/${entry.slug}`}
      className="group grid grid-cols-[96px_1fr_auto] gap-4 border-t border-slate-700 py-5 sm:grid-cols-[170px_1fr_auto] sm:gap-6"
    >
      <p className="pt-1 text-xs font-medium text-slate-300 transition-transform duration-200 group-hover:translate-x-2">
        {entry.period}
      </p>

      <div className="transition-transform duration-200 group-hover:translate-x-2">
        <h3 className="font-semibold text-white">{entry.title}</h3>
        <p className="mt-1 text-sm text-slate-300">{entry.subtitle ?? entry.summary}</p>
      </div>

      <span
        aria-hidden="true"
        className="text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
      >
        {ARROW}
      </span>
    </Link>
  );
}

export default WorkRow;