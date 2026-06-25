import { Link } from 'react-router-dom';

export default function WelcomeSection() {
  return (
    <section className="w-full bg-marfil py-8 md:py-12">
      <div className="max-w-content mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[18px] md:text-[22px] text-taupe font-sans text-center md:text-left">
          Bienvenido a nuestra tienda
        </p>
        <Link to="/" className="shrink-0">
          <img src="/assets/logo_banner_khaneh.png" alt="Aguilera Khaneh" className="h-[60px] md:h-[80px] w-auto object-contain" />
        </Link>
      </div>
    </section>
  );
}
