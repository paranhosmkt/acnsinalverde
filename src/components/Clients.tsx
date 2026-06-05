import { motion } from 'motion/react';
import React from 'react';

export default function Clients() {
  const allClients = [
    'Polícia Civil de SC',
    'Polícia Militar de SC',
    'Corpo de Bombeiros SC',
    'Senasp - Secretaria Nacional de Segurança Pública',
    'SEJURI - Sec. de Estado de Justiça',
    'Prefeitura de Florianópolis', 
    'Prefeitura de São José',
    'Hyundai', 'Mitsubishi', 'Chevrolet', 'FIAT', 'Citroën', 
    'Jeep', 'Peugeot', 'Volkswagen', 'Toyota', 'Honda', 
    'Nissan', 'GWM', 'Ford', 'CAOA Chery',
    'Implementadores Rodoviários', 
    'Orcali'
  ];

  const LogoItem = ({ text }: { text: string; key?: React.Key }) => (
    <div className="bg-white border border-gray-100 rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-sm w-48 shrink-0 hover:border-blue-500 hover:shadow-md transition-all mx-3 h-28">
      <span className="font-bold text-gray-700 text-sm leading-snug">{text}</span>
    </div>
  );

  return (
    <section id="clientes" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Quem Confia</h2>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Clientes e Parceiros
          </h3>
          <p className="text-gray-600 text-lg">
            Atendemos os principais órgãos governamentais, forças de segurança, grandes montadoras e empresas parceiras.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Row 1 - scrolling right to left */}
        <div className="flex overflow-hidden relative w-full">
          {/* Gradient mask for smooth fade out at edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {[...allClients, ...allClients].map((client, i) => (
              <LogoItem key={`row1-${i}`} text={client} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
