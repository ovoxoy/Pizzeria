import React, { useState, useCallback, memo } from 'react';
import { Plus, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface ProductCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ item, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = useCallback(() => {
    onAdd(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 800);
  }, [item, onAdd]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex justify-between items-start transition-all duration-300 active:scale-[0.98] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:border-gray-200 group">
      <div className="flex-1 pr-4">
        <h4 className="font-semibold text-brand-dark mb-1.5 group-hover:text-brand-red transition-colors">{item.name}</h4>
        {item.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="flex flex-col items-end gap-3 min-w-[75px]">
        <span className="font-bold text-brand-dark whitespace-nowrap text-lg">
          {item.price.toFixed(2).replace('.', ',')} €
        </span>
        <button
          onClick={handleAdd}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isAdded ? 'bg-brand-green text-white rotate-0 scale-110' : 'bg-brand-red text-white hover:bg-brand-darkRed hover:scale-110 rotate-90'
          }`}
          aria-label={`Add ${item.name} to cart`}
        >
          {isAdded ? <Check size={18} strokeWidth={3} /> : <Plus size={18} className="-rotate-90" strokeWidth={2.5} />}
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';