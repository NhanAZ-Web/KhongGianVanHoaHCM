interface LotusWatermarkProps {
  className?: string;
  opacity?: number;
}

export default function LotusWatermark({
  className = '',
  opacity = 0.05,
}: LotusWatermarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Canh hoa trung tam */}
      <path
        d="M100 30
           C95 60, 80 80, 75 100
           C80 120, 95 140, 100 160
           C105 140, 120 120, 125 100
           C120 80, 105 60, 100 30Z"
        fill="#F73582"
      />
      {/* Canh hoa ben trai - gan */}
      <path
        d="M100 50
           C85 55, 60 65, 45 85
           C50 105, 70 130, 90 145
           C85 125, 80 100, 80 85
           C82 70, 92 55, 100 50Z"
        fill="#F73582"
      />
      {/* Canh hoa ben phai - gan */}
      <path
        d="M100 50
           C115 55, 140 65, 155 85
           C150 105, 130 130, 110 145
           C115 125, 120 100, 120 85
           C118 70, 108 55, 100 50Z"
        fill="#F73582"
      />
      {/* Canh hoa ben trai - xa */}
      <path
        d="M90 65
           C70 55, 45 50, 25 60
           C30 80, 50 105, 75 120
           C65 105, 60 85, 65 75
           C70 68, 80 63, 90 65Z"
        fill="#F73582"
      />
      {/* Canh hoa ben phai - xa */}
      <path
        d="M110 65
           C130 55, 155 50, 175 60
           C170 80, 150 105, 125 120
           C135 105, 140 85, 135 75
           C130 68, 120 63, 110 65Z"
        fill="#F73582"
      />
      {/* Nhi hoa */}
      <circle cx="100" cy="95" r="8" fill="#F73582" opacity="0.6" />
      {/* Cuong hoa */}
      <path
        d="M100 160 L100 185"
        stroke="#F73582"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* La ben trai */}
      <path
        d="M100 175
           C85 172, 60 168, 50 158
           C55 165, 70 172, 95 178Z"
        fill="#F73582"
        opacity="0.5"
      />
      {/* La ben phai */}
      <path
        d="M100 175
           C115 172, 140 168, 150 158
           C145 165, 130 172, 105 178Z"
        fill="#F73582"
        opacity="0.5"
      />
    </svg>
  );
}
