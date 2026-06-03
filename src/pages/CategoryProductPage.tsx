import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { telecomProducts, vehicleProducts, mainCategories } from '../components/Products';

export default function CategoryProductPage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const mainCategory = mainCategories.find(c => c.slug === slug);
  const allProducts = [...telecomProducts, ...vehicleProducts];
  const product = allProducts.find(p => p.slug === slug);
  const parentCategory = mainCategories.find(c => c.items.some((i: any) => i.slug === slug));

  if (mainCategory) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft size={16} /> Voltar para Produtos
          </Link>
          
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">{mainCategory.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">{mainCategory.desc}</p>
          </div>

          {mainCategory.slug === 'radiocomunicacao' && (
            <div className="mb-12 bg-blue-900 border border-blue-800 rounded-2xl p-8 md:p-10 text-center shadow-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest uppercase">
                Venda e locação de equipamentos
              </h2>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCategory.items.map((item: any, idx: number) => (
              <Link to={`/produtos/${item.slug}`} key={item.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm flex-grow mb-4">{item.desc}</p>
                  <span className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors ${mainCategory.highlightColor === 'text-blue-700' ? 'text-blue-600 group-hover:text-blue-800' : 'text-green-600 group-hover:text-green-800'}`}>
                    Ver produtos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    );
  }

  if (!product) {
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
        <Link to={parentCategory ? `/produtos/${parentCategory.slug}` : "/produtos"} className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Voltar para {parentCategory ? parentCategory.title : "Produtos"}
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
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.desc}
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Deseja um projeto desta categoria?</h3>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors w-fit"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
          </div>
        </div>

        {product.items && product.items.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Produtos em {product.title}
            </h2>
            {(() => {
              const brands = Array.from(new Set(product.items.map((item: any) => item.brand).filter(Boolean)));
              
              if (brands.length > 0) {
                return brands.map((brand: any) => (
                  <div key={brand} className="mb-16 last:mb-0">
                    <h3 className="font-display text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider">{brand}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {product.items.filter((item: any) => item.brand === brand).map((item: any) => (
                        <Link to={`/produtos/${product.slug}/${item.slug}`} key={item.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                          <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                            />
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm flex-grow mb-4">{item.desc}</p>
                            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                                Ver detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ));
              }

              return (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {product.items.map((item: any) => (
                    <Link to={`/produtos/${product.slug}/${item.slug}`} key={item.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm flex-grow mb-4">{item.desc}</p>
                        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                            Ver detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
