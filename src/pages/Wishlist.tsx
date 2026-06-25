import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useWishlist } from '@/contexts/WishlistContext';

export default function Wishlist() {
  const { items, removeItem } = useWishlist();

  return (
    <Layout>
      <PageHeader title="Mis Favoritos" />
      <div className="max-w-content mx-auto px-4 md:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={48} className="text-gris-claro mx-auto mb-4" />
            <p className="text-[16px] text-azul-profundo mb-2">No tienes favoritos aun</p>
            <p className="text-[14px] text-taupe mb-6">Guarda las alfombras que mas te gusten</p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-azul-profundo text-white text-button uppercase tracking-wider hover:bg-azul-profundo/85 transition-colors"
            >
              Ver Alfombras
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(product => (
              <div key={product.id} className="relative bg-white group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gris-claro/30">
                  <Link to={`/producto/${product.slug}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white flex items-center justify-center text-taupe hover:text-rojo-oferta transition-colors shadow-md"
                  >
                    <X size={15} />
                  </button>
                </div>
                <div className="pt-3 pb-2 px-1">
                  <Link to={`/producto/${product.slug}`}>
                    <h3 className="text-[14px] font-semibold text-azul-profundo truncate hover:text-arena transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[14px] font-semibold text-azul-profundo">
                      ${product.price.toLocaleString('es-CL')}
                    </span>
                    {product.oldPrice && (
                      <span className="text-[12px] text-gris-medio line-through">
                        ${product.oldPrice.toLocaleString('es-CL')}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-gris-medio mt-0.5">{product.dimensions}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
