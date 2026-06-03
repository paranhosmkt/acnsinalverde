import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Fale Conosco</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender a sua necessidade. Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 font-display mb-6">Informações de Contato</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rua Osvaldo Souza, 104<br />
                  Aririu - Palhoça - SC<br />
                  CEP: 88135-028
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600 text-lg">
                  (48) 3240-0336
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                <a href="mailto:acn@acn.com.br" className="text-blue-600 hover:text-blue-700 transition-colors text-lg">
                  acn@acn.com.br
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 font-display mb-8">Envie uma Mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="seu@email.com.br"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 focus:bg-white"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="duvidas">Dúvidas Genéricas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-xl transition-colors shadow-sm hover:shadow active:scale-[0.98] mt-4"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
