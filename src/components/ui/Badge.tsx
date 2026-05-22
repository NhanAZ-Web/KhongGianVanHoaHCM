import type { ReactNode } from 'react';

type BadgeVariant = 'pink' | 'green' | 'red' | 'gold' | 'gray';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  pink: 'bg-lotus-pale text-lotus-pink',
  green: 'bg-leaf-green/10 text-leaf-green',
  red: 'bg-red-formal/10 text-red-formal',
  gold: 'bg-gold-accent/10 text-gold-accent',
  gray: 'bg-gray-border text-gray-sub',
};

export default function Badge({
  children,
  variant = 'pink',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5
        text-xs font-medium
        rounded-full
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
