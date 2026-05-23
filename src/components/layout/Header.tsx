import { useState, useEffect, useRef } from 'react'

const navItems = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'ho-so', label: 'Hồ sơ' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'cuoc-doi', label: 'Cuộc đời' },
  { id: 'tu-tuong', label: 'Tư tưởng' },
  { id: 'tac-pham', label: 'Tác phẩm' },
  { id: 'am-nhac', label: 'Âm nhạc' },
  { id: 'tuong-dai', label: 'Tượng đài' },
  { id: 'cau-chuyen', label: 'Câu chuyện' },
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
  const [activeSection, setActiveSection] = useState('hero')
  const pendingSectionRef = useRef<string | null>(null)
  const pendingTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const getHeaderOffset = () => (window.innerWidth >= 768 ? 104 : 88)

    const handleActiveSection = () => {
      const headerOffset = getHeaderOffset()
      const pendingSection = pendingSectionRef.current

      if (pendingSection) {
        const pendingElement = document.getElementById(pendingSection)
        const pendingDistance = pendingElement
          ? Math.abs(pendingElement.getBoundingClientRect().top - headerOffset)
          : 0

        if (pendingDistance > 18) {
          return
        }

        pendingSectionRef.current = null
      }

      const readingLine = window.scrollY + headerOffset
      let currentSection = navItems[0].id

      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section && section.offsetTop <= readingLine) {
          currentSection = item.id
        }
      })

      setActiveSection((current) =>
        current === currentSection ? current : currentSection
      )
    }

    let frameId = window.requestAnimationFrame(handleActiveSection)
    const requestActiveSection = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(handleActiveSection)
    }

    window.addEventListener('scroll', requestActiveSection, { passive: true })
    window.addEventListener('resize', handleActiveSection)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestActiveSection)
      window.removeEventListener('resize', handleActiveSection)
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const clearPendingSection = () => {
      pendingSectionRef.current = null
      if (pendingTimerRef.current) {
        window.clearTimeout(pendingTimerRef.current)
        pendingTimerRef.current = null
      }
    }

    window.addEventListener('wheel', clearPendingSection, { passive: true })
    window.addEventListener('touchstart', clearPendingSection, { passive: true })

    return () => {
      clearPendingSection()
      window.removeEventListener('wheel', clearPendingSection)
      window.removeEventListener('touchstart', clearPendingSection)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = window.innerWidth >= 768 ? 104 : 88
      const targetTop = Math.max(
        0,
        window.scrollY + el.getBoundingClientRect().top - headerOffset
      )

      pendingSectionRef.current = id
      if (pendingTimerRef.current) {
        window.clearTimeout(pendingTimerRef.current)
      }
      pendingTimerRef.current = window.setTimeout(() => {
        pendingSectionRef.current = null
      }, 1200)

      setActiveSection(id)
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
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
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/85 flex items-center justify-center overflow-hidden shadow-sm ring-1 ring-lotus-pink/15 group-hover:ring-lotus-pink/35 transition">
              <img
                src={`${import.meta.env.BASE_URL}apple-touch-icon.png`}
                alt="Logo Không gian Văn hóa Hồ Chí Minh"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-sm md:text-base text-ink hidden sm:block">
              Không gian Văn hóa Hồ Chí Minh
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-lotus-pink'
                      : 'text-gray-sub hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-lotus-pink transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:bg-lotus-light rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
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
                {navItems.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`rounded-lg px-4 py-3 text-left font-body transition-colors ${
                        isActive
                          ? 'bg-lotus-light text-lotus-pink font-semibold'
                          : 'text-ink hover:bg-lotus-light'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
