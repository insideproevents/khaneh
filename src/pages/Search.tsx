import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/data/products';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [localQuery, setLocalQuery] = useState(query);
  const results = query ? searchProducts(query) : [];

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchParams({ q: localQuery.trim() });
    }
  };

  return (
    <Layout>
      <PageHeader title="Busqueda" />
      <div className="max-w-content mx-auto px-4 md:px-8 py-10">
        {/* Search input */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gris-medio" />
              <input
                type="text"
                value={localQuery}
                onChange={e => setLocalQuery(e.target.value)}
                placeholder="Buscar alfombras..."
                className="w-full h-[48px] border border-gris-claro pl-11 pr-4 text-[14px] focus:border-arena focus:outline-none"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="h-[48px] px-6 bg-azul-profundo text-white text-button uppercase hover:bg-azul-profundo/90 transition-colors"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Results */}
        {query && (
          <>
            <p className="text-[14px] text-taupe mb-6">
              {results.length > 0
                ? `${results.length} resultado${results.length !== 1 ? 's' : ''} para "${query}"`
                : `No se encontraron resultados para "${query}"`
              }
            </p>
            {results.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}

        {!query && (
          <div className="text-center py-10">
            <p className="text-[15px] text-taupe">Escribe un termino de busqueda para encontrar alfombras</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['vintage', 'lana', 'moderno', 'kilim', 'hygge', 'sisal'].map(term => (
                <Link
                  key={term}
                  to={`/buscar?q=${term}`}
                  className="px-3 py-1.5 border border-gris-claro text-[13px] text-taupe hover:border-arena hover:text-arena transition-colors capitalize"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
