import { useMemo, useState } from 'react';

interface ImagePlaceholderProps {
  path: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

function resolvePublicAssetPath(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}

export default function ImagePlaceholder({
  path,
  alt,
  className = '',
  aspectRatio = '4/3',
}: ImagePlaceholderProps) {
  const [failedPath, setFailedPath] = useState<string | null>(null);
  const resolvedPath = useMemo(() => resolvePublicAssetPath(path), [path]);
  const hasError = failedPath === resolvedPath;

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
      {!hasError ? (
        <>
          <img
            src={resolvedPath}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFailedPath(resolvedPath)}
          />
          <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-ink/25 px-2 py-0.5 text-[10px] font-medium leading-none text-white/70 shadow-sm backdrop-blur-[1px]">
            Ảnh minh họa
          </span>
        </>
      ) : (
        <>
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
            Cần bổ sung ảnh: {path}
          </p>
        </>
      )}
    </div>
  );
}
