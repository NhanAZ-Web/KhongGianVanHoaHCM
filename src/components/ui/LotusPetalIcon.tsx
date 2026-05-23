interface LotusPetalIconProps {
  className?: string;
}

export default function LotusPetalIcon({
  className = 'h-4 w-4',
}: LotusPetalIconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="6" cy="3.5" rx="2" ry="3.5" fill="currentColor" />
      <ellipse
        cx="3.2"
        cy="5"
        rx="1.8"
        ry="3"
        fill="currentColor"
        transform="rotate(-30 3.2 5)"
      />
      <ellipse
        cx="8.8"
        cy="5"
        rx="1.8"
        ry="3"
        fill="currentColor"
        transform="rotate(30 8.8 5)"
      />
      <circle cx="6" cy="5" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
