import { motion } from 'motion/react';
import React from 'react';

export default function Clients() {
  const logos = [
    "https://i.ibb.co/tTVJXg4F/logo-1.jpg",
    "https://i.ibb.co/PvKjS41r/logo-2.jpg",
    "https://i.ibb.co/MxFjcQ20/logo-3.jpg",
    "https://i.ibb.co/svdsq0Nh/logo-4.jpg",
    "https://i.ibb.co/G6xs5fY/logo-5.jpg",
    "https://i.ibb.co/msJsWtf/logo-6.jpg",
    "https://i.ibb.co/BHyMp708/logo-7.jpg",
    "https://i.ibb.co/bjZgYpsY/logo-8.jpg",
    "https://i.ibb.co/gZ65V6fk/logo-9.jpg",
    "https://i.ibb.co/nsMZXR67/logo-10.jpg",
    "https://i.ibb.co/pB6L9LYb/logo-11.jpg",
    "https://i.ibb.co/Zz7fj6g1/logo-12.jpg",
    "https://i.ibb.co/cXwh0Z1d/logo-13.jpg",
    "https://i.ibb.co/5Wmbp9CX/logo-14.jpg",
    "https://i.ibb.co/B2kSYKhV/logo-15.jpg",
    "https://i.ibb.co/8ndjqCQY/logo-16.jpg",
    "https://i.ibb.co/3bVzL9H/FIATlogo.jpg",
    "https://i.ibb.co/CshZSvds/logo-18.jpg",
    "https://i.ibb.co/qFrVYDjj/logo-19.jpg",
    "https://i.ibb.co/93f9GZHZ/logo-20.jpg",
    "https://i.ibb.co/6J0Qdh4Q/logo-21.jpg",
    "https://i.ibb.co/Q74KMhWp/DCSC.jpg",
    "https://i.ibb.co/B2Xq8yLG/PCSC.jpg",
    "https://i.ibb.co/jPH21kk1/1.jpg",
    "https://i.ibb.co/C3XqHx2t/2.jpg",
    "https://i.ibb.co/xKqCr6XN/3.jpg",
    "https://i.ibb.co/ZRWWmr0j/4.jpg",
    "https://i.ibb.co/4g2BZ56H/5.jpg",
    "https://i.ibb.co/gGpHKj0/6.jpg",
    "https://i.ibb.co/Rk2NP6D1/7.jpg",
    "https://i.ibb.co/bMhML9xz/9.jpg",
    "https://i.ibb.co/G4VZWYcD/10.jpg",
    "https://i.ibb.co/6Jpw3MbM/11.jpg"
  ];

  const LogoItem = ({ src }: { src: string }) => (
    <div className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center justify-center shadow-sm w-48 shrink-0 hover:border-blue-500 hover:shadow-md transition-all mx-3 h-28">
      <img src={src} alt="Client Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
    </div>
  );

  return (
    <section id="clientes" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Clientes
          </h3>
          <p className="text-gray-600 text-lg">
            Atendemos órgãos governamentais, forças de segurança pública, privada e grupos de concessionárias.
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
            {[...logos, ...logos].map((src, i) => (
              <LogoItem key={`row1-${i}`} src={src} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
