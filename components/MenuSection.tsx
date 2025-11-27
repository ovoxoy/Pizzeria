import React, { memo } from 'react';
import { Category, MenuItem } from '../types';
import { ProductCard } from './ProductCard';

interface MenuSectionProps {
  category: Category;
  onAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = memo(({ category, onAdd }) => {
  return (
    <div id={category.id} className="scroll-mt-32 mb-12">
      <div className="flex items-center gap-4 mb-6 sticky top-16 bg-brand-bg/95 backdrop-blur py-2 z-10">
        <h2 className="text-2xl font-display uppercase font-medium text-brand-dark tracking-wide">
          {category.label}
        </h2>
        <div className="flex-1 h-0.5 bg-gray-100 rounded-full" />
      </div>
      
      {category.id === 'pizza' && (
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6 text-sm text-orange-800 flex items-start gap-3 shadow-sm">
           <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0 text-orange-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
           </div>
           <p className="mt-0.5 leading-relaxed">
             Standard Ø 32cm. <br />
             <strong>Party-Pizza (50x50cm)?</strong> Bitte Anmerkung im Warenkorb nutzen oder anrufen!
           </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <ProductCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
});

MenuSection.displayName = 'MenuSection';