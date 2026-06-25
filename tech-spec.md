# Aguilera Khaneh — Especificación Técnica

## Dependencias

| Paquete | Versión | Uso |
|---------|---------|-----|
| react | ^18.3.0 | Framework UI |
| react-dom | ^18.3.0 | Renderizado DOM |
| react-router-dom | ^7.0.0 | Routing SPA (Home, Coleccion, Producto, estaticas) |
| lucide-react | ^0.460.0 | Iconos (truck, shield, credit-card, heart, search, menu, etc.) |
| tailwindcss | ^3.4.0 | Estilos utility-first |
| typescript | ^5.6.0 | Tipado estatico |
| vite | ^6.0.0 | Bundler y dev server |
| @vitejs/plugin-react | ^4.3.0 | Plugin React para Vite |

> No se necesitan animacion externas — todo scroll/transition con CSS nativo + IntersectionObserver.

## Inventario de Componentes

### Layout (compartidos por todas las paginas)

| Componente | Fuente | Notas |
|------------|--------|-------|
| TopBar | Custom | Barra promo 38px, fija |
| Header | Custom | Logo + buscar/wishlist/cart, sticky con blur |
| Navigation | Custom | Links TIPOS/TAMAÑO/COLOR/ESTILO/DESCUENTOS/ASESORIAS |
| Footer | Custom | 4 columnas + newsletter |
| WhatsAppButton | Custom | Fixed bottom-left |
| ScrollToTop | Custom | Aparece post-scroll 400px |
| Layout | Custom | Wrapper: TopBar + Header + Nav + children + Footer + WhatsApp + ScrollToTop |
| CartDrawer | Custom | Slide-in derecha, portaled |

### Secciones de Pagina (page-specific)

#### Home

| Componente | Notas |
|------------|-------|
| HeroBanner | Carrusel 2-3 slides, autoplay 6s, flechas + dots |
| ShopBySize | Grid 6 items con ilustraciones SVG |
| CollectionSection | Banner + carrusel productos (reutilizable para cada coleccion) |
| CTACozy | Icono + titulo + descripcion + CTA |
| DiscountsGrid | Grid 4 productos en oferta |
| FeaturesRow | 3 features con iconos |
| AboutText | Bloque texto centrado |

#### Coleccion

| Componente | Notas |
|------------|-------|
| FilterSidebar | 280px, acordeon filtros (tamaño/color/material/estilo) |
| ProductGrid | Grid 3 columnas, controles vista, sort dropdown, paginacion |

#### Producto

| Componente | Notas |
|------------|-------|
| ImageGallery | Main image + thumbnails + zoom modal |
| ProductInfo | Nombre, precio, stock, qty, add-to-cart, buy-now |
| TrustBadges | 3 badges fila |
| ProductAccordion | Tabs: Caracteristicas/Descripcion/Opiniones |
| RelatedProducts | Carrusel 4 items |

#### Paginas Estaticas (Envios, Devoluciones, Terminos, Privacidad)

| Componente | Notas |
|------------|-------|
| StaticPage | PageHeader + contenido HTML/markdown renderizado |

#### Wishlist / Busqueda

| Componente | Notas |
|------------|-------|
| WishlistPage | Grid productos con boton eliminar |
| SearchPage | Input grande + resultados grid |

### Componentes Reutilizables

| Componente | Fuente | Uso |
|------------|--------|-----|
| ProductCard | Custom | TODAS las paginas con productos — Home, Coleccion, Wishlist, Busqueda, RelatedProducts |
| CollectionBanner | Custom | Home sections — banner full-width con overlay |
| SectionTitle | Custom | Home sections — titulo + linea decorativa dorada |
| CarouselControls | Custom | Carruseles — flechas izq/der |
| Breadcrumbs | Custom | Coleccion, Producto |
| PageHeader | Custom | Titulo pagina con fondo Taupe |
| QuantitySelector | Custom | Producto — +/- cantidad |

## Hooks Personalizados

| Hook | Uso |
|------|-----|
| useScrollReveal | IntersectionObserver para fade-in de secciones al scroll |
| useCart | Context + state para carrito (add, remove, update qty, total) |
| useWishlist | Context + state para favoritos (add, remove, check) |
| useCarousel | Logica de carrusel (index, autoplay, prev/next) |

## Estado y Logica

### Manejo de Estado (React Context)

- **CartContext**: items[], isOpen, addItem(), removeItem(), updateQty(), totalItems, totalPrice
- **WishlistContext**: items[], addItem(), removeItem(), isInWishlist()
- **UIContext**: cartOpen, setCartOpen, searchOpen, mobileMenuOpen

### Routing

| Ruta | Pagina |
|------|--------|
| / | Home |
| /coleccion/:slug | Coleccion |
| /producto/:slug | Producto |
| /carrito | Carrito (full page) |
| /favoritos | Wishlist |
| /buscar | Busqueda |
| /envios | Politica Envios |
| /devoluciones | Devoluciones Garantia |
| /terminos | Terminos Condiciones |
| /privacidad | Politica Privacidad |

### Decisiones de Arquitectura

1. **No shadcn/ui components**: Todos los componentes son custom porque el diseño tiene estetica muy especifica (0 border-radius, colores custom, layout particular) que no se alinea con los defaults de shadcn.

2. **CSS puro + Tailwind**: Todas las animaciones son CSS transitions o IntersectionObserver — sin libreria de animacion.

3. **Imagenes**: Todas generadas via AI image generation, guardadas en public/assets/. Lazy loading nativo con loading="lazy".

4. **Datos de productos**: Mock data en src/data/products.ts y src/data/collections.ts — array de objetos tipados.

5. **Mobile-first responsive**: Tailwind breakpoints sm/md/lg/xl.

6. **CartDrawer como portal**: Renderizado fuera del Layout para z-index correcto sobre overlay.
