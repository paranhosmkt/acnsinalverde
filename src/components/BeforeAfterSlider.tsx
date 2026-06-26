import { MoveHorizontal } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider() {
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
        src="https://i.ibb.co/Kzs2HGqK/Whats-App-Image-2026-06-25-at-16-15-02.jpg" 
        alt="Viatura Descaracterizada" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Foreground: Caracterizada */}
      <img 
        src="https://i.ibb.co/rS3HThp/Whats-App-Image-2026-06-25-at-16-15-02-1.jpg" 
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
        Descaracterizada
      </div>
      <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider pointer-events-none">
        PMSC
      </div>
    </div>
  );
}
