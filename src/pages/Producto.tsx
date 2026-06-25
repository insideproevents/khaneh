import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Truck, CreditCard, Store, Plus, Minus } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

export default function Producto() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'caracteristicas' | 'descripcion' | 'opiniones'>('caracteristicas');
  const [isGift, setIsGift] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-content mx-auto px-4 md:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl text-azul-profundo mb-4">Producto no encontrado</h2>
          <Link to="/" className="text-arena underline hover:no-underline">Volver al inicio</Link>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
    : 0;

  // Related products (same collection, different product)
  const relatedProducts = products
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="max-w-content mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[13px]">
          <Link to="/" className="text-taupe hover:text-arena transition-colors">Inicio</Link>
          <ChevronRight size={14} className="text-gris-medio" />
          <Link to={`/coleccion/${product.collection}`} className="text-taupe hover:text-arena transition-colors capitalize">
            {product.collection.replace(/-/g, ' ')}
          </Link>
          <ChevronRight size={14} className="text-gris-medio" />
          <span className="text-azul-profundo truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-content mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] bg-gris-claro/30 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {hasDiscount && (
                <span className="absolute top-4 left-4 bg-arena text-white text-[12px] font-semibold px-3 py-1.5">
                  -{discountPercent}%
                </span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {[product.image, product.image, product.image].map((img, i) => (
                <div key={i} className={`w-16 h-20 border-2 cursor-pointer overflow-hidden ${i === 0 ? 'border-arena' : 'border-gris-claro hover:border-arena'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <h1 className="font-serif text-[28px] md:text-[36px] text-azul-profundo leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              {hasDiscount && (
                <span className="text-[18px] text-gris-medio line-through">
                  ${product.oldPrice!.toLocaleString('es-CL')}
                </span>
              )}
              <span className="text-[22px] md:text-[24px] font-semibold text-azul-profundo">
                ${product.price.toLocaleString('es-CL')}
              </span>
              {product.stock <= 3 && product.stock > 0 && (
                <span className="text-[12px] text-verde-bosque font-medium ml-auto">
                  {product.stock} en stock
                </span>
              )}
            </div>

            <p className="text-[14px] text-taupe leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Gift checkbox */}
            <label className="flex items-center gap-2 mt-5 cursor-pointer">
              <div className={`w-4 h-4 border ${isGift ? 'bg-arena border-arena' : 'border-gris-claro'} flex items-center justify-center transition-colors`}>
                {isGift && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5"/></svg>}
              </div>
              <input type="checkbox" className="sr-only" checked={isGift} onChange={e => setIsGift(e.target.checked)} />
              <span className="text-[13px] text-taupe">Es para un regalo de matrimonio?</span>
            </label>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-5">
              <span className="text-[13px] text-azul-profundo font-medium uppercase">Cantidad</span>
              <div className="flex items-center border border-gris-claro">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:bg-gris-claro transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-[14px] text-azul-profundo border-x border-gris-claro">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:bg-gris-claro transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => addItem(product, quantity)}
                className="flex-1 h-[52px] bg-azul-profundo text-white text-button uppercase tracking-wider hover:bg-azul-profundo/90 transition-colors"
              >
                Agregar al carro
              </button>
              <button
                onClick={() => toggleItem(product)}
                className={`w-[52px] h-[52px] border flex items-center justify-center transition-colors ${inWishlist ? 'border-rojo-oferta text-rojo-oferta' : 'border-gris-claro text-azul-profundo hover:border-rojo-oferta hover:text-rojo-oferta'}`}
              >
                <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
            <button className="w-full h-[52px] bg-arena text-white text-button uppercase tracking-wider hover:bg-arena/90 transition-colors mt-3">
              Comprar ahora
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gris-claro">
              <div className="flex flex-col items-center text-center gap-1.5">
                <Truck size={22} className="text-taupe" />
                <span className="text-[11px] text-taupe leading-tight">Despacho gratis<br />a todo Chile</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <CreditCard size={22} className="text-taupe" />
                <span className="text-[11px] text-taupe leading-tight">6 cuotas sin<br />interes</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <Store size={22} className="text-taupe" />
                <span className="text-[11px] text-taupe leading-tight">Retiro en tienda<br />disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 border-t border-gris-claro">
          <div className="flex border-b border-gris-claro">
            {(['caracteristicas', 'descripcion', 'opiniones'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 text-[13px] font-medium uppercase tracking-wider transition-colors border-b-2 ${activeTab === tab ? 'border-arena text-azul-profundo' : 'border-transparent text-taupe hover:text-azul-profundo'}`}
              >
                {tab === 'caracteristicas' ? 'Caracteristicas' : tab === 'descripcion' ? 'Descripcion' : 'Opiniones'}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 'caracteristicas' && (
              <div className="max-w-lg">
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr className="border-b border-gris-claro">
                      <td className="py-3 text-taupe w-1/3">Tamano</td>
                      <td className="py-3 text-azul-profundo">{product.dimensions}</td>
                    </tr>
                    <tr className="border-b border-gris-claro">
                      <td className="py-3 text-taupe">Color</td>
                      <td className="py-3 text-azul-profundo capitalize">{product.color}</td>
                    </tr>
                    <tr className="border-b border-gris-claro">
                      <td className="py-3 text-taupe">Material</td>
                      <td className="py-3 text-azul-profundo capitalize">{product.material}</td>
                    </tr>
                    <tr className="border-b border-gris-claro">
                      <td className="py-3 text-taupe">Estilo</td>
                      <td className="py-3 text-azul-profundo capitalize">{product.style}</td>
                    </tr>
                    <tr className="border-b border-gris-claro">
                      <td className="py-3 text-taupe">Coleccion</td>
                      <td className="py-3 text-azul-profundo capitalize">{product.collection.replace(/-/g, ' ')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-taupe">Fabricacion</td>
                      <td className="py-3 text-azul-profundo">Hecho a mano</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'descripcion' && (
              <div className="max-w-2xl">
                <p className="text-[15px] text-taupe leading-[1.8]">
                  {product.description} Cada pieza es unica y ha sido cuidadosamente seleccionada
                  por nuestros expertos para garantizar la maxima calidad. Las alfombras de esta coleccion
                  son elaboradas por artesanos con decadas de experiencia, utilizando tecnicas tradicionales
                  que se han transmitido de generacion en generacion.
                </p>
                <p className="text-[15px] text-taupe leading-[1.8] mt-4">
                  El uso de materiales naturales de primera calidad asegura no solo una belleza atemporal,
                  sino tambien una durabilidad excepcional. Recomendamos el uso de base antideslizante
                  para prolongar la vida de la alfombra y evitar accidentes.
                </p>
              </div>
            )}
            {activeTab === 'opiniones' && (
              <div className="max-w-2xl">
                <div className="space-y-6">
                  <div className="border-b border-gris-claro pb-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[14px] font-semibold text-azul-profundo">Maria G.</span>
                      <span className="text-[12px] text-gris-medio">Hace 2 semanas</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={s <= 5 ? '#C9A84C' : '#E8E4DC'}>
                          <path d="M7 0l2.1 4.3L14 5l-3.5 3.4L11.3 14 7 11.6 2.7 14l.8-5.6L0 5l4.9-.7z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-[14px] text-taupe">Excelente calidad, los colores son exactamente como se ven en la foto. El envio fue super rapido!</p>
                  </div>
                  <div className="border-b border-gris-claro pb-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[14px] font-semibold text-azul-profundo">Carlos R.</span>
                      <span className="text-[12px] text-gris-medio">Hace 1 mes</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={s <= 4 ? '#C9A84C' : '#E8E4DC'}>
                          <path d="M7 0l2.1 4.3L14 5l-3.5 3.4L11.3 14 7 11.6 2.7 14l.8-5.6L0 5l4.9-.7z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-[14px] text-taupe">Muy buena compra. La textura es hermosa y le da un toque unico al living. Recomendado.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-[24px] text-azul-profundo mb-8 text-center">
              Tambien te puede gustar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
