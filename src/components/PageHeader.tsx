interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="w-full bg-taupe py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h1 className="font-serif text-[36px] md:text-[48px] font-light text-white tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
}
