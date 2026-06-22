import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { telecomProducts, vehicleProducts } from '../components/Products';

export default function ProductDetailPage() {
  const { categorySlug, itemSlug } = useParams<{ categorySlug: string; itemSlug: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [categorySlug, itemSlug]);
  
  const allCategories = [...telecomProducts, ...vehicleProducts];
  const category = allCategories.find(c => c.slug === categorySlug);
  const product = category?.items?.find(p => p.slug === itemSlug);

  if (!category || !product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h2>
        <Link to="/produtos" className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> Voltar para Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/produtos/${category.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Voltar para {category.title}
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-96 md:h-auto bg-gray-100 relative group overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <>
                  <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {product.images.map((img: string, idx: number) => (
                      <div key={idx} className="w-full h-full flex-shrink-0 relative">
                        <img 
                          src={img} 
                          alt={`${product.title} - Imagem ${idx + 1}`} 
                          className="absolute inset-0 w-full h-full object-contain bg-white"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {product.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => setCurrentImageIndex(prev => prev === 0 ? product.images!.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={() => setCurrentImageIndex(prev => prev === product.images!.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.images.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentImageIndex === idx ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ir para a imagem ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className={`w-full h-full ${categorySlug === 'radiocomunicadores' ? 'p-8 flex items-center justify-center bg-white' : ''}`}>
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className={`w-full h-full ${categorySlug === 'radiocomunicadores' ? 'object-contain mix-blend-multiply' : 'object-cover'}`}
                  />
                </div>
              )}
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="font-display text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                {product.title}
              </h1>
              <div className="text-lg text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                {product.desc}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Interessado neste produto?</h3>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors w-fit"
                >
                  Solicitar Cotação
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
