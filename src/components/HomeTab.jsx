import { portfolioData } from '../data/portfolioData';
import { Languages, Quote, Sparkles } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;
  const nameParts = student.name;
  const shortName = nameParts;

  return (
    <div className="space-y-20 md:space-y-28">
      <section id="ho-so" data-reveal className="reveal section-anchor relative min-h-[680px] overflow-hidden py-8 md:py-12">
        <span className="doodle-star left-[-1rem] top-24 rotate-[-18deg] [--star-opacity:0.28] [--star-size:7rem]" />
        <span className="doodle-star bottom-28 right-4 rotate-12 [--star-opacity:0.4] [--star-size:4.5rem]" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <span className="sticker rotate-[-2deg] px-5 py-2 font-mono text-xs uppercase tracking-[0.1em]">
              UEB - VNU • MSSV: 25051500
            </span>
            <h1 className="display-title mt-8 max-w-4xl leading-none">
              <span className="block font-mono text-2xl font-bold uppercase tracking-[0.25em] text-academic-blue min-[420px]:text-3xl sm:text-4xl">
                digital
              </span>
              <span className="block text-[4.8rem] text-academic-blue min-[420px]:text-[6rem] sm:text-[7.5rem] lg:text-[9rem] xl:text-[9.5rem] lowercase leading-none mt-2">
                portfolio
              </span>
            </h1>
            <h2 className="display-title mt-4 max-w-4xl text-[2.2rem] text-academic-ink min-[360px]:text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] tracking-tight leading-normal pb-1">
              {student.name}
            </h2>
            <div className="paper-card mt-8 max-w-2xl rotate-[0.6deg] bg-academic-blush p-6">
              <Quote className="absolute -bottom-7 -right-6 rotate-12 text-academic-rose" size={58} strokeWidth={2.5} />
              <p className="text-base leading-8 text-academic-ink md:text-lg">{student.bio}</p>
            </div>
          </div>

          <aside className="relative min-w-0 lg:col-span-5">
            <div className="polaroid mx-auto max-w-[380px] rotate-[3deg] transition duration-500 hover:rotate-0">
              <span className="tape left-1/2 top-[-0.9rem] -translate-x-1/2 rotate-[3deg]" />
              <div className="aspect-square overflow-hidden bg-academic-fixed">
                <img
                  src={avatarImage}
                  alt={`Ảnh chân dung ${student.name}`}
                  className="h-full w-full object-cover object-[58%_center]"
                />
              </div>
              <p className="mt-5 text-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-academic-muted">
                captured in focus • 2026
              </p>
            </div>
            <div className="absolute -right-2 top-10 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-2 border-academic-ink bg-academic-rose text-white shadow-[4px_4px_0_#1B1C1C]">
              <Sparkles size={26} />
            </div>
          </aside>
        </div>
      </section>

      <section data-reveal className="reveal grid items-start gap-8 lg:grid-cols-3">
        <div className="flex items-baseline gap-4 lg:col-span-3">
          <h2 className="display-title text-5xl text-academic-ink md:text-6xl">Identity / Goals</h2>
          <div className="h-1 flex-1 rounded-full bg-academic-ink/10" />
        </div>

        <article className="paper-card rotate-[-1deg] p-7">
          <Languages className="text-academic-deep-rose" size={34} />
          <h3 className="mt-5 font-display text-3xl font-extrabold text-academic-deep-rose">Education</h3>
          <p className="mt-4 text-sm leading-7 text-academic-muted">{student.major}</p>
          <p className="mt-3 text-sm leading-7 text-academic-muted">{student.university}</p>
        </article>

        <article className="paper-card mt-0 rotate-[1.5deg] bg-academic-fixed p-7 md:mt-8">
          <Sparkles className="text-academic-deep-rose" size={34} />
          <h3 className="mt-5 font-display text-3xl font-extrabold text-academic-ink">Digital learning</h3>
          <p className="mt-4 text-sm leading-7 text-academic-muted">
            Công nghệ số và AI được dùng để tổ chức tài liệu, tìm kiếm thông tin, trình bày sản phẩm học thuật và học tập có trách nhiệm.
          </p>
        </article>

        <article className="paper-card rotate-[-0.8deg] p-7">
          <Quote className="text-academic-rose" size={34} />
          <h3 className="mt-5 font-display text-3xl font-extrabold text-academic-deep-rose">{shortName}</h3>
          <p className="mt-4 text-sm leading-7 text-academic-muted">{student.id} • Business Administration</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {student.skills.slice(0, 4).map((skill) => <span className="tag" key={skill}>{skill}</span>)}
          </div>
        </article>
      </section>

      <section id="learning-index" data-reveal className="reveal section-anchor relative">
        <span className="doodle-star -left-4 top-20 rotate-12 [--star-opacity:0.2] [--star-size:5rem]" />
        <div className="mb-12 text-center">
          <span className="section-kicker">Lộ trình học tập</span>
          <h2 className="display-title mt-4 text-5xl text-academic-deep-rose md:text-7xl">Learning Map</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                data-reveal
                key={item.id}
                className={`reveal paper-card hover-lift min-h-[210px] p-6 ${index % 2 ? 'rotate-[1deg]' : 'rotate-[-1deg]'} ${index === 3 ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-5xl font-extrabold text-academic-deep-rose">{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={26} className="text-academic-rose" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-academic-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-academic-muted">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
