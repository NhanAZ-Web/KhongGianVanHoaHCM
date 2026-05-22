import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-border
        shadow-sm
        transition-all duration-300 ease-in-out
        ${hover ? 'hover:border-lotus-pink hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
