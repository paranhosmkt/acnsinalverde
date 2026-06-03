import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/554832400336"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 group flex items-center justify-center cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="fill-white/20" />
      
      {/* Tooltip Effect */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Especialista
        {/* Triangle Arrow */}
        <span className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
      </span>
    </motion.a>
  );
}
