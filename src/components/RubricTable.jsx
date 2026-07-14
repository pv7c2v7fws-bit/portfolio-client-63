import { CheckCircle2, CircleDashed, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const isUnavailable = (value) => !value || value.includes('cập nhật') || value.includes('cáº­p nháº­t');
const isNotRequired = (value) => value?.includes('Không yêu cầu') || value?.includes('KhÃ´ng yÃªu');

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = !isUnavailable(project.report) && !isNotRequired(project.report);
    return acc + (reportDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="relative">
      <span className="doodle-star left-1/2 top-0 rotate-6 [--star-opacity:0.36] [--star-size:5.5rem]" />

      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="display-title text-6xl text-academic-deep-rose md:text-8xl">
            rubric<br />
            <span className="text-academic-rose">checklist.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-academic-muted">
            Hành trình sáu bài tập kết nối quản lý dữ liệu, nghiên cứu thông tin, tư duy AI, cộng tác, sáng tạo và liêm chính học thuật.
          </p>
        </div>

        <div className="mx-auto flex aspect-square w-full max-w-[350px] rotate-[2deg] flex-col items-center justify-center rounded-full border-[6px] border-academic-ink bg-academic-deep-rose p-8 text-center text-white shadow-polaroid">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.12em]">Portfolio readiness</p>
          <p className="mt-4 font-display text-8xl font-extrabold leading-none">{progressPercent}%</p>
          <p className="mt-3 font-display text-4xl font-extrabold italic">Achieved</p>
          <div className="mt-6 h-3 w-full overflow-hidden rounded-full border border-white/50 bg-white/20">
            <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/85">
            <RefreshCw size={15} />
            <span>{completedMilestones}/{totalMilestones} mục đã đồng bộ.</span>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const reportDone = !isUnavailable(project.report) && !isNotRequired(project.report);
          const isFullyDone = reportDone;
          const rubricItem = rubric[project.id - 1];

          return (
            <article
              data-reveal
              key={project.id}
              className={`reveal paper-card min-h-[260px] p-7 ${index % 3 === 1 ? 'rotate-[1deg]' : 'rotate-[-1deg]'} ${index % 2 ? 'bg-academic-background' : 'bg-white'}`}
            >
              <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-academic-ink bg-academic-deep-rose text-white shadow-[3px_3px_0_#1B1C1C]">
                {isFullyDone ? <CheckCircle2 size={21} /> : <CircleDashed size={21} />}
              </div>
              {index === 3 && <span className="tape left-1/2 top-[-0.9rem] -translate-x-1/2 rotate-[4deg]" />}
              <span className="section-kicker">Rubric {String(project.id).padStart(2, '0')}</span>
              <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight text-academic-deep-rose">{project.title}</h3>
              <p className="mt-4 font-semibold text-academic-ink">{isFullyDone ? 'Đạt chuẩn minh chứng' : 'Cần bổ sung minh chứng'}</p>
              {rubricItem && <p className="mt-4 text-sm leading-7 text-academic-muted">{rubricItem.action}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
