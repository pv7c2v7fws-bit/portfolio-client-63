import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, FileText, Image, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const unavailable = (value) => !value || value.includes('cập nhật') || value.includes('cáº­p nháº­t');
const notRequired = (value) => value?.includes('Không yêu cầu') || value?.includes('KhÃ´ng yÃªu');

function PreviewModal({ previewData, onClose }) {
  useEffect(() => {
    if (!previewData.isOpen) return undefined;
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [previewData.isOpen, onClose]);

  if (!previewData.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-academic-ink/75 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border-2 border-academic-ink bg-white shadow-[8px_8px_0_#1B1C1C]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b-2 border-academic-ink bg-academic-blush px-5 py-4">
          <div>
            <p className="section-kicker">Preview</p>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-academic-ink">
              {previewData.type === 'pdf' ? 'Trình xem PDF' : 'Trình xem hình ảnh'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={previewData.url} target="_blank" rel="noreferrer" className="icon-button" aria-label="Mở trong tab mới"><ExternalLink size={18} /></a>
            <button type="button" onClick={onClose} className="icon-button" aria-label="Đóng bản xem trước"><X size={20} /></button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden bg-academic-background">
          {previewData.type === 'pdf' ? (
            <iframe
              src={previewData.url}
              title="Bản xem trước báo cáo PDF"
              className="block h-full w-full border-0 bg-transparent"
            />
          ) : (
            <div className="flex h-full items-center justify-center overflow-auto bg-transparent p-4">
              <img src={previewData.url} alt="Ảnh minh chứng bài tập" className="block max-h-full max-w-full object-contain shadow-polaroid" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResourceAction({ value, type, onPreview }) {
  const config = {
    pdf: { label: 'Báo cáo PDF', icon: FileText },
    img: { label: 'Ảnh minh chứng', icon: Image },
  }[type];
  const Icon = config.icon;

  if (unavailable(value)) return <span className="resource-disabled"><Icon size={17} /> Sẽ cập nhật sau</span>;
  if (notRequired(value)) return <span className="resource-disabled"><Icon size={17} /> Không yêu cầu</span>;

  return (
    <a
      href={value}
      onClick={(event) => onPreview(event, value, type)}
      className="resource-action"
    >
      <Icon size={17} />
      {config.label}
      <Maximize2 size={14} />
    </a>
  );
}

export default function ProjectsTab() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  return (
    <section id="assignments" data-reveal className="reveal section-anchor relative mt-20 space-y-12 md:mt-28" aria-labelledby="assignments-title">
      <PreviewModal previewData={previewData} onClose={closePreview} />

      <span className="tape right-8 top-0 hidden rotate-[-12deg] md:block" />
      <span className="doodle-star right-20 top-12 rotate-12 [--star-opacity:0.35] [--star-size:4rem]" />

      <div className="max-w-3xl">
        <h2 id="assignments-title" className="display-title text-6xl text-academic-deep-rose md:text-7xl">Class assignments</h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-academic-muted">
          Sáu bài tập ghi lại cách kiến thức được chuyển thành sản phẩm, minh chứng và trải nghiệm học tập thực tế.
        </p>
      </div>

      {selectedProject && (
        <article className="paper-card overflow-hidden bg-white">
          <div className="relative bg-academic-fixed p-7 md:p-10">
            <span className="tape right-12 top-[-0.9rem] rotate-[8deg]" />
            <button type="button" onClick={() => setSelectedProject(null)} className="editorial-button mb-7 px-4 py-2 text-sm">
              <ArrowLeft size={17} /> Trở lại 6 bài
            </button>
            <p className="section-kicker">Assignment {String(selectedProject.id).padStart(2, '0')} • {selectedProject.chapter}</p>
            <h3 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight text-academic-deep-rose md:text-5xl">{selectedProject.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-academic-muted">{selectedProject.shortDesc}</p>
          </div>

          <div className="grid gap-6 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="polaroid rotate-[-1deg]">
              <span className="tape left-8 top-[-0.9rem] rotate-[-10deg]" />
              <div className="aspect-[4/3] overflow-hidden bg-academic-fixed">
                <img src={selectedProject.evidenceImg} alt={`Minh chứng ${selectedProject.title}`} className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-center font-mono text-xs font-bold uppercase tracking-[0.14em] text-academic-muted">
                evidence • assignment {String(selectedProject.id).padStart(2, '0')}
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border-2 border-academic-ink bg-academic-blush p-6">
                <span className="section-kicker">Mục tiêu</span>
                <p className="mt-3 leading-7 text-academic-ink">{selectedProject.target}</p>
              </div>
              <div className="rounded-[1.5rem] border border-academic-ink/15 bg-white p-6">
                <span className="section-kicker">Quá trình thực hiện</span>
                <p className="mt-3 text-sm leading-7 text-academic-muted">{selectedProject.process}</p>
              </div>
              <div className="flex flex-wrap gap-2">{selectedProject.skills?.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </div>
          </div>

          <div className="border-t-2 border-academic-ink bg-white p-7 md:px-10">
            <p className="section-kicker mb-4">Tài liệu & minh chứng</p>
            <div className="flex flex-wrap gap-3">
              <ResourceAction value={selectedProject.report} type="pdf" onPreview={openPreview} />
            </div>
          </div>
        </article>
      )}

      <div className={`${selectedProject ? 'hidden' : 'grid'} items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3`} aria-hidden={Boolean(selectedProject)}>
        {projects.map((project, index) => (
          <article
            data-reveal
            key={project.id}
            className={`reveal hover-lift flex h-full ${index % 2 ? 'rotate-[1deg]' : 'rotate-[-1deg]'}`}
          >
            <div className="polaroid flex h-full w-full flex-col">
              <span className={`tape ${index % 2 ? 'right-8 rotate-[10deg]' : 'left-8 rotate-[-12deg]'} top-[-0.9rem]`} />
              <div className="aspect-[4/3] overflow-hidden bg-academic-fixed">
                <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <span className="section-kicker">Week {String(project.id).padStart(2, '0')} • {project.chapter}</span>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-academic-deep-rose">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-academic-muted">{project.shortDesc}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <button type="button" onClick={() => setSelectedProject(project)} className="editorial-button px-4 py-2 text-sm">Xem chi tiết</button>
                  <button type="button" onClick={(event) => openPreview(event, project.report, 'pdf')} disabled={unavailable(project.report) || notRequired(project.report)} className="icon-button disabled:cursor-not-allowed disabled:opacity-35" aria-label={`Xem báo cáo ${project.title}`}><FileText size={18} /></button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
