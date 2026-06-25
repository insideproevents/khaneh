interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-[32px] md:text-[40px] text-azul-profundo font-normal">
        {title}
      </h2>
      <div className="w-10 h-0.5 bg-arena mx-auto mt-3" />
    </div>
  );
}
