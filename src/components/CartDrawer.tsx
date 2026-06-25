import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-[70] shadow-xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gris-claro">
          <h2 className="font-serif text-[18px] font-medium text-azul-profundo">
            Carro de compras
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-taupe hover:text-azul-profundo transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gris-claro mb-4" />
              <p className="text-[15px] text-azul-profundo mb-2">Tu carro esta vacio</p>
              <p className="text-[13px] text-taupe mb-4">Explora nuestras colecciones</p>
              <Link
                to="/"
                onClick={closeCart}
                className="px-6 py-3 bg-azul-profundo text-white text-button uppercase hover:bg-azul-profundo/90 transition-colors"
              >
                Volver a la tienda
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 pb-4 border-b border-gris-claro">
                  <Link to={`/producto/${item.product.slug}`} onClick={closeCart}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-[80px] h-[100px] object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/producto/${item.product.slug}`}
                      onClick={closeCart}
                      className="text-[13px] font-medium text-azul-profundo hover:text-arena transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-[12px] text-gris-medio mt-0.5">{item.product.dimensions}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gris-claro">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:bg-gris-claro transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-[12px] text-azul-profundo">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:bg-gris-claro transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] font-semibold text-azul-profundo">
                          ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                        </p>
                        {item.product.oldPrice && (
                          <p className="text-[11px] text-gris-medio line-through">
                            ${(item.product.oldPrice * item.quantity).toLocaleString('es-CL')}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gris-medio hover:text-rojo-oferta transition-colors self-start"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gris-claro px-6 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-taupe">Subtotal</span>
              <span className="text-[16px] font-semibold text-azul-profundo">
                ${totalPrice.toLocaleString('es-CL')}
              </span>
            </div>
            <p className="text-[11px] text-gris-medio">
              Tu codigo de cupon se aplicara en el checkout
            </p>
            <button className="w-full h-[52px] bg-azul-profundo text-white text-button uppercase hover:bg-azul-profundo/90 transition-colors">
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}
