import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { navCollections } from '@/data/collections';

const sizeLinks = [
  '100 x 150cm', '120 x 180cm', '150 x 200cm', '170 x 240cm',
  '200 x 300cm', '250 x 300cm', '250 x 350cm', '300 x 400cm',
  'Bajadas de cama', 'Circulares', 'Cuadradas', 'Pasillos',
];

const infoLinks = [
  { label: 'Politica de envios', href: '/envios' },
  { label: 'Devoluciones y garantia', href: '/devoluciones' },
  { label: 'Terminos y condiciones', href: '/terminos' },
  { label: 'Politica de privacidad', href: '/privacidad' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="w-full bg-marfil border-t border-gris-claro">
      <div className="max-w-content mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Logo & Contact */}
          <div>
            <Link to="/">
              <h2 className="font-serif text-[24px] font-semibold text-azul-profundo tracking-[2px] mb-6">
                AGUILERA KHANEH
              </h2>
            </Link>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-taupe mt-0.5 shrink-0" />
                <p className="text-[13px] text-taupe">Av. Las Condes 10521, Local 1<br />Las Condes, Santiago</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-taupe mt-0.5 shrink-0" />
                <p className="text-[13px] text-taupe">Lun a Vie 11:00 a 19:00<br />Sab 11:00 a 14:00<br />Domingos y feriados cerrados</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-taupe shrink-0" />
                <a href="mailto:contacto@aguilerakhaneh.cl" className="text-[13px] text-taupe hover:text-arena transition-colors">
                  contacto@aguilerakhaneh.cl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-taupe shrink-0" />
                <a href="https://wa.me/56981892341" className="text-[13px] text-taupe hover:text-arena transition-colors">
                  +56 9 8189 2341
                </a>
              </div>
              <p className="text-[11px] text-gris-medio ml-7">(Solo whatsapp)</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-azul-profundo hover:text-arena transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-azul-profundo hover:text-arena transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Collections */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-azul-profundo mb-5">
              COLECCIONES
            </h3>
            <ul className="space-y-2.5">
              {navCollections.map(col => (
                <li key={col.slug}>
                  <Link
                    to={`/coleccion/${col.slug}`}
                    className="text-[13px] text-taupe hover:text-arena transition-colors uppercase"
                  >
                    {col.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Sizes & Info */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-azul-profundo mb-5">
              TAMANOS
            </h3>
            <ul className="space-y-2.5 mb-8">
              {sizeLinks.map(size => (
                <li key={size}>
                  <Link
                    to={`/coleccion/all?size=${size}`}
                    className="text-[13px] text-taupe hover:text-arena transition-colors"
                  >
                    {size}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-azul-profundo mb-5">
              INFORMACION
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-taupe hover:text-arena transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-azul-profundo mb-5">
              NEWSLETTER
            </h3>
            <p className="text-[13px] text-taupe mb-4 leading-relaxed">
              Suscribete a nuestro newsletter para enterarte de nuestras mas nuevas alfombras y promociones!
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 h-[44px] border border-gris-claro px-3 text-[13px] bg-white focus:border-arena focus:outline-none"
              />
              <button
                type="submit"
                className="h-[44px] px-4 bg-arena text-white text-[12px] font-semibold uppercase hover:bg-arena/90 transition-colors shrink-0"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gris-claro">
        <div className="max-w-content mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-gris-medio">
            Aguilera Khaneh &copy; 2025 Todos los derechos reservados.
          </p>
          <Link to="/buscar" className="text-[12px] text-gris-medio hover:text-arena transition-colors">
            Busqueda
          </Link>
        </div>
      </div>
    </footer>
  );
}
