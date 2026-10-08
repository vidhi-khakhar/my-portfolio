import { typeLabel } from '../data/workData';

function WorkRow({ entry }) {
  return (
    <div className="grid grid-cols-[96px_1fr] gap-4 border-t border-slate-700 py-5 sm:grid-cols-[170px_1fr] sm:gap-6">
      <div className="text-xs">
        <p className="font-medium text-slate-300">{entry.period}</p>
        <p className="mt-1 text-slate-400">{typeLabel[entry.type]}</p>
      </div>

      <div>
        <h3 className="font-semibold text-white">{entry.title}</h3>
        <p className="mt-1 text-sm text-slate-300">{entry.subtitle ?? entry.summary}</p>
      </div>
    </div>
  );
}

export default WorkRow;