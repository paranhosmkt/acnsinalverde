import { ArrowRight, MoveHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gray-800 shadow-2xl group bg-gray-900"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Background: Descaracterizada */}
      <img 
        src="https://i.ibb.co/Vpt5yzcg/2.jpg" 
        alt="Viatura Descaracterizada" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Foreground: Caracterizada */}
      <img 
        src="https://i.ibb.co/wZcpGsd7/1.jpg" 
        alt="Viatura Caracterizada" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      
      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none drop-shadow-md z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 transition-transform group-hover:scale-110">
          <MoveHorizontal size={24} />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider pointer-events-none">
        Caracterizada
      </div>
      <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider pointer-events-none">
        Civil
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616422285623-13169640fc24?q=80&w=2000&auto=format&fit=crop" 
          alt="Viaturas e Operações Estratégicas" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 font-semibold text-sm mb-6 tracking-wide">
                Tecnologia em Segurança
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Engenharia aplicada em <span className="text-green-500">adaptação veicular</span> e telecomunicação
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
              <a href="#contato" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-md transition-all group shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto">
                Solicitar orçamento
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          {/* Slider Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto"
          >
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
