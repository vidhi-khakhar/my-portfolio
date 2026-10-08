import { useSearchParams } from 'react-router-dom';
import { workData } from '../data/workData';
import WorkRow from '../components/WorkRow';

const tabs = [
  {
    key: 'all',
    label: 'All work',
    title: 'Work',
    description: 'My Projects, Experience, and Education',
  },
  {
    key: 'project',
    label: 'Projects',
    title: 'Projects',
    description: 'Software Programming: Full-Stack',
  },
  {
    key: 'experience',
    label: 'Experience',
    title: 'Experience',
    description: 'Software Engineering Roles, Internships, and Research',
  },
  {
    key: 'education',
    label: 'Education',
    title: 'Education',
    description: 'Degrees, Programmes, and Coursework',
  },
];

const groups = [
  { type: 'project', title: 'Projects' },
  { type: 'experience', title: 'Experience' },
  { type: 'education', title: 'Education' },
];

function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('tab');
  const activeTab = tabs.find((t) => t.key === requested) ?? tabs[0];
  const active = activeTab.key;

  const selectTab = (key) => {
    setSearchParams(key === 'all' ? {} : { tab: key }, { replace: true });
  };

  const visibleGroups = groups.filter((g) => active === 'all' || g.type === active);

  return (
    <main className="min-h-screen px-8 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Projects, experience &amp; education
        </p>
        <h1 className="mt-3 text-5xl font-bold text-white">{activeTab.title}</h1>
        <p className="mt-3 text-slate-300">{activeTab.description}</p>

        <div className="mt-8 flex flex-wrap gap-6 border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => selectTab(tab.key)}
              aria-pressed={active === tab.key}
              className={`-mb-px border-b-2 pb-3 text-sm transition-colors ${
                active === tab.key
                  ? 'border-cyan-400 text-white'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {visibleGroups.map((group) => {
          const entries = workData.filter((e) => e.type === group.type);
          return (
            <section key={group.type} className="mt-14">
              {active === 'all' && (
                <div className="mb-6 flex items-end justify-between">
                  <h2 className="text-3xl font-bold text-white">{group.title}</h2>
                  <span className="text-xs text-slate-400">
                    {String(entries.length).padStart(2, '0')} entries
                  </span>
                </div>
              )}
              <div className="border-b border-slate-700">
                {entries.map((entry) => (
                  <WorkRow key={entry.slug} entry={entry} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default WorkPage;