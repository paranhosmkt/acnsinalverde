import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { telecomProducts, vehicleProducts, mainCategories } from '../components/Products';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function CategoryProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const brandQuery = searchParams.get('brand');
  
  const [activeBrand, setActiveBrand] = useState<string>(brandQuery || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const mainCategory = mainCategories.find(c => c.slug === slug);
  const allProducts = [...telecomProducts, ...vehicleProducts];
  const product = allProducts.find(p => p.slug === slug);
  const parentCategory = mainCategories.find(c => c.items.some((i: any) => i.slug === slug));

  useEffect(() => {
    if (brandQuery) {
      setActiveBrand(brandQuery);
    } else {
      setActiveBrand('');
    }
  }, [mainCategory, brandQuery]);

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
            <div className="mb-12 relative overflow-hidden rounded-2xl shadow-xl flex items-center justify-center py-20 px-8">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1542128962-9d50ad7bf014?q=80&w=2000&auto=format&fit=crop" 
                  alt="Bombeiro com rádio" 
                  className="w-full h-full object-cover blur-[2px] opacity-90 scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
              </div>
              <h2 className="relative z-10 text-2xl md:text-4xl font-display font-bold text-white tracking-widest uppercase text-center drop-shadow-lg">
                Venda e locação de equipamentos
              </h2>
            </div>
          )}

          {mainCategory.slug === 'adaptacao-veicular' && (
            <div className="mb-16 max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">Transformação em Viaturas</h2>
              <BeforeAfterSlider />
            </div>
          )}

          {(() => {
            // Flatten all products under this main category to find all unique brands
            const allSubProducts = mainCategory.items.flatMap(cat => 
              cat.items.map((prod: any) => ({ ...prod, category: cat }))
            );
            const rawBrands = Array.from(new Set(allSubProducts.map(p => p.brand).filter(Boolean)));
            
            // If there are no brands at all (like vehicleProducts), fallback to showing just categories
            if (rawBrands.length === 0) {
              return (
                <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">{mainCategory.title}</h2>
                  <div className="space-y-16">
                    {mainCategory.items.map((cat: any) => (
                      <div key={cat.slug}>
                        <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{cat.title}</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {cat.items.map((item: any) => (
                            <div key={item.slug} className={`group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${cat.isPhotoOnly ? 'border-none shadow-sm hover:shadow-md' : ''}`}>
                              {cat.isPhotoOnly ? (
                                <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-xl">
                                  <img 
                                    src={item.img} 
                                    alt={item.title || 'Projeto Especial'} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              ) : (
                                <Link to={`/produtos/${cat.slug}/${item.slug}`} className="flex flex-col h-full">
                                  <div className={`overflow-hidden bg-gray-100 ${mainCategory.slug === 'radiocomunicacao' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                                    <img 
                                      src={item.img} 
                                      alt={item.title} 
                                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 ${mainCategory.slug === 'radiocomunicacao' ? 'object-contain mix-blend-multiply p-4' : 'object-cover'}`}
                                    />
                                  </div>
                                  <div className="p-6 flex-grow flex flex-col">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">{item.desc}</p>
                                    <span className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors ${mainCategory.highlightColor === 'text-blue-700' ? 'text-blue-600 group-hover:text-blue-800' : 'text-green-600 group-hover:text-green-800'}`}>
                                      Ver detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Group by Brand -> Category -> Products
            let brands = [...rawBrands as string[]];
            // Only add 'Linha Completa' if there are products without a brand
            const NO_BRAND_LABEL = mainCategory.slug === 'adaptacao-veicular' ? 'Sinalização e Adaptação' : 'Diversos';
            if (allSubProducts.some(p => !p.brand)) {
              brands.push(NO_BRAND_LABEL);
            }
            
            const brandLogos: Record<string, string> = {
              'MOTOROLA': 'https://i.ibb.co/ZpCJv8Hs/motorola.jpg',
              'CALTTA': 'https://i.ibb.co/pBqzKDtT/caltta.jpg',
              'INTELBRAS': 'https://i.ibb.co/7Jm3tBbL/intelbras.jpg'
            };

            if (!activeBrand) {
              return (
                <div className="space-y-8">
                  <h2 className="font-display text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 text-center">Selecione uma Marca</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setActiveBrand(brand)}
                        className="group bg-white rounded-3xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]"
                      >
                        {brandLogos[brand] ? (
                          <img src={brandLogos[brand]} alt={brand} className="max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <h3 className="font-display text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{brand}</h3>
                        )}
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                          Ver produtos {brandLogos[brand] ? '' : 'da marca'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            const activeBrandName = activeBrand;
            const productsForBrand = allSubProducts.filter(p => 
              activeBrandName === NO_BRAND_LABEL ? !p.brand : p.brand === activeBrandName
            );
            const categoriesInBrand = Array.from(new Set(productsForBrand.map(p => p.category.slug)));

            return (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  {brandLogos[activeBrandName] ? (
                    <img src={brandLogos[activeBrandName]} alt={activeBrandName} className="max-h-16 w-auto object-contain" />
                  ) : (
                    <h2 className="font-display text-3xl font-bold text-gray-900">{activeBrandName}</h2>
                  )}
                  <button 
                    onClick={() => setActiveBrand('')}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
                  >
                    <ArrowLeft size={16} /> Voltar para Marcas
                  </button>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[500px]">
                  <div className="space-y-16">
                    {categoriesInBrand.map(catSlug => {
                      const categoryObj = productsForBrand.find(p => p.category.slug === catSlug)?.category;
                      const productsInCatAndBrand = productsForBrand.filter(p => p.category.slug === catSlug);
                      
                      if (!categoryObj) return null;
                      
                      return (
                        <div key={catSlug}>
                          <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{categoryObj.title}</h3>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productsInCatAndBrand.map((item: any) => (
                              <Link to={`/produtos/${categoryObj.slug}/${item.slug}`} key={item.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className={`overflow-hidden bg-gray-100 ${mainCategory.slug === 'radiocomunicacao' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                                  <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className={`w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 ${mainCategory.slug === 'radiocomunicacao' ? 'object-contain mix-blend-multiply p-4' : 'object-cover'}`}
                                  />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                  <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                                  <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">{item.desc}</p>
                                  <span className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors ${mainCategory.highlightColor === 'text-blue-700' ? 'text-blue-600 group-hover:text-blue-800' : 'text-green-600 group-hover:text-green-800'}`}>
                                    Ver detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}

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
                          <div className={`overflow-hidden bg-gray-100 ${product.slug === 'radiocomunicadores' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className={`w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 ${product.slug === 'radiocomunicadores' ? 'object-contain mix-blend-multiply p-4' : 'object-cover'}`}
                            />
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">{item.desc}</p>
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
                      <div className={`overflow-hidden bg-gray-100 ${product.slug === 'radiocomunicadores' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className={`w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 ${product.slug === 'radiocomunicadores' ? 'object-contain mix-blend-multiply p-4' : 'object-cover'}`}
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">{item.desc}</p>
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
