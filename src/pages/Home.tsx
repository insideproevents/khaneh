import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CollectionBanner from '@/components/CollectionBanner';
import SectionTitle from '@/components/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { products, getProductsByCollection, getDiscountedProducts } from '@/data/products';
import { collections } from '@/data/collections';

/* ─── Hero Carousel ─── */
const heroSlides = [
  {
    image: '/assets/hero-banner-1.jpg',
    title: 'Alfombras que\nTransforman Espacios',
    subtitle: 'Coleccion exclusiva de alfombras hechas a mano',
    cta: 'Ver Coleccion',
    ctaLink: '/coleccion/newtri',
  },
  {
    image: '/assets/hero-banner-2.jpg',
    title: 'El Arte de\nHabitar con Elegancia',
    subtitle: 'Tradicion textil, diseno contemporaneo',
    cta: 'Explorar',
    ctaLink: '/coleccion/vintage-contemporaneas',
  },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % heroSlides.length);
  }, []);

  const prev = () => {
    setCurrent(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(next, 6000);
    return () => { if (timeoutRef.current) clearInterval(timeoutRef.current); };
  }, [next]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] min-h-[450px] max-h-[700px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[56px] lg:text-[64px] font-light text-white leading-tight whitespace-pre-line">
                {slide.title}
              </h2>
              <p className="text-[15px] md:text-[18px] text-white/85 mt-4 font-sans">
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink}
                className="inline-block mt-8 px-8 py-3.5 bg-white text-azul-profundo text-button uppercase tracking-wider hover:bg-arena hover:text-white transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Shop by Size ─── */
