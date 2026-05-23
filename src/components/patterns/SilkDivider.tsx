interface SilkDividerProps {
  className?: string;
  flip?: boolean;
}

export default function SilkDivider({
  className = '',
  flip = false,
}: SilkDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-auto"
      >
        {/* Lop lua chính */}
        <path
          d="M0 40
             C120 10, 240 65, 360 35
             C480 5, 600 60, 720 40
             C840 20, 960 55, 1080 30
             C1200 5, 1320 50, 1440 35
             L1440 80
             L0 80Z"
          fill="#FDECF2"
        />
        {/* Duong chi lua */}
        <path
          d="M0 42
             C120 12, 240 67, 360 37
             C480 7, 600 62, 720 42
             C840 22, 960 57, 1080 32
             C1200 7, 1320 52, 1440 37"
          stroke="#F73582"
          strokeWidth="1"
          strokeOpacity="0.35"
          fill="none"
        />
        {/* Duong chi lua phu */}
        <path
          d="M0 48
             C120 22, 240 72, 360 45
             C480 18, 600 68, 720 48
             C840 28, 960 63, 1080 38
             C1200 13, 1320 58, 1440 42"
          stroke="#F73582"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          fill="none"
        />
      </svg>
    </div>
  );
}
