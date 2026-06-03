import { motion } from 'motion/react';
import { ShieldCheck, Car, Briefcase, Landmark } from 'lucide-react';

export default function Clients() {
  const safety = [
    'Polícia Civil de Santa Catarina',
    'Polícia Militar de Santa Catarina',
    'Corpo de Bombeiros Militar de SC',
    'Senasp - Secretaria Nacional de Segurança Pública',
    'SEJURI - Sec. de Estado de Justiça'
  ];
  
  const publicOrgs = [
    'Prefeitura de Florianópolis', 
    'Prefeitura de São José'
  ];

  const automakers = [
    'Hyundai', 'Mitsubishi', 'Chevrolet', 'FIAT', 'Citroën', 
    'Jeep', 'Peugeot', 'Volkswagen', 'Toyota', 'Honda', 
    'Nissan', 'GWM', 'Ford', 'CAOA Chery'
  ];

  const partners = [
    'Implementadores Rodoviários', 
    'Orcali'
  ];

  const LogoPlaceholder = ({ text, icon: Icon }: { text: string, icon?: any }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 shadow-sm hover:border-gray-300 hover:shadow-md transition-all group">
      {Icon && <Icon size={24} className="text-gray-400 group-hover:text-green-600 mb-2 transition-colors" />}
      <span className="font-semibold text-gray-700 text-sm max-w-[150px] leading-tight">{text}</span>
    </div>
  );

  return (
    <section id="clientes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Quem Confia</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos Clientes e Parceiros
          </h3>
          <p className="text-gray-600 text-lg">
            Atendemos os principais órgãos governamentais, forças de segurança, grandes montadoras e empresas focadas em infraestrutura.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Órgãos Públicos e Segurança */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <ShieldCheck className="text-blue-600" size={24} />
              <h4 className="text-xl font-bold font-display text-gray-900 uppercase">Segurança Pública & Defesa</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {safety.map((name, i) => (
                <LogoPlaceholder key={i} text={name} icon={ShieldCheck} />
              ))}
            </div>
          </div>
          
          {/* Prefeituras */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <Landmark className="text-blue-600" size={24} />
              <h4 className="text-xl font-bold font-display text-gray-900 uppercase">Prefeituras e Municípios</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-wrap">
              {publicOrgs.map((name, i) => (
                <LogoPlaceholder key={i} text={name} icon={Landmark} />
              ))}
            </div>
          </div>

          {/* Concessionárias / Montadoras */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <Car className="text-green-600" size={24} />
              <h4 className="text-xl font-bold font-display text-gray-900 uppercase">Concessionárias e Montadoras</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {automakers.map((name, i) => (
                <LogoPlaceholder key={i} text={name} icon={Car} />
              ))}
            </div>
          </div>

          {/* Parceiros / Corporativo */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <Briefcase className="text-gray-800" size={24} />
              <h4 className="text-xl font-bold font-display text-gray-900 uppercase">Parceiros e Setor Privado</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {partners.map((name, i) => (
                <LogoPlaceholder key={i} text={name} icon={Briefcase} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
