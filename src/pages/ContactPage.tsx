import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Fale Conosco</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender a sua necessidade. Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Informações de Contato */}
          <div className="space-y-4">
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-5">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0 mx-auto sm:mx-0">
                <MapPin size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Endereço</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Rua Osvaldo Souza, 104<br />
                  Aririu - Palhoça - SC<br />
                  CEP: 88135-028
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-5">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0 mx-auto sm:mx-0">
                <Phone size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Telefone</h3>
                <p className="text-gray-600 text-lg font-medium">
                  (48) 3240-0336
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-5">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0 mx-auto sm:mx-0">
                <Mail size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">E-mail</h3>
                <a href="mailto:acn@acn.com.br" className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium break-all">
                  acn@acn.com.br
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-5">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 shrink-0 mx-auto sm:mx-0">
                <Clock size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Horário de Atendimento</h3>
                <p className="text-gray-600 text-base">
                  De segunda à sexta das 08:00 às 17:48
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
