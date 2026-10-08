const CV_URL = '/Vidhi-Khakhar-CV.pdf';

function ArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function CvPage() {
  return (
    <main className="min-h-screen px-8 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Curriculum vitae
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white">Vidhi Khakhar</h1>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-cyan-300 hover:underline"
            >
              Open in new tab <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={CV_URL}
              download="Vidhi-Khakhar-CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#e2e8f0]"
            >
              Download PDF <DownloadIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Desktop and tablet: the PDF embedded in the page */}
        <div className="mt-8 hidden overflow-hidden rounded-xl border border-slate-700 bg-white shadow-lg shadow-black/30 md:block">
          <iframe
            src={`${CV_URL}#toolbar=0&navpanes=0&view=FitH`}
            title="Vidhi Khakhar CV"
            className="h-[80vh] min-h-[600px] w-full"
          />
        </div>

        {/* Phones: inline PDFs mostly don't render, so offer a link instead */}
        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/60 p-6 md:hidden">
          <p className="text-slate-200">
            Phones can't display PDFs inside a page, so open the CV in your PDF viewer instead.
          </p>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
          >
            Open CV <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default CvPage;