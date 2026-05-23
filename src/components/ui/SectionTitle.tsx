import LotusPetalIcon from './LotusPetalIcon';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  id,
  className = '',
}: SectionTitleProps) {
  return (
    <div id={id} className={`scroll-mt-24 text-center mb-10 ${className}`}>
      <h2 className="section-display-title font-heading text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
        {title}
      </h2>

      {/* Duong trang tri voi cham sen o giua */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="block h-[1px] w-12 bg-lotus-pink/40" />
        <LotusPetalIcon className="h-3 w-3 text-lotus-pink" />
        <span className="block h-[1px] w-12 bg-lotus-pink/40" />
      </div>

      {subtitle && (
        <p className="mt-3 text-gray-sub text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
