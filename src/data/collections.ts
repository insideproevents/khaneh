export interface Collection {
  slug: string;
  name: string;
  banner: string;
  overlay?: boolean;
}

export const collections: Collection[] = [
  { slug: 'newtri', name: 'NEWTRI', banner: '/assets/banner-newtri.jpg' },
  { slug: 'vintage-contemporaneas', name: 'VINTAGE CONTEMPORÁNEAS', banner: '/assets/banner-vintage-contemporaneas.jpg' },
  { slug: 'vintage-originales', name: 'VINTAGE ORIGINALES', banner: '/assets/banner-vintage-originales.jpg' },
  { slug: 'lavables', name: 'LAVABLES', banner: '/assets/banner-lavables.jpg' },
  { slug: 'hygge', name: 'HYGGE', banner: '/assets/banner-hygge.jpg', overlay: false },
  { slug: 'sisal', name: 'SISAL Y FIBRAS NATURALES', banner: '/assets/banner-sisal.jpg' },
  { slug: 'neutras', name: 'NEUTRAS Y NATURALES', banner: '/assets/banner-neutras.jpg' },
  { slug: 'blanco-negro', name: 'BLANCO Y NEGRO', banner: '/assets/banner-blanco-negro.jpg' },
  { slug: 'patchworks', name: 'PATCHWORKS', banner: '/assets/banner-patchworks.jpg', overlay: false },
];

export const navCollections = [
  { slug: 'newtri', name: 'Newtri' },
  { slug: 'vintage-contemporaneas', name: 'Vintage Contemporáneas' },
  { slug: 'vintage-originales', name: 'Vintage Originales' },
  { slug: 'lavables', name: 'Lavables' },
  { slug: 'hygge', name: 'Hygge' },
  { slug: 'sisal', name: 'Sisal y Fibras Naturales' },
  { slug: 'neutras', name: 'Neutras y Naturales' },
  { slug: 'blanco-negro', name: 'Blanco y Negro' },
  { slug: 'patchworks', name: 'Patchworks' },
];

export const sizeFilters = [
  { label: '0.80 x 1.20 mt', value: '80x120' },
  { label: '1.20 x 1.80 mt', value: '120x180' },
  { label: '1.50 x 2.00 mt', value: '150x200' },
  { label: '1.70 x 2.40 mt', value: '170x240' },
  { label: '2.00 x 3.00 mt', value: '200x300' },
  { label: '2.50 x 3.00 mt', value: '250x300' },
  { label: '3.00 x 4.00 mt', value: '300x400' },
];

export const colorFilters = [
  { label: 'Beige', value: 'beige', color: '#D4C4A8' },
  { label: 'Gris', value: 'gris', color: '#9A9A9A' },
  { label: 'Azul', value: 'azul', color: '#4A6FA5' },
  { label: 'Rojo', value: 'rojo', color: '#A04545' },
  { label: 'Verde', value: 'verde', color: '#5A7A5A' },
  { label: 'Multicolor', value: 'multicolor', color: 'linear-gradient(45deg, red, blue, yellow)' },
];

export const materialFilters = [
  { label: 'Lana', value: 'lana' },
  { label: 'Algodón', value: 'algodon' },
  { label: 'Sintético', value: 'sintetico' },
  { label: 'Yute', value: 'yute' },
  { label: 'Sisal', value: 'sisal' },
];

export const styleFilters = [
  { label: 'Moderno', value: 'moderno' },
  { label: 'Vintage', value: 'vintage' },
  { label: 'Bohemio', value: 'bohemio' },
  { label: 'Minimalista', value: 'minimalista' },
  { label: 'Oriental', value: 'oriental' },
];
