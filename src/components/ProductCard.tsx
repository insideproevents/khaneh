import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';
import type { Product } from '@/data/products';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect, useRef } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const { addItem } = useCart();
  const inWishlist = isInWishlist(product.id);
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
    : 0;
  const [offset, setOffset] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setOffset(progress * 30 - 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="group bg-white">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gris-claro/30">
        <Link to={`/producto/${product.slug}`}>
          <img
            ref={imgRef}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.03]"
            style={{ 
              transform: `translateY(${offset}px)`,
              transition: 'transform 0.1s ease-out',
            }}
            loading="lazy"
          />
        </Link>

        {/* Discount badge */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-arena text-white text-[11px] font-semibold px-2.5 py-1">
            -{discountPercent}%
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => addItem(product)}
              className="bg-white text-azul-profundo text-[11px] font-semibold uppercase tracking-wider px-4 py-2.5 hover:bg-azul-profundo hover:text-white transition-colors shadow-md"
            >
              Agregar al carro
            </button>
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => toggleItem(product)}
              className={`w-8 h-8 flex items-center justify-center bg-white shadow-md transition-colors ${inWishlist ? 'text-rojo-oferta' : 'text-azul-profundo hover:text-rojo-oferta'}`}
            >
              <Heart size={15} fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
            <Link
              to={`/producto/${product.slug}`}
              className="w-8 h-8 flex items-center justify-center bg-white text-azul-profundo shadow-md hover:text-arena transition-colors"
            >
              <Eye size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Info */}
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
          {hasDiscount && (
            <span className="text-[12px] text-gris-medio line-through">
              ${product.oldPrice!.toLocaleString('es-CL')}
            </span>
          )}
        </div>
        <p className="text-[12px] text-gris-medio mt-0.5">{product.dimensions}</p>
      </div>
    </div>
  );
}
