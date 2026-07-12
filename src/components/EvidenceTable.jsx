import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, ExternalLink, FileText, Image, Maximize2, X, XCircle } from 'lucide-react';

const isUnavailable = (value) => !value || value.includes('cập nhật') || value.includes('cáº­p nháº­t');
const isNotRequired = (value) => value?.includes('Không yêu cầu') || value?.includes('KhÃ´ng yÃªu');

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  const EvidenceLink = ({ value, label, type }) => {
    const Icon = type === 'pdf' ? FileText : Image;

    if (isUnavailable(value)) {
      return <span className="resource-disabled"><Icon size={16} /> Đang chờ</span>;
    }
    if (isNotRequired(value)) {
      return <span className="resource-disabled"><Icon size={16} /> Không yêu cầu</span>;
    }
    return (
      <a
        href={value}
        onClick={(event) => openPreview(event, value, type)}
        className="resource-action"
      >
        <Icon size={16} />
        {label}
        <Maximize2 size={13} />
      </a>
    );
  };

  const StatusBadge = ({ report }) => {
    const isReportDone = !isUnavailable(report) && !isNotRequired(report);

    if (isReportDone) {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border-2 border-academic-ink bg-academic-fixed px-3 py-1 font-mono text-xs font-bold text-academic-deep-rose">
          <CheckCircle2 size={14} /> Đã nộp
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full border-2 border-academic-ink bg-academic-blush px-3 py-1 font-mono text-xs font-bold text-academic-rose">
        <XCircle size={14} /> Thiếu MC
      </span>
    );
  };

  return (
    <section id="evidence" data-reveal className="reveal section-anchor relative mt-20 md:mt-28">
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-academic-ink/80 p-4 backdrop-blur-sm print:hidden" onMouseDown={closePreview}>
          <div className="flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border-2 border-academic-ink bg-white shadow-[8px_8px_0_#1B1C1C]" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b-2 border-academic-ink bg-academic-fixed p-4">
              <div>
                <p className="section-kicker">Evidence preview</p>
                <h3 className="font-display text-2xl font-extrabold text-academic-ink">
                  {previewData.type === 'pdf' ? 'Trình xem PDF' : 'Trình xem hình ảnh'}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="icon-button" aria-label="Mở thẻ mới">
                  <ExternalLink size={18} />
                </a>
                <button onClick={closePreview} className="icon-button" aria-label="Đóng">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center overflow-auto bg-academic-background p-4">
              {previewData.type === 'pdf' ? (
                <iframe src={previewData.url} title="PDF Preview" className="h-full w-full border-0 bg-white" />
              ) : (
                <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full bg-white object-contain shadow-polaroid" />
              )}
            </div>
          </div>
        </div>
      )}

      <span className="doodle-star left-[-2rem] top-0 rotate-[-18deg] [--star-opacity:0.24] [--star-size:8rem]" />
      <div className="relative z-10 mb-12">
        <h2 className="display-title text-[4.8rem] text-academic-ink sm:text-[6.5rem] md:text-[8rem]">my evidence</h2>
        <div className="pink-sticker sticker ml-4 mt-[-0.6rem] rotate-[1deg] px-5 py-1.5 font-mono text-xs uppercase tracking-[0.12em]">
          Academic artifacts & literacy milestones
        </div>
      </div>

      <div className="paper-card overflow-hidden bg-white">
        <div className="flex items-start gap-3 border-b-2 border-academic-ink bg-academic-blush p-5">
          <AlertCircle className="mt-0.5 flex-shrink-0 text-academic-deep-rose" size={22} />
          <p className="text-sm leading-7 text-academic-ink">
            <strong>Ghi chú:</strong> Click vào báo cáo PDF để xem nhanh ngay trong pop-up.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-academic-ink bg-academic-fixed font-mono text-xs uppercase tracking-[0.1em] text-academic-deep-rose">
                <th className="w-[25%] p-5 font-bold">Bài tập / Nhiệm vụ</th>
                <th className="w-[35%] p-5 font-bold">Mô tả & Mục tiêu</th>
                <th className="w-[22%] p-5 font-bold">Kỹ năng đạt được</th>
                <th className="w-[10%] p-5 text-center font-bold">File báo cáo</th>
                <th className="w-[8%] p-5 text-center font-bold">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-academic-ink/10">
              {projects.map((project) => (
                <tr key={project.id} className="bg-white transition-colors hover:bg-academic-background">
                  <td className="p-5 align-top">
                    <p className="font-display text-lg font-extrabold leading-snug text-academic-deep-rose">{project.title}</p>
                    <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-academic-muted">{project.chapter}</p>
                  </td>
                  <td className="p-5 align-top">
                    <p className="text-sm font-semibold text-academic-ink leading-relaxed">{project.shortDesc}</p>
                    <p className="mt-1 text-xs leading-relaxed text-academic-muted">{project.target}</p>
                  </td>
                  <td className="p-5 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills?.map((skill) => (
                        <span className="tag text-[10px] py-0.5 px-2.5" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-5 align-top text-center">
                    <div className="inline-block">
                      <EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" />
                    </div>
                  </td>
                  <td className="p-5 align-top text-center">
                    <StatusBadge report={project.report} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
