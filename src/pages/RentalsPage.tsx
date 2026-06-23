import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RentalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow pt-24 pb-16 bg-gray-50 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <Link to="/produtos/radiocomunicacao" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <img 
            src="https://i.ibb.co/rK3N6JSm/Design-sem-nome-4.jpg" 
            alt="Locação de Rádios Comunicadores" 
            className="w-full h-auto object-cover"
          />
          <div className="p-8 md:p-12 text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Locação de Rádios Comunicadores
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Em eventos, operações industriais ou na rotina corporativa, uma comunicação rápida e confiável é essencial para garantir organização, segurança e eficiência.
              </p>
              <p>
                A ACN Comércio de Produtos de Trânsito oferece soluções completas em locação de rádios comunicadores, disponibilizando equipamentos de qualidade, configuração personalizada e suporte técnico para atender diferentes necessidades, desde pequenas equipes até operações de grande porte.
              </p>
              
              <h3 className="font-bold text-gray-900 text-xl mt-8">Para quem é o nosso serviço?</h3>
              <p>Atendemos empresas e organizações dos mais diversos setores:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Eventos corporativos, esportivos, shows, feiras e congressos</li>
                <li>Agronegócio</li>
                <li>Indústrias</li>
                <li>Supermercados e varejo</li>
                <li>Transportadoras e empresas de logística</li>
                <li>Prestadores de serviços</li>
                <li>Portos e terminais logísticos</li>
                <li>Órgãos públicos e forças de segurança</li>
              </ul>

              <h3 className="font-bold text-gray-900 text-xl mt-8">Por que escolher a ACN Comércio de Produtos de Trânsito?</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">✔️</span> Autorização Anatel
                  </h4>
                  <p className="pl-8">Operamos com frequências devidamente autorizadas pela Anatel, garantindo comunicação legal, sem interferências e em total conformidade com a legislação vigente.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">✔️</span> Equipe técnica qualificada
                  </h4>
                  <p className="pl-8">Contamos com profissionais especializados para orientar a escolha dos equipamentos ideais, realizar a configuração e oferecer suporte durante toda a locação.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">✔️</span> Mais economia e praticidade
                  </h4>
                  <p className="pl-8">A locação é uma solução inteligente para empresas que precisam de comunicação profissional sem os custos de aquisição, manutenção e atualização de equipamentos. Você utiliza a tecnologia pelo período necessário, com flexibilidade e suporte completo.</p>
                </div>
              </div>

              <p className="font-bold text-center mt-10 text-gray-900 text-xl">
                Solicite um orçamento e descubra a solução ideal para a sua empresa ou evento.
              </p>
            </div>
            <div className="mt-10 text-center">
              <a 
                href="https://wa.me/554832400336" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
