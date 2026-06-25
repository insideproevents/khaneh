import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import Home from '@/pages/Home';
import Coleccion from '@/pages/Coleccion';
import Producto from '@/pages/Producto';
import Wishlist from '@/pages/Wishlist';
import Search from '@/pages/Search';
import { PoliticaEnvios, Devoluciones, Terminos, Privacidad } from '@/pages/StaticPage';

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coleccion/:slug" element={<Coleccion />} />
          <Route path="/producto/:slug" element={<Producto />} />
          <Route path="/favoritos" element={<Wishlist />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/envios" element={<PoliticaEnvios />} />
          <Route path="/devoluciones" element={<Devoluciones />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </WishlistProvider>
    </CartProvider>
  );
}
