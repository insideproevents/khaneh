interface CollectionBannerProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function CollectionBanner({ title, image, subtitle }: CollectionBannerProps) {
  return (
    <div className="relative w-full min-h-[220px] md:min-h-[280px] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
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
