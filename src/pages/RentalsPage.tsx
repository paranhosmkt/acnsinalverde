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
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              Locação de Rádios Comunicadores
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium uppercase">
              TRABALHAMOS COM LOCAÇÃO DE RÁDIO COMUNICADOR PARA: eventos, agro, indústrias, transportadoras e prestadores de serviço.
            </p>
            <div className="mt-10">
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
