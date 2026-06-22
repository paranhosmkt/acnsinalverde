import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  // ID do vídeo do YouTube. Troque por um ID real de vídeo de viaturas.
  const YOUTUBE_VIDEO_ID = "iwYab10AmwE";

  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-gray-900 flex items-center min-h-[80vh]">
      {/* Background Video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-70 scale-[1.3] md:scale-[1.1] z-0"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3`}
          allow="autoplay; encrypted-media; picture-in-picture"
          title="Background Video"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Engenharia aplicada em adaptação veicular e telecomunicação
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Soluções completas com venda e locação de equipamentos para operações de segurança.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/554832400336" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-md transition-all group shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto">
              Solicitar orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
