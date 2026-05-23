import LotusPetalIcon from '../ui/LotusPetalIcon';

function FooterIcon() {
  return (
    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center text-white/60">
      <LotusPetalIcon className="h-3.5 w-3.5" />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-20">
      {/* Silk divider top */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
          <path d="M0,60 C360,0 720,40 1080,10 C1260,0 1380,20 1440,15 L1440,60 Z" fill="#1F2933"/>
        </svg>
      </div>

      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Info */}
          <div>
            <h3 className="font-heading font-bold text-lg leading-tight text-white mb-0 pb-4">
              Không gian Văn hóa Hồ Chí Minh
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-2">
              Không gian học tập, tìm hiểu và lan tỏa tư tưởng, đạo đức,
              phong cách Hồ Chí Minh trên nền tảng số.
            </p>
          </div>

          {/* Column 2: Organization */}
          <div>
            <h3 className="font-heading font-bold text-lg leading-tight text-white mb-0 pb-4">
              Đơn vị thực hiện
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-white/60">
              <p className="flex gap-3">
                <FooterIcon />
                <span>
                  Đảng ủy Ban Quản lý các Khu Chế xuất và Công nghiệp TP. Hồ Chí Minh
                </span>
              </p>
              <p className="flex gap-3">
                <FooterIcon />
                <span>
                  Chi bộ Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp
                </span>
              </p>
              <p className="flex gap-3">
                <FooterIcon />
                <span>
                  Đoàn TNCS Hồ Chí Minh Trường CĐBC Công nghệ và Quản trị doanh nghiệp
                </span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg leading-tight text-white mb-0 pb-4">
              Điều hướng nhanh
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { id: 'timeline', label: 'Timeline cuộc đời' },
                { id: 'tac-pham', label: 'Tác phẩm và tư liệu' },
                { id: 'tu-tuong', label: 'Tư tưởng và đạo đức' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-sm text-white/60 hover:text-lotus-pink transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            Nội dung và hình ảnh chỉ phục vụ mục đích tham khảo, học tập;
            không dùng làm nguồn trích dẫn hoặc căn cứ chính thức.
          </p>
          <p className="text-xs text-white/40">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
