import { CheckCheck, Quote } from 'lucide-react';

export default function Summary() {
  return (
    <div className="relative space-y-10">
      <span className="doodle-star right-5 top-12 rotate-12 [--star-opacity:0.22] [--star-size:6rem]" />

      <section data-reveal className="reveal relative min-h-[420px] overflow-hidden">
        <span className="section-kicker">Self-reflection journey</span>
        <h2 className="display-title mt-6 text-[5rem] text-academic-ink sm:text-[6.5rem] md:text-[8rem]">
          reflection<span className="text-academic-deep-rose">.</span>
        </h2>
        <div className="paper-card relative z-10 ml-auto mt-[-1rem] max-w-3xl rotate-[-0.5deg] bg-academic-background p-8 md:p-10">
          <Quote className="absolute -left-5 -top-5 rounded-full border-2 border-academic-ink bg-academic-blush p-2 text-academic-rose shadow-[3px_3px_0_#1B1C1C]" size={54} />
          <p className="text-lg italic leading-9 text-academic-muted">
            “Ban đầu em nghĩ portfolio chỉ là gom các bài đã làm rồi đưa lên một trang web. Nhưng khi bắt tay vào làm, em mới thấy nếu chỉ đưa file lên thì sản phẩm sẽ khá rời rạc và không thể hiện được quá trình học.”
          </p>
          <div className="mt-7 flex items-center gap-4 font-mono text-sm font-bold text-academic-ink">
            <span className="h-1 w-16 bg-academic-deep-rose" />
            Mùa học 2025-2026
          </div>
        </div>
      </section>

      <section data-reveal className="reveal grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
        <article className="space-y-7">
          <div className="flex items-center gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-academic-ink bg-academic-deep-rose font-mono text-xl font-bold text-white shadow-[3px_3px_0_#1B1C1C]">01</span>
            <h3 className="display-title text-4xl text-academic-ink md:text-5xl">Những gì đã học được</h3>
          </div>
          <p className="text-justify leading-8 text-academic-muted">
            Qua học phần này, em học được cách tổ chức tài liệu rõ ràng hơn, biết đặt tên file dễ hiểu hơn và lưu trữ theo từng môn, từng bài. Em cũng hiểu hơn về cách tìm kiếm thông tin, đánh giá nguồn và sử dụng AI trong học tập. Trước đây em thường hỏi AI khá bản năng, nhưng sau bài về prompt, em nhận ra nếu đưa rõ bối cảnh, yêu cầu và định dạng mong muốn thì kết quả sẽ tốt hơn nhiều.
          </p>
          <blockquote className="border-l-4 border-academic-rose pl-6 font-display text-3xl font-extrabold italic leading-tight text-academic-rose">
            Việc làm portfolio bằng web giúp em luyện thêm kỹ năng trình bày sản phẩm số.
          </blockquote>
          <p className="text-justify leading-8 text-academic-muted">
            Em phải sắp xếp bố cục, chia nội dung, gắn link báo cáo và làm sao để người xem dễ theo dõi. Quá trình này giúp em nhìn lại bài học như một hành trình thay vì chỉ là từng file riêng lẻ.
          </p>
        </article>

        <aside className="paper-card rotate-[1deg] bg-academic-fixed p-7">
          <span className="tape left-10 top-[-0.9rem] rotate-[-8deg]" />
          <CheckCheck className="text-academic-deep-rose" size={42} />
          <h3 className="mt-5 font-display text-4xl font-extrabold text-academic-deep-rose">Academic integrity</h3>
          <p className="mt-5 text-sm leading-7 text-academic-muted">
            Em có dùng AI để hỗ trợ viết code, gợi ý giao diện và sửa nội dung. Tuy nhiên, em không dùng nguyên mọi thứ AI tạo ra. Em vẫn phải chạy thử, kiểm tra, chỉnh lại phần sai và thay các nội dung chung chung bằng thông tin thực tế của mình.
          </p>
        </aside>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <article data-reveal className="reveal paper-card rotate-[-0.8deg] p-7">
          <span className="section-kicker">Thử thách</span>
          <h3 className="mt-4 font-display text-3xl font-extrabold text-academic-deep-rose">Khó khăn gặp phải</h3>
          <p className="mt-4 text-justify text-sm leading-7 text-academic-muted">
            Khó nhất với em không phải là viết từng báo cáo, mà là gom tất cả lại thành một sản phẩm hoàn chỉnh. Khi đưa lên web, em phải chỉnh lại bố cục, màu sắc, phần minh chứng, bảng rubric và cả trang in PDF.
          </p>
        </article>
        <article data-reveal className="reveal paper-card rotate-[0.8deg] bg-academic-background p-7">
          <span className="section-kicker">Next steps</span>
          <h3 className="mt-4 font-display text-3xl font-extrabold text-academic-deep-rose">Kế hoạch hoàn thiện</h3>
          <p className="mt-4 text-justify text-sm leading-7 text-academic-muted">
            Sau khi hoàn thành web, em sẽ kiểm tra lại toàn bộ link báo cáo PDF để chắc chắn các file mở được đúng bài. Với những bài không có sản phẩm riêng, em sẽ ghi rõ ràng sản phẩm và minh chứng đã được trình bày trong báo cáo, không tạo thêm link hoặc nội dung không có thật.
          </p>
        </article>
      </div>

      <article data-reveal className="reveal paper-card bg-academic-blush p-7 text-center md:p-10">
        <h3 className="font-display text-3xl font-extrabold text-academic-ink">Cam kết Liêm chính Học thuật</h3>
        <p className="mx-auto mt-5 max-w-3xl whitespace-pre-line text-sm italic leading-8 text-academic-muted">
          {`Em, Nguyễn Thị Dung, cam kết các báo cáo và nội dung trong portfolio này phản ánh quá trình học tập và thực hành của bản thân. Em có sử dụng AI như một công cụ hỗ trợ, chủ yếu để gợi ý cách trình bày, sửa code và kiểm tra nội dung.

AI chỉ nên hỗ trợ, không thể thay thế hoàn toàn việc học. Em không tạo minh chứng giả, không ghi sản phẩm không có thật và không cố tình trình bày sai quá trình làm bài của mình!

Em cảm ơn thầy cô đã dành thời gian đọc những dòng này!`}
        </p>
      </article>
    </div>
  );
}
