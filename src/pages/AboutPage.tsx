import { Shield, Target } from 'lucide-react';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Sobre a ACN Sinal Verde</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              A ACN Sinal Verde é uma empresa catarinense com atuação no mercado brasileiro desde 1993, especializada em engenharia aplicada à adaptação veicular, projetos especiais, sinalização acústica e visual e radiocomunicação profissional.
            </p>
            <p>
              Com mais de 30 anos de experiência e mais de 4.000 viaturas entregues, desenvolvemos soluções completas para órgãos públicos, forças de segurança, empresas privadas, indústrias, eventos, transportadoras e prestadores de serviço em todo o país.
            </p>
            <p>
              Contamos com estrutura própria de mais de 3.600 m², equipe técnica especializada e suporte de engenharia para desenvolver, instalar e manter projetos personalizados, sempre priorizando segurança, confiabilidade, conformidade técnica e eficiência operacional.
            </p>
          </div>
          <div className="bg-gray-200 rounded-3xl aspect-[4/3] w-full overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center relative group">
            {/* Espaço para a Imagem 1 */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img 
              src="https://i.ibb.co/nNJCFYsP/Whats-App-Image-2026-06-03-at-15-24-08.jpg" 
              alt="Instalações ACN Sinal Verde" 
              className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-500"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
           <div className="order-2 lg:order-1 bg-gray-200 rounded-3xl aspect-[4/3] w-full overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center relative group">
             {/* Espaço para a Imagem 2 */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img 
              src="https://i.ibb.co/Kpt8GwrR/Gemini-Generated-Image-g9zbq5g9zbq5g9zb.png" 
              alt="Equipe ACN Sinal Verde" 
              className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-500"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Atuamos com venda, locação, instalação, implantação de sistemas e assistência técnica especializada, incluindo sinalizadores acústicos e visuais, sirenes, celas para transporte de acautelados, adaptações veiculares, rádios comunicadores, repetidoras, telecomunicação e acessórios profissionais.
            </p>
            <p>
              Nossos projetos são desenvolvidos com foco em qualidade, durabilidade, padronização técnica e atendimento às exigências operacionais de cada cliente, oferecendo soluções robustas e preparadas para operações de alta demanda.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-14 mb-20 mt-12 grid md:grid-cols-2 gap-12">
           <div>
             <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
               <Target size={32} />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nossa Missão</h3>
             <p className="text-gray-600 text-lg leading-relaxed">
               Nossa missão é entregar soluções seguras, eficientes e confiáveis, unindo tecnologia, engenharia aplicada, agilidade e o melhor custo-benefício para cada operação.
             </p>
           </div>
           <div>
             <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-green-600">
               <Shield size={32} />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nossos Valores</h3>
             <p className="text-gray-600 text-lg leading-relaxed">
               Nossos valores são baseados em transparência, comprometimento, ética, excelência técnica e responsabilidade com o cliente.
             </p>
           </div>
        </div>

      </div>
    </div>
  );
}
