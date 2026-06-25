export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number;
  oldPrice?: number;
  dimensions: string;
  image: string;
  material: string;
  style: string;
  color: string;
  stock: number;
  description: string;
  isNew?: boolean;
}

export const products: Product[] = [
  // NEWTRI
  {
    id: 'n1', slug: 'alfombra-kilim-newtri-8831', name: 'Alfombra Kilim Newtri 8831',
    collection: 'newtri', price: 415100, oldPrice: 461300, dimensions: '1.8 x 2.33 mt',
    image: '/assets/product-newtri-1.jpg', material: 'lana', style: 'bohemio', color: 'multicolor',
    stock: 3, description: 'Alfombra kilim tejida a mano con lana en Pakistan. Patron geometrico con rombos en tonos terracota y turquesa.',
  },
  {
    id: 'n2', slug: 'alfombra-kilim-newtri-8971', name: 'Alfombra Kilim Newtri 8971',
    collection: 'newtri', price: 431500, oldPrice: 479500, dimensions: '1.73 x 2.52 mt',
    image: '/assets/product-newtri-2.jpg', material: 'lana', style: 'bohemio', color: 'multicolor',
    stock: 5, description: 'Kilim con patron de rombos en tonos rosa palido, azul claro y crema. Estilo bohemio unico.',
  },
  {
    id: 'n3', slug: 'alfombra-kilim-moderna-3667', name: 'Alfombra Kilim Moderna 3667',
    collection: 'newtri', price: 404900, oldPrice: 449900, dimensions: '1.76 x 2.4 mt',
    image: '/assets/product-newtri-3.jpg', material: 'lana', style: 'moderno', color: 'multicolor',
    stock: 2, description: 'Diseño de lineas horizontales multicolor con franjas de azul, gris, crema y marron.',
  },
  // VINTAGE CONTEMPORANEAS
  {
    id: 'vc1', slug: 'alfombra-vintage-cont-8281', name: 'Alfombra Vintage Contemporanea 8281',
    collection: 'vintage-contemporaneas', price: 461300, oldPrice: 989900, dimensions: '1.59 x 2.54 mt',
    image: '/assets/product-vintage-cont-1.jpg', material: 'lana', style: 'vintage', color: 'azul',
    stock: 1, description: 'Alfombra vintage con patina suave. Patron floral clasico en tonos azul grisaceo y rosa palido.',
  },
  {
    id: 'vc2', slug: 'alfombra-vintage-cont-8254', name: 'Alfombra Vintage Contemporanea 8254',
    collection: 'vintage-contemporaneas', price: 431500, oldPrice: 789900, dimensions: '1.40 x 2.30 mt',
    image: '/assets/product-vintage-cont-1.jpg', material: 'lana', style: 'vintage', color: 'azul',
    stock: 1, description: 'Elegante alfombra vintage con diseno persa suave en tonos beige, gris y toques de azul.',
  },
  // VINTAGE ORIGINALES
  {
    id: 'vo1', slug: 'alfombra-vintage-original-8286', name: 'Alfombra Vintage Original 8286',
    collection: 'vintage-originales', price: 890900, oldPrice: 989900, dimensions: '1.59 x 2.54 mt',
    image: '/assets/product-vintage-orig-1.jpg', material: 'lana', style: 'oriental', color: 'rojo',
    stock: 1, description: 'Autentica alfombra persa vintage con medallon central en rojo borgona, azul marino y dorado.',
  },
  {
    id: 'vo2', slug: 'alfombra-vintage-original-8254', name: 'Alfombra Vintage Original 8254',
    collection: 'vintage-originales', price: 710900, oldPrice: 789900, dimensions: '1.40 x 2.30 mt',
    image: '/assets/product-vintage-orig-1.jpg', material: 'lana', style: 'oriental', color: 'rojo',
    stock: 1, description: 'Pieza unica de coleccion con patron geometrico tribal en tonos tierra.',
  },
  // LAVABLES
  {
    id: 'l1', slug: 'alfombra-lavable-kilim-plain', name: 'Alfombra Lavable Kilim Plain',
    collection: 'lavables', price: 224300, oldPrice: 299000, dimensions: '2.5 x 3.0 mt',
    image: '/assets/product-lavable-1.jpg', material: 'sintetico', style: 'minimalista', color: 'gris',
    stock: 8, description: 'Alfombra lavable moderna de fibra sintetica. Patron sutil de lineas en gris claro y blanco.',
  },
  {
    id: 'l2', slug: 'alfombra-lavable-stripes-gris', name: 'Alfombra Lavable Stripes Gris',
    collection: 'lavables', price: 259900, oldPrice: 339900, dimensions: '2.0 x 3.0 mt',
    image: '/assets/product-lavable-1.jpg', material: 'sintetico', style: 'moderno', color: 'gris',
    stock: 6, description: 'Franjas horizontales gruesas en gris, beige y blanco. Ideal para espacios modernos.',
  },
  // HYGGE
  {
    id: 'h1', slug: 'alfombra-hygge-8036', name: 'Alfombra Hygge 8036',
    collection: 'hygge', price: 1588000, oldPrice: 1985000, dimensions: '2.40 x 3.00 mt',
    image: '/assets/product-hygge-1.jpg', material: 'lana', style: 'moderno', color: 'beige',
    stock: 2, description: 'Alfombra hygge texturizada con pelo largo y suave en tono crema natural. Ultra acogedora.',
  },
  {
    id: 'h2', slug: 'alfombra-hygge-8470', name: 'Alfombra Hygge 8470',
    collection: 'hygge', price: 3203100, oldPrice: 3559000, dimensions: '3.07 x 4.26 mt',
    image: '/assets/product-hygge-1.jpg', material: 'lana', style: 'moderno', color: 'gris',
    stock: 1, description: 'Alfombra grande con patron geometrico sutil en relieve. Pelo medio, tacto irresistible.',
  },
  // SISAL
  {
    id: 's1', slug: 'alfombra-sisal-panier-natura', name: 'Alfombra Sisal Panier Natura',
    collection: 'sisal', price: 199900, dimensions: '2.0 x 3.0 mt',
    image: '/assets/product-sisal-1.jpg', material: 'sisal', style: 'minimalista', color: 'beige',
    stock: 10, description: 'Alfombra de sisal natural, textura de fibra cruda. Color natural crudo/beige.',
  },
  {
    id: 's2', slug: 'alfombra-sisal-espigas-cream', name: 'Alfombra Sisal Espigas Cream',
    collection: 'sisal', price: 329900, dimensions: '2.0 x 3.0 mt',
    image: '/assets/product-sisal-1.jpg', material: 'sisal', style: 'minimalista', color: 'beige',
    stock: 7, description: 'Sisal en tono crema con textura de fibra trenzada. Estilo organico natural.',
  },
  // NEUTRAS
  {
    id: 'nu1', slug: 'alfombra-patchwork-neutral-6895', name: 'Alfombra Patchwork Neutral 6895',
    collection: 'neutras', price: 234300, oldPrice: 292900, dimensions: '1.16 x 1.79 mt',
    image: '/assets/product-neutral-1.jpg', material: 'lana', style: 'vintage', color: 'beige',
    stock: 3, description: 'Patchwork con fragmentos de tonos beige, gris calido y crema cosidos. Rustico elegante.',
  },
  {
    id: 'nu2', slug: 'alfombra-neutral-lana-6944', name: 'Alfombra Neutral Lana 6944',
    collection: 'neutras', price: 297500, oldPrice: 371900, dimensions: '1.33 x 1.98 mt',
    image: '/assets/product-neutral-1.jpg', material: 'lana', style: 'minimalista', color: 'beige',
    stock: 4, description: 'Lana neutra con patron sutil de diamantes en tonos beige y gris claro.',
  },
  // BLANCO Y NEGRO
  {
    id: 'bn1', slug: 'alfombra-bn-geometrica-9009', name: 'Alfombra B/N Geometrica 9009',
    collection: 'blanco-negro', price: 141600, oldPrice: 157400, dimensions: '0.86 x 1.28 mt',
    image: '/assets/product-bn-1.jpg', material: 'algodon', style: 'moderno', color: 'multicolor',
    stock: 5, description: 'Patron geometrico audaz en blanco y negro. Diseno marroqui moderno con alto contraste.',
  },
  {
    id: 'bn2', slug: 'alfombra-bn-abstracta-5511', name: 'Alfombra B/N Abstracta 5511',
    collection: 'blanco-negro', price: 260900, oldPrice: 289800, dimensions: '1.45 x 1.90 mt',
    image: '/assets/product-bn-1.jpg', material: 'lana', style: 'moderno', color: 'multicolor',
    stock: 3, description: 'Alfombra moderna abstracta en blanco, negro y gris con patron de manchas organicas.',
  },
  // PATCHWORKS
  {
    id: 'p1', slug: 'alfombra-patchwork-colorida-6615', name: 'Alfombra Patchwork Colorida 6615',
    collection: 'patchworks', price: 659000, oldPrice: 846400, dimensions: '2.00 x 3.00 mt',
    image: '/assets/product-patchwork-1.jpg', material: 'lana', style: 'bohemio', color: 'multicolor',
    stock: 2, description: 'Mosaico de fragmentos de alfombras en rojo, azul, verde y amarillo. Estilo boho artistico.',
  },
  {
    id: 'p2', slug: 'alfombra-patchwork-gris-6488', name: 'Alfombra Patchwork Gris 6488',
    collection: 'patchworks', price: 999000, oldPrice: 1220300, dimensions: '2.50 x 3.46 mt',
    image: '/assets/product-patchwork-1.jpg', material: 'lana', style: 'moderno', color: 'gris',
    stock: 1, description: 'Patchwork urbano en tonos grises y negros con diferentes texturas de lana.',
  },
  // PRODUCTOS EN OFERTA (descuentos)
  {
    id: 'd1', slug: 'alfombra-geil-moderna-99', name: 'Alfombra Geil Moderna MOH101',
    collection: 'newtri', price: 99900, oldPrice: 249900, dimensions: '1.60 x 2.30 mt',
    image: '/assets/product-newtri-3.jpg', material: 'sintetico', style: 'moderno', color: 'gris',
    stock: 15, description: 'Alfombra moderna geometrica en descuento. Patron de hexagonos en gris, beige y dorado.',
  },
  {
    id: 'd2', slug: 'alfombra-persa-clasica-194', name: 'Alfombra Persa Clasica BMF106',
    collection: 'vintage-contemporaneas', price: 194700, oldPrice: 486900, dimensions: '2.35 x 3.05 mt',
    image: '/assets/product-vintage-orig-1.jpg', material: 'lana', style: 'oriental', color: 'rojo',
    stock: 4, description: 'Alfombra persa clasica en descuento. Patron floral tradicional en rojo, azul y marfil.',
  },
  {
    id: 'd3', slug: 'alfombra-shaggy-gris-611', name: 'Alfombra Shaggy Gris MDP206',
    collection: 'hygge', price: 61100, oldPrice: 152900, dimensions: '1.60 x 1.60 mt',
    image: '/assets/product-hygge-1.jpg', material: 'sintetico', style: 'moderno', color: 'gris',
    stock: 8, description: 'Alfombra shaggy texturizada en descuento. Color gris claro, pelo largo y suave.',
  },
  {
    id: 'd4', slug: 'alfombra-pasillo-runner-194', name: 'Alfombra Pasillo Runner MOH101',
    collection: 'blanco-negro', price: 194700, oldPrice: 486900, dimensions: '0.80 x 3.00 mt',
    image: '/assets/product-bn-1.jpg', material: 'sintetico', style: 'moderno', color: 'multicolor',
    stock: 6, description: 'Alfombra de pasillo runner en descuento. Patron de flechas en negro y blanco.',
  },
];

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(p => p.collection === collectionSlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getDiscountedProducts(): Product[] {
  return products.filter(p => p.oldPrice && (p.oldPrice - p.price) / p.oldPrice > 0.3);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.collection.toLowerCase().includes(q) ||
    p.style.toLowerCase().includes(q) ||
    p.material.toLowerCase().includes(q)
  );
}
