import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

export default function Header() {
  const { totalItems, openCart } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="w-full h-[70px] bg-marfil border-b border-gris-claro sticky top-0 z-50">
        <div className="max-w-content mx-auto h-full flex items-center justify-between px-4 md:px-8">
          {/* Left - Welcome */}
          <div className="hidden md:block">
            <p className="text-[13px] text-taupe">Bienvenido a nuestra tienda</p>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} className="text-azul-profundo" /> : <Menu size={22} className="text-azul-profundo" />}
          </button>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src="/assets/logo_new.png" alt="Aguilera Khaneh" className="h-[120px] md:h-[150px] w-auto object-contain" />
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-azul-profundo hover:text-arena transition-colors"
            >
              <Search size={20} />
            </button>
            <Link to="/favoritos" className="relative text-azul-profundo hover:text-arena transition-colors">
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-arena text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={openCart}
              className="relative text-azul-profundo hover:text-arena transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-arena text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gris-claro shadow-md z-50">
            <form onSubmit={handleSearch} className="max-w-content mx-auto px-4 md:px-8 py-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Buscar alfombras..."
                  className="flex-1 h-[44px] border border-gris-claro px-4 text-[14px] focus:border-arena focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="h-[44px] px-6 bg-azul-profundo text-white text-button uppercase hover:bg-azul-profundo/90 transition-colors"
                >
                  Buscar
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="h-[44px] px-4 border border-gris-claro text-taupe hover:border-arena transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-marfil z-40 md:hidden overflow-y-auto">
          <nav className="flex flex-col p-6 gap-4">
            <Link to="/coleccion/newtri" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">NEWTRI</Link>
            <Link to="/coleccion/vintage-contemporaneas" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">VINTAGE CONTEMPORANEAS</Link>
            <Link to="/coleccion/vintage-originales" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">VINTAGE ORIGINALES</Link>
            <Link to="/coleccion/lavables" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">LAVABLES</Link>
            <Link to="/coleccion/hygge" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">HYGGE</Link>
            <Link to="/coleccion/sisal" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">SISAL Y FIBRAS NATURALES</Link>
            <Link to="/coleccion/neutras" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">NEUTRAS Y NATURALES</Link>
            <Link to="/coleccion/blanco-negro" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">BLANCO Y NEGRO</Link>
            <Link to="/coleccion/patchworks" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-azul-profundo py-2 border-b border-gris-claro">PATCHWORKS</Link>
            <div className="mt-4 pt-4 border-t border-gris-claro">
              <p className="text-[12px] text-taupe uppercase tracking-wider mb-2">Informacion</p>
              <Link to="/envios" onClick={() => setMobileMenuOpen(false)} className="block text-[14px] text-taupe py-1">Politica de Envios</Link>
              <Link to="/devoluciones" onClick={() => setMobileMenuOpen(false)} className="block text-[14px] text-taupe py-1">Devoluciones y Garantia</Link>
              <Link to="/terminos" onClick={() => setMobileMenuOpen(false)} className="block text-[14px] text-taupe py-1">Terminos y Condiciones</Link>
              <Link to="/privacidad" onClick={() => setMobileMenuOpen(false)} className="block text-[14px] text-taupe py-1">Politica de Privacidad</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
