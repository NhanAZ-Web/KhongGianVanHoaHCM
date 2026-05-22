import { useState, useEffect } from 'react'

const navItems = [
  { id: 'hero', label: 'Trang ch\u1ee7' },
  { id: 'ho-so', label: 'H\u1ed3 s\u01a1' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'cuoc-doi', label: 'Cu\u1ed9c \u0111\u1eddi' },
  { id: 'tu-tuong', label: 'T\u01b0 t\u01b0\u1edfng' },
  { id: 'tac-pham', label: 'T\u00e1c ph\u1ea9m' },
  { id: 'am-nhac', label: '\u00c2m nh\u1ea1c' },
  { id: 'tuong-dai', label: 'T\u01b0\u1ee3ng \u0111\u00e0i' },
  { id: 'cau-chuyen', label: 'C\u00e2u chuy\u1ec7n' },
  { id: 'nguon', label: 'Ngu\u1ed3n' },
]

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-lotus-pink/10 flex items-center justify-center group-hover:bg-lotus-pink/20 transition-colors">
              <svg viewBox="0 0 32 32" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M16 4 C16 4, 10 12, 10 18 C10 22, 12.5 25, 16 27 C19.5 25, 22 22, 22 18 C22 12, 16 4, 16 4Z" fill="#E85D8E" opacity="0.8"/>
                <path d="M16 8 C16 8, 12 14, 12 18 C12 21, 13.5 23, 16 25 C18.5 23, 20 21, 20 18 C20 14, 16 8, 16 8Z" fill="#F5A0B8" opacity="0.6"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-sm md:text-base text-ink hidden sm:block">
              KG V\u0103n h\u00f3a HCM
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-sm text-gray-sub hover:text-ink hover:bg-lotus-light rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:bg-lotus-light rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? '\u0110\u00f3ng menu' : 'M\u1edf menu'}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-ivory shadow-xl animate-slide-in">
            <div className="pt-20 px-6">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-3 text-ink hover:bg-lotus-light rounded-lg transition-colors font-body"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
