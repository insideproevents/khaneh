import { useState, useEffect, useRef } from 'react';

interface CollectionBannerProps {
  title: string;
  image: string;
  subtitle?: string;
  overlay?: boolean;
}

export default function CollectionBanner({ title, image, subtitle, overlay = true }: CollectionBannerProps) {
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(1.1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setOffset(progress * 100 - 50);
      setScale(1 + progress * 0.2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative w-full min-h-[220px] md:min-h-[280px] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-100"
        style={{
          transform: `translateY(${offset}px) scale(${scale})`,
        }}
      />
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 text-center px-4 py-12">
        <h2 className="font-serif text-[36px] md:text-[52px] font-light text-white tracking-wide drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-[14px] md:text-[16px] text-white/90 mt-2 font-sans drop-shadow" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
