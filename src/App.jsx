import { useEffect, useState } from 'react';
import { BookOpenText, X } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { student } = portfolioData;

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-academic-background text-academic-ink">
      <header className="sticky top-0 z-50 border-b-2 border-academic-ink/10 bg-academic-background/88 backdrop-blur-md">
        <div className="mx-auto flex h-auto max-w-[1280px] flex-wrap items-center justify-between gap-2 px-5 py-3 sm:h-20 sm:flex-nowrap md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Về đầu trang">
            <span className="flex h-12 w-12 shrink-0 rotate-[-2deg] items-center justify-center rounded-full border-2 border-academic-ink bg-white p-1 shadow-[3px_3px_0_#1B1C1C]">
              <img src="/logo.png" alt="Logo UEB" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="section-kicker block">Business Administration Portfolio</span>
              <span className="block truncate font-display text-2xl font-extrabold italic leading-normal text-academic-deep-rose pb-1">
                {student.name}
              </span>
            </span>
          </a>

          <div className="order-3 flex w-full flex-col items-center gap-3 border-t border-academic-ink/10 pt-2 sm:order-none sm:w-auto sm:flex-row sm:justify-start sm:gap-5 sm:border-0 sm:pt-0">
            <nav
              className="flex items-center justify-center gap-4 sm:gap-7"
              aria-label="Điều hướng chính"
            >
              <a className="nav-link" href="#ho-so">Overview</a>
              <a className="nav-link" href="#assignments">Assignments</a>
              <a className="nav-link" href="#evidence">Evidence</a>
              <a className="nav-link" href="#rubric">Rubric</a>
              <a className="nav-link" href="#reflection">Reflection</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1280px] px-5 pb-20 pt-10 md:px-10 md:pt-16">
        <HomeTab />
        <ProjectsTab />
        <EvidenceTable />
        <section id="rubric" className="section-anchor mt-20 md:mt-28">
          <RubricTable />
        </section>
        <section id="reflection" className="section-anchor mt-20 md:mt-28">
          <Summary />
        </section>
      </main>

      <footer className="rounded-t-[2rem] border-t-2 border-academic-ink bg-academic-ivory px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-md space-y-4">
            <p className="font-display text-4xl font-extrabold italic text-academic-deep-rose">{student.name}</p>
            <p className="text-sm leading-7 text-academic-muted">
              {student.major}<br />
              {student.university}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-academic-muted">
              <BookOpenText size={14} className="text-academic-deep-rose" />
              <span>Business Administration Portfolio</span>
            </div>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div>
              <h3 className="section-kicker">Quick links</h3>
              <div className="mt-4 space-y-2 text-academic-muted">
                <a className="block hover:text-academic-deep-rose" href="#ho-so">Overview</a>
                <a className="block hover:text-academic-deep-rose" href="#assignments">Assignments</a>
                <a className="block hover:text-academic-deep-rose" href="#reflection">Reflection</a>
              </div>
            </div>
            <div>
              <h3 className="section-kicker">Resources</h3>
              <div className="mt-4 space-y-2 text-academic-muted">
                <a className="block hover:text-academic-deep-rose" href="#learning-index">Learning index</a>
                <a className="block hover:text-academic-deep-rose" href="#evidence">Evidence table</a>
                <a className="block hover:text-academic-deep-rose" href="#rubric">Rubric checklist</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1280px] border-t border-academic-ink/10 pt-6 text-xs text-academic-muted">
          Business Administration Portfolio - 2025-2026
        </p>
      </footer>
    </div>
  );
}
