import { Wrench, ShieldCheck, Building2, HeadphonesIcon, Factory, PenTool } from 'lucide-react';

export default function Differentials() {
  const diffs = [
    {
      icon: <Wrench size={24} />,
      title: "Equipe técnica especializada",
      desc: "Profissionais altamente qualificados desenvolvendo soluções precisas com engenharia própria."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Certificações SAE e ANATEL",
      desc: "Projetos em conformidade total com rigorosas normas técnicas nacionais e internacionais."
    },
    {
      icon: <Building2 size={24} />,
      title: "Atendimento Plural",
      desc: "Expertise consolidada no atendimento contínuo a órgãos públicos e redes privadas."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "Suporte Especializado",
      desc: "Assistência ágil e dedicada para garantir o funcionamento contínuo dos sistemas e frotas."
    },
    {
      icon: <Factory size={24} />,
      title: "Ampla Estrutura Própria",
      desc: "Galpões industriais equipados e capacitados para grandes volumes de instalação simultânea."
    },
    {
      icon: <PenTool size={24} />,
      title: "Projetos Personalizados",
      desc: "Soluções modulares, desenvolvidas sob medida para a sua necessidade operacional exata."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Nossos Diferenciais</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            A garantia técnica de uma infraestrutura robusta
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((diff, idx) => (
            <div key={idx} className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center text-blue-600 mb-6">
                {diff.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3">{diff.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
