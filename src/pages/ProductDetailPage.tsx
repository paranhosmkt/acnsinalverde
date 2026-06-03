import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { telecomProducts, vehicleProducts } from '../components/Products';

export default function ProductDetailPage() {
  const { categorySlug, itemSlug } = useParams<{ categorySlug: string; itemSlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <div className="h-96 md:h-auto bg-gray-100">
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="font-display text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.desc}
              </p>
              
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
