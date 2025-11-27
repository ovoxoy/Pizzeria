import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { MapPin, Phone, Clock, Store, Bike, Info, UtensilsCrossed } from 'lucide-react';
import { MENU_DATA } from './data';
import { MenuItem, CartItem } from './types';
import { MenuSection } from './components/MenuSection';
import { CartModal } from './components/CartModal';
import { FloatingCartBtn } from './components/FloatingCartBtn';
import { InfoCard } from './components/InfoCard';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('infos');

  const addToCart = useCallback((item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === itemId) {
        return { ...item, qty: Math.max(0, item.qty + delta) };
      }
      return item;
    }).filter(item => item.qty > 0));
  }, []);

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.qty), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scrollspy to update active tab based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            
            // Optional: scroll nav button into view if it's off screen
            const navBtn = document.getElementById(`nav-btn-${entry.target.id}`);
            if (navBtn) {
              navBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px', // Trigger when section is near top of viewport
        threshold: 0
      }
    );

    const sectionIds = ['infos', ...MENU_DATA.map(cat => cat.id)];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Header */}
      <header className="relative h-[380px] md:h-[450px] flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/titelbild.png" 
          alt="Pizzeria da Massimo" 
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        
        <div className="relative z-20 animate-fade-in-up flex flex-col items-center">
          <h1 className="font-display text-5xl md:text-7xl mb-3 tracking-wide drop-shadow-xl text-white">
            Pizzeria da Massimo
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-95 text-white/90">Altomünster</p>
          
          <div className="bg-brand-green/95 backdrop-blur-md px-6 py-2.5 rounded-full inline-flex items-center gap-2.5 shadow-xl text-sm font-semibold tracking-wide transform hover:scale-105 transition-transform duration-300">
             <Clock size={16} strokeWidth={2.5} />
             <span>Di-So 11:30-14 & 17-22 Uhr</span>
          </div>
        </div>
      </header>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 py-3 min-w-max">
            <button 
               id="nav-btn-infos"
               onClick={() => scrollToSection('infos')}
               className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'infos' ? 'bg-brand-red text-white shadow-md scale-105' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
            >
              Infos
            </button>
            {MENU_DATA.map(cat => (
              <button 
                key={cat.id}
                id={`nav-btn-${cat.id}`}
                onClick={() => scrollToSection(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat.id ? 'bg-brand-red text-white shadow-md scale-105' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Infos Section */}
        <section id="infos" className="scroll-mt-32 mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <InfoCard 
               title="Liefergebiete" 
               icon={<Bike className="text-brand-red" />}
             >
                <div className="inline-block bg-brand-red/10 text-brand-red px-2 py-1 rounded text-xs font-bold mb-3 border border-brand-red/10">
                  + 1,00 € Energiepauschale
                </div>
                <ul className="text-sm space-y-2.5">
                  <li className="flex justify-between border-b border-dashed border-gray-100 pb-1.5">
                    <span>Altomünster, Stumpfenbach</span>
                    <span className="font-semibold text-brand-dark">ab 15 €</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-gray-100 pb-1.5">
                    <span>Pipinsried, Oberzeitlbach</span>
                    <span className="font-semibold text-brand-dark">ab 25 €</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-gray-100 pb-1.5">
                    <span>Sielenbach, Tandern</span>
                    <span className="font-semibold text-brand-dark">ab 35 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Aichach, Indersdorf</span>
                    <span className="font-semibold text-brand-dark">ab 45 €</span>
                  </li>
                </ul>
             </InfoCard>

             <InfoCard 
               title="Kontakt" 
               icon={<Store className="text-brand-red" />}
             >
               <div className="space-y-1.5 mb-4 text-sm">
                 <p className="flex justify-between"><span className="font-semibold text-brand-dark">Montag:</span> Ruhetag</p>
                 <p className="flex justify-between"><span className="font-semibold text-brand-dark">Di - So:</span> 11:30 - 14:00 & 17:00 - 22:00</p>
               </div>
               <div className="h-px bg-gray-100 my-4" />
               <div className="space-y-3 font-medium">
                 <a href="tel:082549981977" className="flex items-center gap-3 p-2 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-all group">
                   <div className="bg-gray-100 group-hover:bg-brand-red group-hover:text-white p-2 rounded-full transition-colors">
                     <Phone size={16} /> 
                   </div>
                   <span>08254 - 99 81 977</span>
                 </a>
                 <a href="tel:015510738620" className="flex items-center gap-3 p-2 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-all group">
                   <div className="bg-gray-100 group-hover:bg-brand-red group-hover:text-white p-2 rounded-full transition-colors">
                     <Phone size={16} /> 
                   </div>
                   <span>0155 - 10 73 86 20</span>
                 </a>
                 <div className="flex items-start gap-3 p-2 text-gray-500 font-normal mt-2 text-sm">
                   <div className="bg-gray-100 p-2 rounded-full shrink-0">
                     <MapPin size={16} /> 
                   </div>
                   <span className="mt-1">Am Marktplatz 8<br/>85250 Altomünster</span>
                 </div>
               </div>
             </InfoCard>
           </div>
        </section>

        {/* Dynamic Menu Sections */}
        {MENU_DATA.map(category => (
          <MenuSection 
            key={category.id} 
            category={category} 
            onAdd={addToCart} 
          />
        ))}

        {/* Footer Info */}
        <div className="mt-12 mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center text-sm text-gray-500">
          <h3 className="font-display text-lg font-medium text-brand-dark mb-3 flex items-center justify-center gap-2">
            <UtensilsCrossed size={18} className="text-brand-red" />
            Getränke
          </h3>
          <p className="mb-5 max-w-lg mx-auto leading-relaxed">
            Wir führen eine Auswahl an kalten Getränken: Cola, Fanta, Spezi, Mineralwasser, Säfte, Bier, Wein, Lambrusco, Prosecco.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs bg-white inline-flex px-4 py-2 rounded-full border border-gray-200 shadow-sm text-gray-600">
             <Info size={14} className="text-brand-red" />
             Preise entnehmen Sie bitte vor Ort oder erfragen Sie diese telefonisch.
          </div>
        </div>

        <footer className="text-center text-xs text-gray-400 py-8 border-t border-gray-100">
           <p className="font-medium">&copy; 2025 Pizzeria da Massimo Altomünster</p>
           <p className="mt-2 opacity-70">Preise inkl. MwSt. | Zusatzstoffe laut Aushang</p>
        </footer>

      </main>

      {/* Interactive Elements */}
      <FloatingCartBtn 
        count={cartCount} 
        total={cartTotal} 
        onClick={() => setIsCartOpen(true)} 
      />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQuantity}
        total={cartTotal}
      />
    </div>
  );
};

export default App;