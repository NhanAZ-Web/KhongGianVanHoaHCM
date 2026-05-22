interface ImagePlaceholderProps {
  path: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  path,
  alt,
  className = '',
  aspectRatio = '4/3',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
        relative rounded-xl overflow-hidden
        flex flex-col items-center justify-center
        bg-gradient-to-br from-lotus-pale to-ivory
        ${className}
      `}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      <svg
        className="w-10 h-10 text-lotus-pink/40 mb-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="M21 15l-5-5L5 20" />
      </svg>
      <p className="text-sm font-medium text-ink/60 text-center px-4 leading-snug">
        {alt}
      </p>
      <p className="mt-2 text-xs text-gray-sub text-center px-4">
        {"C\u1EA7n b\u1ED5 sung \u1EA3nh: "}{path}
      </p>
    </div>
  );
}
