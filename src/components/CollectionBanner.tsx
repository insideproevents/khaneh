import { useState, useEffect, useRef } from 'react';

interface CollectionBannerProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function CollectionBanner({ title, image, subtitle }: CollectionBannerProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset(progress * 40 - 20);
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
        className="absolute inset-0 w-full h-full object-cover scale-110 will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-4 py-12">
        <h2 className="font-serif text-[36px] md:text-[52px] font-light text-white tracking-wide">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[14px] md:text-[16px] text-white/80 mt-2 font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
