import { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CollectionBanner from '@/components/CollectionBanner';
import { collections, sizeFilters, colorFilters, materialFilters, styleFilters } from '@/data/collections';
import { products as allProducts, getProductsByCollection } from '@/data/products';
import type { Product } from '@/data/products';

export default function Coleccion() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevancia');
  const [gridCols, setGridCols] = useState(3);

  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const collection = collections.find(c => c.slug === slug);
  const collectionName = collection?.name || slug?.replace(/-/g, ' ').toUpperCase() || 'COLECCION';
  const bannerImage = collection?.banner || '/assets/hero-banner-1.jpg';
  const showOverlay = collection?.overlay ?? true;

  // Get products
  const products = useMemo(() => {
    let prods: Product[] = [];
    if (slug === 'all' || slug === 'descuentos') {
      prods = [...allProducts];
    } else {
      prods = getProductsByCollection(slug || '');
    }

    // Apply URL filters
    const urlSize = searchParams.get('size');
    const urlColor = searchParams.get('color');
    const urlStyle = searchParams.get('style');
    if (urlSize) prods = prods.filter(p => p.dimensions.toLowerCase().includes(urlSize.toLowerCase()));
    if (urlColor) prods = prods.filter(p => p.color.toLowerCase() === urlColor.toLowerCase());
    if (urlStyle) prods = prods.filter(p => p.style.toLowerCase() === urlStyle.toLowerCase());

    // Apply sidebar filters
    if (selectedSizes.length > 0) prods = prods.filter(p => selectedSizes.some(s => p.dimensions.includes(s)));
    if (selectedColors.length > 0) prods = prods.filter(p => selectedColors.includes(p.color));
    if (selectedMaterials.length > 0) prods = prods.filter(p => selectedMaterials.includes(p.material));
    if (selectedStyles.length > 0) prods = prods.filter(p => selectedStyles.includes(p.style));

    // Sort
    switch (sortBy) {
      case 'precio-menor': prods.sort((a, b) => a.price - b.price); break;
      case 'precio-mayor': prods.sort((a, b) => b.price - a.price); break;
      case 'nombre': prods.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    return prods;
  }, [slug, sortBy, selectedSizes, selectedColors, selectedMaterials, selectedStyles, searchParams]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedStyles([]);
  };

  const activeFiltersCount = selectedSizes.length + selectedColors.length + selectedMaterials.length + selectedStyles.length;

  return (
    <Layout>
      <CollectionBanner title={collectionName} image={bannerImage} overlay={showOverlay} />

      {/* Breadcrumbs */}
      <div className="max-w-content mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[13px]">
          <Link to="/" className="text-taupe hover:text-arena transition-colors">Inicio</Link>
          <ChevronRight size={14} className="text-gris-medio" />
          <span className="text-azul-profundo capitalize">{collectionName.toLowerCase()}</span>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 md:px-8 pb-16">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gris-claro mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 border text-[13px] font-medium uppercase tracking-wider transition-colors ${showFilters ? 'border-arena text-arena' : 'border-gris-claro text-azul-profundo hover:border-arena'}`}
            >
              <SlidersHorizontal size={15} />
              Filtrar
              {activeFiltersCount > 0 && (
                <span className="bg-arena text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{activeFiltersCount}</span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button onClick={clearFilters} className="text-[12px] text-taupe underline hover:text-arena transition-colors">
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Grid controls */}
            <div className="hidden md:flex items-center gap-1">
              <button onClick={() => setGridCols(2)} className={`p-1.5 ${gridCols === 2 ? 'text-arena' : 'text-gris-medio hover:text-azul-profundo'}`}>
                <LayoutGrid size={16} />
              </button>
              <button onClick={() => setGridCols(3)} className={`p-1.5 ${gridCols === 3 ? 'text-arena' : 'text-gris-medio hover:text-azul-profundo'}`}>
                <Grid3X3 size={16} />
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="h-[38px] border border-gris-claro px-3 text-[13px] text-azul-profundo bg-white focus:border-arena focus:outline-none"
            >
              <option value="relevancia">Ordenar por: Relevancia</option>
              <option value="precio-menor">Precio: Menor a mayor</option>
              <option value="precio-mayor">Precio: Mayor a menor</option>
              <option value="nombre">Nombre: A-Z</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="hidden md:block w-[260px] shrink-0">
              <div className="space-y-6">
                {/* Size */}
                <div>
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-azul-profundo mb-3">Tamano</h4>
                  <div className="space-y-2">
                    {sizeFilters.map(s => (
                      <label key={s.value} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-4 h-4 border ${selectedSizes.includes(s.value) ? 'bg-arena border-arena' : 'border-gris-claro'} flex items-center justify-center transition-colors`}>
                          {selectedSizes.includes(s.value) && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5"/></svg>}
                        </div>
                        <input type="checkbox" className="sr-only" checked={selectedSizes.includes(s.value)} onChange={() => toggleFilter(setSelectedSizes, s.value)} />
                        <span className="text-[13px] text-taupe">{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-azul-profundo mb-3">Color</h4>
                  <div className="space-y-2">
                    {colorFilters.map(c => (
                      <label key={c.value} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-4 h-4 border ${selectedColors.includes(c.value) ? 'bg-arena border-arena' : 'border-gris-claro'} flex items-center justify-center transition-colors`}>
                          {selectedColors.includes(c.value) && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5"/></svg>}
                        </div>
                        <input type="checkbox" className="sr-only" checked={selectedColors.includes(c.value)} onChange={() => toggleFilter(setSelectedColors, c.value)} />
                        <div className="w-4 h-4 rounded-full border border-gris-claro" style={{ background: c.color }} />
                        <span className="text-[13px] text-taupe">{c.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-azul-profundo mb-3">Material</h4>
                  <div className="space-y-2">
                    {materialFilters.map(m => (
                      <label key={m.value} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-4 h-4 border ${selectedMaterials.includes(m.value) ? 'bg-arena border-arena' : 'border-gris-claro'} flex items-center justify-center transition-colors`}>
                          {selectedMaterials.includes(m.value) && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5"/></svg>}
                        </div>
                        <input type="checkbox" className="sr-only" checked={selectedMaterials.includes(m.value)} onChange={() => toggleFilter(setSelectedMaterials, m.value)} />
                        <span className="text-[13px] text-taupe capitalize">{m.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-azul-profundo mb-3">Estilo</h4>
                  <div className="space-y-2">
                    {styleFilters.map(s => (
                      <label key={s.value} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-4 h-4 border ${selectedStyles.includes(s.value) ? 'bg-arena border-arena' : 'border-gris-claro'} flex items-center justify-center transition-colors`}>
                          {selectedStyles.includes(s.value) && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5"/></svg>}
                        </div>
                        <input type="checkbox" className="sr-only" checked={selectedStyles.includes(s.value)} onChange={() => toggleFilter(setSelectedStyles, s.value)} />
                        <span className="text-[13px] text-taupe capitalize">{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[16px] text-taupe mb-4">No se encontraron productos</p>
                <button onClick={clearFilters} className="text-arena underline hover:no-underline text-[14px]">
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
