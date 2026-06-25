import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navCollections } from '@/data/collections';

const mainNav = [
  { label: 'TIPOS', href: '#', hasDropdown: true },
  { label: 'TAMANO', href: '#', hasDropdown: true },
  { label: 'COLOR', href: '#', hasDropdown: true },
  { label: 'ESTILO', href: '#', hasDropdown: true },
  { label: 'DESCUENTOS', href: '/coleccion/descuentos', hasDropdown: false },
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-marfil border-b border-gris-claro relative z-40">
      <div className="w-full hidden md:block">
        <img
          src="/assets/logo_banner_khaneh.png"
          alt="Khaneh Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full block md:hidden">
        <img
          src="/assets/logo_banner_khaneh.png"
          alt="Khaneh Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-content mx-auto h-[50px] hidden md:flex items-center justify-center gap-8 lg:gap-10">
        {mainNav.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.hasDropdown ? (
              <button className="text-nav uppercase text-azul-profundo hover:text-arena transition-colors duration-300">
                {item.label}
              </button>
            ) : (
              <Link
                to={item.href}
                className="text-nav uppercase text-azul-profundo hover:text-arena transition-colors duration-300"
              >
                {item.label}
              </Link>
            )}

            {/* Dropdown */}
            {item.hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[220px]">
                <div className="bg-white border border-gris-claro shadow-lg py-3">
                  {item.label === 'TIPOS' && (
                    <>
                      <p className="px-4 py-1.5 text-[10px] uppercase tracking-wider text-gris-medio font-semibold">Colecciones</p>
                      {navCollections.map(col => (
                        <Link
                          key={col.slug}
                          to={`/coleccion/${col.slug}`}
                          className="block px-4 py-2 text-[13px] text-azul-profundo hover:text-arena hover:bg-marfil/50 transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </>
                  )}
                  {item.label === 'TAMANO' && (
                    <>
                      <p className="px-4 py-1.5 text-[10px] uppercase tracking-wider text-gris-medio font-semibold">Dimensiones</p>
                      {['Extra Grandes', 'Grandes', 'Medianas', 'Pequenas', 'Circulares', 'Pasillos'].map(size => (
                        <Link
                          key={size}
                          to={`/coleccion/all?size=${size}`}
                          className="block px-4 py-2 text-[13px] text-azul-profundo hover:text-arena hover:bg-marfil/50 transition-colors"
                        >
                          {size}
                        </Link>
                      ))}
                    </>
                  )}
                  {item.label === 'COLOR' && (
                    <>
                      <p className="px-4 py-1.5 text-[10px] uppercase tracking-wider text-gris-medio font-semibold">Colores</p>
                      {['Beige', 'Gris', 'Azul', 'Rojo', 'Verde', 'Multicolor', 'Blanco y Negro'].map(color => (
                        <Link
                          key={color}
                          to={`/coleccion/all?color=${color}`}
                          className="block px-4 py-2 text-[13px] text-azul-profundo hover:text-arena hover:bg-marfil/50 transition-colors"
                        >
                          {color}
                        </Link>
                      ))}
                    </>
                  )}
                  {item.label === 'ESTILO' && (
                    <>
                      <p className="px-4 py-1.5 text-[10px] uppercase tracking-wider text-gris-medio font-semibold">Estilos</p>
                      {['Moderno', 'Vintage', 'Bohemio', 'Minimalista', 'Oriental', 'Hygge'].map(style => (
                        <Link
                          key={style}
                          to={`/coleccion/all?style=${style}`}
                          className="block px-4 py-2 text-[13px] text-azul-profundo hover:text-arena hover:bg-marfil/50 transition-colors"
                        >
                          {style}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* ASESORIAS with badge */}
        <Link
          to="/asesorias"
          className="text-nav uppercase text-azul-profundo hover:text-arena transition-colors duration-300 flex items-center gap-2"
        >
          ASESORIAS
          <span className="text-[9px] font-medium text-dorado border border-dorado px-1.5 py-0.5 rounded-[2px]">Nuevo</span>
        </Link>
      </div>
    </nav>
  );
}
