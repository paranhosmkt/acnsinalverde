import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { num: "+ 4.000", label: "Viaturas Entregues" },
    { num: "+30", label: "Anos de Experiência" },
    { num: "Toda", label: "Extensão Nacional" },
    { num: "+ 3.600 m²", label: "Estrutura Física" }
  ];

  return (
    <section className="bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800/0 md:divide-gray-800">
          
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="font-display font-bold text-4xl lg:text-5xl text-white mb-2 tracking-tight">
                {stat.num}
              </div>
              <div className="text-green-500 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
