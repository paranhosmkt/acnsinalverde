import { Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Trabalhe conosco</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Faça parte do nosso time</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Valorizamos pessoas que compartilham conhecimento, buscam evolução e contribuem para transformar desafios em soluções. Faça parte de uma equipe que atua com tecnologia, inovação e soluções estratégicas para diferentes segmentos.
            </p>
            
            <div className="inline-flex flex-col items-center">
              <a 
                href="mailto:acn@acn.com.br" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wide flex items-center gap-3"
              >
                <Mail size={24} />
                Envie seu currículo
              </a>
              <span className="mt-4 text-gray-500 font-medium">acn@acn.com.br</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
