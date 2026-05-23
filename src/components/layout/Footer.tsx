function FooterIcon({ type }: { type: 'party' | 'school' | 'youth' }) {
  const paths = {
    party: (
      <>
        <path d="M12 3.5l1.8 3.65 4.03.58-2.92 2.85.69 4.01L12 12.7l-3.6 1.89.69-4.01-2.92-2.85 4.03-.58L12 3.5z" />
        <path d="M12 16.5v4" />
      </>
    ),
    school: (
      <>
        <path d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5z" />
        <path d="M6.5 11.25v4.25c1.45 1.2 3.3 1.85 5.5 1.85s4.05-.65 5.5-1.85v-4.25" />
        <path d="M20 10v5" />
      </>
    ),
    youth: (
      <>
        <path d="M12 4c2.2 2.9 4.9 4.5 8 4.8-.35 5.15-3.08 8.92-8 11.2-4.92-2.28-7.65-6.05-8-11.2C7.1 8.5 9.8 6.9 12 4z" />
        <path d="M9 12.4l2 2 4-4" />
      </>
    ),
  } as const;

  return (
    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-lotus-pink">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
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
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Không gian Văn hóa Hồ Chí Minh
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-2">
              Không gian học tập, tìm hiểu và lan tỏa tư tưởng, đạo đức,
              phong cách Hồ Chí Minh trên nền tảng số.
            </p>
          </div>

          {/* Column 2: Organization */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Đơn vị thực hiện
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-white/60">
              <p className="flex gap-3">
                <FooterIcon type="party" />
                <span>
                  Đảng ủy Ban Quản lý các Khu Chế xuất và Công nghiệp TP. Hồ Chí Minh
                </span>
              </p>
              <p className="flex gap-3">
                <FooterIcon type="school" />
                <span>
                  Chi bộ Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp
                </span>
              </p>
              <p className="flex gap-3">
                <FooterIcon type="youth" />
                <span>
                  Đoàn TNCS Hồ Chí Minh Trường CĐBC Công nghệ và Quản trị doanh nghiệp
                </span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
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
            Nội dung mang tính chất tham khảo và giáo dục.
            Cần kiểm chứng nguồn trước khi xuất bản chính thức.
          </p>
          <p className="text-xs text-white/40">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
