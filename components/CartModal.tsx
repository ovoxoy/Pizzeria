import React, { useState, useEffect } from 'react';
import { X, ShoppingBasket, MessageCircle, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (itemId: string, delta: number) => void;
  total: number;
}

const WHATSAPP_NUMBER = "491736398022";

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, onUpdateQty, total }) => {
  const [details, setDetails] = useState<OrderDetails>({ name: '', address: '', note: '' });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) setIsClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    let txt = `🍕 *NEUE BESTELLUNG* 🍕\n\n`;
    txt += `👤 *Name:* ${details.name}\n📍 *Adresse:* ${details.address}\n`;
    if (details.note) txt += `📝 *Notiz:* ${details.note}\n`;
    txt += `\n🛒 *BESTELLUNG:*\n`;
    
    let cartTotal = 0;
    cart.forEach(i => {
        const sub = i.price * i.qty;
        txt += `▫️ ${i.qty}x ${i.name} (${sub.toFixed(2).replace('.',',')}€)\n`;
        cartTotal += sub;
    });
    
    txt += `\n💶 *GESAMT: ${cartTotal.toFixed(2).replace('.',',')} €*\n`;
    txt += `--------------------------------`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
    window.open(url, '_blank');
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div 
        className={`bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] transition-transform duration-300 ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/80 md:rounded-t-2xl rounded-t-2xl backdrop-blur-sm">
          <h3 className="font-display font-medium text-xl text-brand-dark flex items-center gap-2">
            <ShoppingBasket className="text-brand-red" size={22} />
            Bestellung
          </h3>
          <button onClick={handleClose} className="p-2 -mr-2 hover:bg-gray-200/50 rounded-full transition-colors text-gray-500 hover:text-brand-dark">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <div className="bg-gray-50 p-6 rounded-full mb-4">
                <ShoppingBasket size={48} className="opacity-20 text-brand-dark" />
              </div>
              <p className="text-lg font-medium text-gray-500">Dein Warenkorb ist leer.</p>
              <button onClick={handleClose} className="mt-6 text-brand-red font-semibold hover:underline">
                Zur Speisekarte
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 items-center border-b border-gray-50 pb-4 last:border-0 animate-fade-in-up">
                  <div className="flex-1">
                    <div className="font-semibold text-brand-dark leading-tight mb-1">{item.name}</div>
                    <div className="text-sm text-gray-500">Einzel: {item.price.toFixed(2).replace('.', ',')} €</div>
                  </div>
                  
                  <div className="text-brand-dark font-bold text-sm min-w-[60px] text-right mr-2">
                    {(item.price * item.qty).toFixed(2).replace('.', ',')} €
                  </div>

                  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 h-9">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className={`w-7 h-full flex items-center justify-center rounded-md transition-colors ${item.qty === 1 ? 'text-red-500 hover:bg-red-50' : 'text-brand-dark hover:bg-white shadow-sm'}`}
                    >
                      {item.qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                    </button>
                    <span className="font-semibold w-6 text-center text-sm">{item.qty}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-7 h-full flex items-center justify-center hover:bg-white hover:shadow-sm rounded-md transition-colors text-brand-dark"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-white md:rounded-b-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-10">
          <div className="flex justify-between items-end mb-6">
            <span className="text-gray-500 font-medium">Gesamtbetrag</span>
            <span className="text-2xl font-bold text-brand-dark font-display">{total.toFixed(2).replace('.', ',')} €</span>
          </div>

          <form onSubmit={handleCheckout} className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <input 
                required
                type="text" 
                id="order-name"
                name="name"
                autoComplete="name"
                placeholder="Dein Name" 
                className="w-full p-4 border border-gray-200 bg-gray-50/50 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all placeholder:text-gray-400"
                value={details.name}
                onChange={e => setDetails({...details, name: e.target.value})}
              />
              <input 
                required
                type="text"
                id="order-address"
                name="address"
                autoComplete="street-address" 
                placeholder="Straße, Ort (Mindestbestellwert beachten!)" 
                className="w-full p-4 border border-gray-200 bg-gray-50/50 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all placeholder:text-gray-400"
                value={details.address}
                onChange={e => setDetails({...details, address: e.target.value})}
              />
              <input 
                type="text"
                id="order-note"
                name="note"
                autoComplete="off" 
                placeholder="Anmerkung (z.B. Party-Größe, schneiden...)" 
                className="w-full p-4 border border-gray-200 bg-gray-50/50 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all placeholder:text-gray-400"
                value={details.note}
                onChange={e => setDetails({...details, note: e.target.value})}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={cart.length === 0}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none mt-4"
            >
              <MessageCircle className="fill-white" size={24} />
              Bestellung via WhatsApp
            </button>
            <p className="text-[11px] text-center text-gray-400 leading-tight">
              Mit dem Klick öffnet sich WhatsApp mit deiner vorausgefüllten Bestellung.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};