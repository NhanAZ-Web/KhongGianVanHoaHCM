import { type MouseEvent, type ReactNode, useEffect, useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Khoa cuon trang khi modal mo
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Dong modal khi nhan phim Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Lop nen mo */}
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Noi dung modal */}
          <div
            className="
              relative z-10
              bg-white rounded-2xl shadow-xl
              w-full max-w-3xl max-h-[90vh]
              overflow-y-auto
              flex flex-col
            "
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Thanh tieu de */}
            <div className="flex items-center justify-between p-6 border-b border-gray-border">
              <h3 className="font-heading text-xl font-bold text-ink">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="
                  flex items-center justify-center
                  w-9 h-9 rounded-full
                  text-gray-sub hover:text-ink
                  hover:bg-lotus-pale
                  transition-colors duration-200
                "
                aria-label="Dong"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Noi dung */}
            <div className="p-6">{children}</div>
          </div>
        </div>
  );
}
