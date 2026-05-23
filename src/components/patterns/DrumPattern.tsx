interface DrumPatternProps {
  className?: string;
  opacity?: number;
}

export default function DrumPattern({
  className = '',
  opacity = 0.03,
}: DrumPatternProps) {
  const strokeColor = '#F73582';

  // Tao cac tia mat troi toa ra tu tam
  const sunRays = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    const rad = (angle * Math.PI) / 180;
    const x1 = 150 + Math.cos(rad) * 18;
    const y1 = 150 + Math.sin(rad) * 18;
    const x2 = 150 + Math.cos(rad) * 30;
    const y2 = 150 + Math.sin(rad) * 30;
    return (
      <line
        key={`ray-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    );
  });

  // Tao cac cham trang tri tren vong tron
  const outerDots = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const cx = 150 + Math.cos(rad) * 55;
    const cy = 150 + Math.sin(rad) * 55;
    return (
      <circle
        key={`dot-outer-${i}`}
        cx={cx}
        cy={cy}
        r="1.5"
        fill={strokeColor}
      />
    );
  });

  // Cac hoa van hinh hoc giua cac vong
  const geometricMarks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    const rad = (angle * Math.PI) / 180;
    const cx = 150 + Math.cos(rad) * 85;
    const cy = 150 + Math.sin(rad) * 85;
    const nextRad = ((angle + 15) * Math.PI) / 180;
    const prevRad = ((angle - 15) * Math.PI) / 180;
    const x1 = 150 + Math.cos(prevRad) * 78;
    const y1 = 150 + Math.sin(prevRad) * 78;
    const x2 = 150 + Math.cos(nextRad) * 78;
    const y2 = 150 + Math.sin(nextRad) * 78;
    return (
      <g key={`geo-${i}`}>
        <circle cx={cx} cy={cy} r="2" fill={strokeColor} />
        <line
          x1={x1}
          y1={y1}
          x2={cx}
          y2={cy}
          stroke={strokeColor}
          strokeWidth="0.5"
        />
        <line
          x1={cx}
          y1={cy}
          x2={x2}
          y2={y2}
          stroke={strokeColor}
          strokeWidth="0.5"
        />
      </g>
    );
  });

  // Cac hinh chim lac giua cac vong ngoai
  const birdMarks = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8;
    const rad = (angle * Math.PI) / 180;
    const cx = 150 + Math.cos(rad) * 115;
    const cy = 150 + Math.sin(rad) * 115;
    return (
      <path
        key={`bird-${i}`}
        d={`M${cx - 5} ${cy + 2} Q${cx} ${cy - 4} ${cx + 5} ${cy + 2}`}
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        transform={`rotate(${angle}, ${cx}, ${cy})`}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Ngoi sao trung tam */}
      <circle cx="150" cy="150" r="10" fill={strokeColor} />

      {/* Cac tia mat troi */}
      {sunRays}

      {/* Vong tron dong tam */}
      <circle
        cx="150"
        cy="150"
        r="38"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
      />
      <circle
        cx="150"
        cy="150"
        r="45"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
      />

      {/* Cham trang tri vong ngoai */}
      {outerDots}

      <circle
        cx="150"
        cy="150"
        r="65"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="150"
        cy="150"
        r="72"
        stroke={strokeColor}
        strokeWidth="0.5"
        fill="none"
      />

      {/* Hoa van hinh hoc */}
      {geometricMarks}

      <circle
        cx="150"
        cy="150"
        r="95"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="150"
        cy="150"
        r="100"
        stroke={strokeColor}
        strokeWidth="0.5"
        fill="none"
      />

      {/* Hinh chim lac */}
      {birdMarks}

      {/* Vong ngoai cung */}
      <circle
        cx="150"
        cy="150"
        r="130"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
      />
      <circle
        cx="150"
        cy="150"
        r="135"
        stroke={strokeColor}
        strokeWidth="0.6"
        fill="none"
      />
      <circle
        cx="150"
        cy="150"
        r="142"
        stroke={strokeColor}
        strokeWidth="0.3"
        fill="none"
      />
    </svg>
  );
}
