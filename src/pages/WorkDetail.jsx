import { Link, useParams } from 'react-router-dom';
import { workData } from '../data/workData';

function WorkDetail() {
  const { slug } = useParams();
  const entry = workData.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <main className="min-h-screen px-8 pt-28 pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-slate-300">That page does not exist.</p>
          <Link to="/work" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300">
            Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-8 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <Link to="/work" className="text-sm text-slate-300 hover:text-cyan-300">
          ← Back to work
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-white sm:text-5xl">{entry.title}</h1>
        {entry.subtitle && <p className="mt-2 text-xl text-slate-200">{entry.subtitle}</p>}
        <p className="mt-4 text-slate-300">{entry.period}</p>
      </div>
    </main>
  );
}

export default WorkDetail;