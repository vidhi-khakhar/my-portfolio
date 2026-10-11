import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { workData, typeLabel } from '../data/workData';
import WorkRow from '../components/WorkRow';

// \uFE0E forces plain-text presentation, so devices never swap the arrow for a colourful emoji
const ARROW = '\u2197\uFE0E';

const overviewTitle = {
  project: 'What it does',
  experience: 'About the role',
  education: 'About',
};

const bulletsTitle = {
  project: 'What I worked on',
  experience: 'What I worked on',
  education: 'Highlights',
};

const roleLabel = { experience: 'Role', education: 'Programme' };
const techLabel = { project: 'Technologies', experience: 'Skills', education: 'Key topics' };

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.41 6.84 9.77.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5C19.14 20.66 22 16.81 22 12.26 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function RepoCard({ entry }) {
  // 'https://github.com/owner/repo' becomes 'owner / repo'
  const repoName = entry.link
    .replace(/^https?:\/\/[^/]+\//, '')
    .replace(/\/$/, '')
    .split('/')
    .join(' / ');

  return (
    <a
      href={entry.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-6 block rounded-xl border border-slate-600 bg-slate-800/60 p-5 transition-colors hover:border-cyan-400/60"
    >
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span className="flex items-center gap-2">
          <GithubIcon className="h-5 w-5" />
          GitHub repository
        </span>
        <span
          aria-hidden="true"
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
        >
          {ARROW}
        </span>
      </div>

      <p className="mt-4 text-lg font-semibold text-white">{repoName}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {entry.repoDescription ?? entry.summary}
      </p>
      <p className="mt-3 text-sm text-cyan-300 group-hover:underline">
        View repository on GitHub
      </p>
    </a>
  );
}

function RoleSection({ section, className = '' }) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white">{section.heading}</h2>

      {section.text && (
        <p className="mt-3 leading-relaxed text-slate-200">{section.text}</p>
      )}

      {section.bullets?.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-200">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {section.courses?.length > 0 && (
        <div className="mt-5">
          <p className="text-xs uppercase tracking-wider text-slate-400">Courses</p>
          <ul className="mt-3 space-y-3">
            {section.courses.map((c) => (
              <li key={c.name} className="border-l-2 border-cyan-400/40 pl-4">
                <p className="font-semibold text-white">{c.name}</p>
                <p className="text-sm text-slate-300">{c.topics}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LinkedInEmbed({ post }) {
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(post.scale ?? 0.75);
  const holderRef = useRef(null);
  const baseWidth = post.width ?? 504;

  // Never let the scaled post be wider than the space available (matters on phones)
  useEffect(() => {
    const wanted = post.scale ?? 0.75;
    function fit() {
      const room = holderRef.current?.clientWidth;
      if (!room) return;
      setScale(Math.min(wanted, room / baseWidth));
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [post.scale, baseWidth]);

  return (
    <div ref={holderRef} className="mt-4">
      {!loaded ? (
        <div className="rounded-xl border border-slate-600 bg-slate-800/60 p-5">
          <p className="text-sm text-slate-300">
            This loads a post from LinkedIn, which may set its own cookies.
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="mt-3 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#e2e8f0]"
          >
            Load LinkedIn post
          </button>
        </div>
      ) : (
        <div
          className="overflow-hidden rounded-xl border border-slate-600 bg-white"
          style={{ width: baseWidth * scale, height: post.height * scale }}
        >
          <iframe
            src={post.src}
            title="Embedded LinkedIn post"
            width={baseWidth}
            height={post.height}
            allowFullScreen
            style={{ border: 0, transform: `scale(${scale})`, transformOrigin: 'top left' }}
          />
        </div>
      )}
    </div>
  );
}

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

  // Look up each slug in entry.related; a slug that does not exist is dropped
  const related = (entry.related ?? [])
    .map((s) => workData.find((e) => e.slug === s))
    .filter(Boolean);

  return (
    <main className="min-h-screen px-8 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <Link to="/work" className="text-sm text-slate-300 hover:text-cyan-300">
          ← Back to work
        </Link>

        {/* Header */}
        <header className="mt-10 border-b border-slate-700 pb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {typeLabel[entry.type]}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-6xl">{entry.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{entry.summary}</p>
        </header>

        {/* Body: sidebar on the left, text on the right */}
        <div className="mt-10 grid gap-10 md:grid-cols-[200px_1fr]">
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Period</p>
              <p className="mt-1 text-white">{entry.period}</p>
            </div>

            {entry.subtitle && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  {roleLabel[entry.type]}
                </p>
                <p className="mt-1 text-white">{entry.subtitle}</p>
              </div>
            )}

            {entry.technologies?.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  {techLabel[entry.type]}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <div>
            {entry.overview && (
              <>
                <h2 className="text-2xl font-bold text-white">
                  {entry.overviewHeading ?? overviewTitle[entry.type]}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-200">{entry.overview}</p>
              </>
            )}

            {entry.link && <RepoCard entry={entry} />}

            {entry.sections?.map((section, i) => (
              <RoleSection
                key={section.heading}
                section={section}
                className={i === 0 && !entry.overview && !entry.link ? '' : 'mt-10'}
              />
            ))}

            {entry.bullets?.length > 0 && (
              <>
                <h2
                  className={`text-2xl font-bold text-white ${
                    entry.overview || entry.link ? 'mt-10' : ''
                  }`}
                >
                  {bulletsTitle[entry.type]}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-200">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            {entry.linkedinPost && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-white">On LinkedIn</h2>
                <LinkedInEmbed post={entry.linkedinPost} />
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-slate-700 pt-12">
            <h2 className="text-3xl font-bold text-white">Related</h2>
            <div className="mt-6 border-b border-slate-700">
              {related.map((r) => (
                <WorkRow key={r.slug} entry={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default WorkDetail;