import React from 'react';
import { ShoppingBasket, ChevronRight } from 'lucide-react';

interface FloatingCartBtnProps {
  count: number;
  total: number;
  onClick: () => void;
}

export const FloatingCartBtn: React.FC<FloatingCartBtnProps> = ({ count, total, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-brand-dark text-white px-6 py-3 rounded-full flex items-center justify-between gap-6 shadow-2xl cursor-pointer w-[90%] max-w-sm transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:scale-105 ${count > 0 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
          <ShoppingBasket size={20} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg">{total.toFixed(2).replace('.', ',')} €</span>
          <span className="text-xs text-white/80">{count} {count === 1 ? 'Artikel' : 'Artikel'}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 font-semibold text-sm">
        Bestellen
        <ChevronRight size={16} />
      </div>
    </div>
  );
};