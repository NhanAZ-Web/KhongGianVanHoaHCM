interface CloudPatternProps {
  className?: string;
}

export default function CloudPattern({ className = '' }: CloudPatternProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="cloud-pattern"
          x="0"
          y="0"
          width="160"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* May lon */}
          <path
            d="M20 70
               C20 55, 30 45, 42 45
               C44 35, 55 28, 68 30
               C75 20, 90 18, 100 28
               C110 22, 125 30, 128 42
               C138 40, 148 50, 145 62
               C148 70, 142 78, 130 78
               L30 78
               C22 78, 18 74, 20 70Z"
            fill="#E85D8E"
            opacity="0.035"
          />
          {/* Duoi may cuon */}
          <path
            d="M40 78
               C45 82, 42 88, 35 86
               C30 84, 32 78, 40 78Z"
            fill="#E85D8E"
            opacity="0.025"
          />
          <path
            d="M80 78
               C85 84, 80 90, 73 87
               C68 84, 72 78, 80 78Z"
            fill="#E85D8E"
            opacity="0.025"
          />
          <path
            d="M120 78
               C124 83, 120 88, 114 86
               C110 83, 113 78, 120 78Z"
            fill="#E85D8E"
            opacity="0.025"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
    </svg>
  );
}
