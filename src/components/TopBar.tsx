import { Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full h-[38px] bg-arena flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
          <Facebook size={15} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
          <Instagram size={15} />
        </a>
      </div>
      <p className="text-white text-announcement uppercase tracking-wider">
        Hasta 6 Cuotas sin interes — Despacho a todo Chile.
      </p>
      <div className="w-[60px]" />
    </div>
  );
}