const sizeCategories = [
  { name: 'Extra grandes', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <rect x="5" y="5" width="70" height="50" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="15" y="15" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="45" y="15" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="15" y="38" width="20" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="45" y="38" width="20" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
      <circle cx="40" cy="32" r="4" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
  { name: 'Grandes', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <rect x="8" y="8" width="64" height="44" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="20" y="18" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="42" y="18" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="20" y="36" width="40" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
  { name: 'Medianas', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <rect x="15" y="10" width="50" height="40" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="22" y="20" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="42" y="20" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <circle cx="32" cy="38" r="3" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
  { name: 'Pequenas', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <rect x="20" y="15" width="40" height="30" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="28" y="22" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
      <circle cx="50" cy="35" r="4" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
  { name: 'Circulares', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <circle cx="40" cy="30" r="22" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="40" cy="30" r="12" stroke="currentColor" strokeWidth="1"/>
      <rect x="36" y="8" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="36" y="46" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
  { name: 'Pasillos', icon: (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      <rect x="20" y="5" width="40" height="50" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="28" y="15" width="24" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="28" y="30" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="1"/>
      <rect x="28" y="42" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
];

function ShopBySize() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-marfil py-16 md:py-20">
      <div className={`max-w-content mx-auto px-4 md:px-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <SectionTitle title="COMPRAR POR TAMANO" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {sizeCategories.map(size => (
            <Link
              key={size.name}
              to={`/coleccion/all?size=${encodeURIComponent(size.name)}`}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-12 text-taupe group-hover:text-arena transition-colors duration-300">
                {size.icon}
              </div>
              <span className="text-[13px] md:text-[14px] font-medium text-azul-profundo group-hover:text-arena transition-colors text-center">
                {size.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Product Carousel ─── */
function ProductCarousel({ products: prods, title, bannerImage, collectionSlug, overlay }: {
  products: typeof products;
  title: string;
  bannerImage: string;
  collectionSlug: string;
  overlay?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal();

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="w-full">
      <CollectionBanner title={title} image={bannerImage} overlay={overlay} />
      <div className={`max-w-content mx-auto px-4 md:px-8 py-10 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {prods.map(product => (
              <div key={product.id} className="min-w-[240px] md:min-w-[260px] w-[240px] md:w-[260px] shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/3 -translate-x-3 w-10 h-10 bg-white border border-gris-claro flex items-center justify-center text-taupe hover:bg-marfil hover:border-arena transition-colors shadow-sm z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/3 translate-x-3 w-10 h-10 bg-white border border-gris-claro flex items-center justify-center text-taupe hover:bg-marfil hover:border-arena transition-colors shadow-sm z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-center mt-6">
          <Link
            to={`/coleccion/${collectionSlug}`}
            className="inline-block px-8 py-3 bg-azul-profundo text-white text-button uppercase tracking-wider hover:bg-azul-profundo/85 transition-colors"
          >
            Ver mas &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-marfil py-20 md:py-28">
      <div className={`max-w-2xl mx-auto px-4 text-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-6 text-arena">
          <path d="M12 36h24M16 36V24c0-4.4 3.6-8 8-8s8 3.6 8 8v12M14 20h4M30 20h4M18 12c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 36v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M22 8c0-1.1.9-2 2-2s2 .9 2 2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <h2 className="font-serif text-[32px] md:text-[40px] text-azul-profundo mb-4">
          TU CASA CALIDA Y ACOGEDORA
        </h2>
        <p className="text-[15px] text-taupe leading-relaxed mb-8">
          Las alfombras nos ayudan a establecer espacios, amarrar elementos, invitan a estar y dan caracter unico a los lugares. Encuentra la alfombra que deja tu casa increible hoy.
        </p>
        <Link
          to="/coleccion/descuentos"
          className="inline-block px-8 py-3.5 bg-azul-profundo text-white text-button uppercase tracking-wider hover:bg-azul-profundo/85 transition-colors"
        >
          VER DESCUENTOS
        </Link>
      </div>
    </section>
  );
}

/* ─── Discounts Grid ─── */
function DiscountsGrid() {
  const { ref, isVisible } = useScrollReveal();
  const discounted = getDiscountedProducts();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-20">
      <div className={`max-w-content mx-auto px-4 md:px-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <SectionTitle title="OFERTAS ESPECIALES" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discounted.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features Row ─── */
const features = [
  { icon: Truck, title: 'Envio rapido y gratis', desc: 'Valido para todo Chile por cualquier compra.' },
  { icon: ShieldCheck, title: 'Satisfaccion garantizada', desc: 'No te gusto la alfombra? Enviiala de vuelta y te devolvemos tu plata.' },
  { icon: CreditCard, title: '6 cuotas sin interes', desc: 'Paga en hasta 6 cuotas sin interes con tarjetas bancarias.' },
];

function FeaturesRow() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-white border-t border-gris-claro py-14">
      <div className={`max-w-content mx-auto px-4 md:px-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(f => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <f.icon size={36} className="text-arena mb-3" />
              <h3 className="text-[14px] font-semibold text-azul-profundo uppercase tracking-wider mb-1.5">
                {f.title}
              </h3>
              <p className="text-[13px] text-taupe leading-relaxed max-w-xs">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Text ─── */
function AboutText() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-marfil py-16 md:py-20">
      <div className={`max-w-3xl mx-auto px-4 md:px-8 text-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <p className="text-[15px] text-taupe leading-[1.8] mb-6">
          <strong className="text-azul-profundo">Aguilera Khaneh</strong> es una tienda lider en la venta de{' '}
          <Link to="/coleccion/vintage-originales" className="text-arena underline hover:no-underline">alfombras orientales</Link>{' '}
          y <Link to="/coleccion/newtri" className="text-arena underline hover:no-underline">modernas</Link>.
          Desde 2016 estamos concentrados en importar y vender alfombras premium a los mejores precios,
          cubriendo una gran gama de estilos que van desde{' '}
          <Link to="/coleccion/vintage-originales" className="text-arena underline hover:no-underline">alfombras vintage antiguas</Link>{' '}
          a <Link to="/coleccion/lavables" className="text-arena underline hover:no-underline">alfombras modernas</Link>.
        </p>
        <p className="text-[15px] text-taupe leading-[1.8] mb-6">
          Con las ganas de ser la tienda online de alfombras mas completa del pais, todo lo anterior lo
          trabajamos en tanto lana como materiales sinteticos permitiendonos asi tener mas looks distintos
          y una gran variedad de precios para nuestros clientes.
        </p>
        <p className="text-[15px] text-taupe leading-[1.8]">
          A lo anterior cabe destacar que cuando compras en Aguilera Khaneh, el envio es gratis a todo
          Chile continental, no importa el valor de tu compra. Si al recibir la alfombra ves que no es
          lo que querias, la puedes cambiar por otra o devolverla y te devolvemos tu dinero.
        </p>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <Layout>
      <img src="/assets/fondo_hero_khaneh.png" alt="Aguilera Khaneh" className="w-full mx-auto h-auto block" />
      <HeroBanner />
      <ShopBySize />

      {collections.map(col => {
        const colProducts = getProductsByCollection(col.slug);
        if (colProducts.length === 0) return null;
        return (
          <ProductCarousel
            key={col.slug}
            title={col.name}
            bannerImage={col.banner}
            products={colProducts}
            collectionSlug={col.slug}
            overlay={col.overlay}
          />
        );
      })}

      <CTASection />
      <DiscountsGrid />
      <FeaturesRow />
      <AboutText />
    </Layout>
  );
}
