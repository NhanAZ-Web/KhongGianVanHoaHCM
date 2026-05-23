interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  id,
  className = '',
}: SectionTitleProps) {
  return (
    <div id={id} className={`scroll-mt-24 text-center mb-10 ${className}`}>
      <h2 className="section-display-title font-heading text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
        {title}
      </h2>

      {/* Duong trang tri voi cham sen o giua */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="block h-[1px] w-12 bg-lotus-pink/40" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Canh sen don gian */}
          <ellipse cx="6" cy="3.5" rx="2" ry="3.5" fill="#F73582" />
          <ellipse
            cx="3.2"
            cy="5"
            rx="1.8"
            ry="3"
            fill="#F73582"
            transform="rotate(-30 3.2 5)"
          />
          <ellipse
            cx="8.8"
            cy="5"
            rx="1.8"
            ry="3"
            fill="#F73582"
            transform="rotate(30 8.8 5)"
          />
          <circle cx="6" cy="5" r="1.2" fill="#F73582" opacity="0.5" />
        </svg>
        <span className="block h-[1px] w-12 bg-lotus-pink/40" />
      </div>

      {subtitle && (
        <p className="mt-3 text-gray-sub text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
