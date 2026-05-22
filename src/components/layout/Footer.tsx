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
              Kh\u00f4ng gian V\u0103n h\u00f3a H\u1ed3 Ch\u00ed Minh
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-2">
              Kh\u00f4ng gian h\u1ecdc t\u1eadp, t\u00ecm hi\u1ec3u v\u00e0 lan t\u1ecfa t\u01b0 t\u01b0\u1edfng, \u0111\u1ea1o \u0111\u1ee9c,
              phong c\u00e1ch H\u1ed3 Ch\u00ed Minh tr\u00ean n\u1ec1n t\u1ea3ng s\u1ed1.
            </p>
          </div>

          {/* Column 2: Organization */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              \u0110\u01a1n v\u1ecb th\u1ef1c hi\u1ec7n
            </h3>
            <div className="text-sm leading-relaxed text-white/60 space-y-2">
              <p>
                <span className="text-white/80">C\u1ea5p tr\u00ean:</span>{' '}
                \u0110\u1ea3ng \u1ee7y Ban Qu\u1ea3n l\u00fd c\u00e1c Khu Ch\u1ebf xu\u1ea5t v\u00e0 C\u00f4ng nghi\u1ec7p TP. H\u1ed3 Ch\u00ed Minh
              </p>
              <p>
                <span className="text-white/80">\u0110\u01a1n v\u1ecb:</span>{' '}
                Chi b\u1ed9 Tr\u01b0\u1eddng Cao \u0111\u1eb3ng b\u00e1n c\u00f4ng C\u00f4ng ngh\u1ec7 v\u00e0 Qu\u1ea3n tr\u1ecb doanh nghi\u1ec7p
              </p>
              <p>
                <span className="text-white/80">Th\u1ef1c hi\u1ec7n:</span>{' '}
                \u0110o\u00e0n TNCS H\u1ed3 Ch\u00ed Minh Tr\u01b0\u1eddng C\u0110BC C\u00f4ng ngh\u1ec7 v\u00e0 Qu\u1ea3n tr\u1ecb doanh nghi\u1ec7p
              </p>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              \u0110i\u1ec1u h\u01b0\u1edbng nhanh
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { id: 'timeline', label: 'Timeline cu\u1ed9c \u0111\u1eddi' },
                { id: 'tac-pham', label: 'T\u00e1c ph\u1ea9m v\u00e0 t\u01b0 li\u1ec7u' },
                { id: 'tu-tuong', label: 'T\u01b0 t\u01b0\u1edfng v\u00e0 \u0111\u1ea1o \u0111\u1ee9c' },
                { id: 'nguon', label: 'Ngu\u1ed3n v\u00e0 ki\u1ec3m ch\u1ee9ng' },
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
            N\u1ed9i dung mang t\u00ednh ch\u1ea5t tham kh\u1ea3o v\u00e0 gi\u00e1o d\u1ee5c.
            C\u1ea7n ki\u1ec3m ch\u1ee9ng ngu\u1ed3n tr\u01b0\u1edbc khi xu\u1ea5t b\u1ea3n ch\u00ednh th\u1ee9c.
          </p>
          <p className="text-xs text-white/40">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
