import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Bike, Info, UtensilsCrossed } from 'lucide-react';
import { MENU_DATA } from './data';
import { MenuItem, CartItem } from './types';
import { MenuSection } from './components/MenuSection';
import { CartModal } from './components/CartModal';
import { FloatingCartBtn } from './components/FloatingCartBtn';
import { InfoCard } from './components/InfoCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WelcomeSection } from './components/WelcomeSection';

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
      // Offset for sticky header (Header 56px + Nav ~68px + Padding)
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            const navBtn = document.getElementById(`nav-btn-${entry.target.id}`);
            if (navBtn) {
              navBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        });
      },
      { rootMargin: '-130px 0px -70% 0px', threshold: 0 }
    );

    const sectionIds = ['infos', ...MENU_DATA.map(cat => cat.id)];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-brand-bg flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center px-4 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        
        {/* Using Unsplash Image to ensure it loads on Vercel without 'public' folder setup issues */}
        <img 
          src="/titelbild.jpg"
          alt="Pizzeria da Massimo" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          fetchPriority="high"
          loading="eager"
        />
        
        <div className="relative z-20 animate-fade-in-up max-w-3xl">
          <p className="text-lg md:text-xl font-light mb-2 tracking-widest uppercase opacity-90">Altomünster</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-2xl text-white">
            Pizzeria da Massimo
          </h1>
          <button 
            onClick={() => scrollToSection('infos')}
            className="bg-brand-red hover:bg-brand-darkRed text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-brand-red/30 hover:-translate-y-1"
          >
            Zur Speisekarte
          </button>
        </div>
      </div>

      <WelcomeSection />

      {/* Sticky Menu Navigation - Sticks below the fixed Header (top-14 = 3.5rem = 56px) */}
      <nav className="sticky top-14 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 py-4 min-w-max">
            <button 
               id="nav-btn-infos"
               onClick={() => scrollToSection('infos')}
               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === 'infos' ? 'bg-brand-dark text-white border-brand-dark shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
            >
              Lieferung
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            {MENU_DATA.map(cat => (
              <button 
                key={cat.id}
                id={`nav-btn-${cat.id}`}
                onClick={() => scrollToSection(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === cat.id ? 'bg-brand-red text-white border-brand-red shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10 w-full">
        
        {/* Info / Delivery Section */}
        <section id="infos" className="scroll-mt-36 mb-16">
           <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Bike size={24} />
                </div>
                <h2 className="font-display text-2xl text-brand-dark">Lieferservice & Gebiete</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                 <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    + 1,00 € Energiepauschale
                 </div>
                 <ul className="space-y-3 text-sm">
                    {[
                      { area: 'Altomünster, Stumpfenbach', price: '15 €' },
                      { area: 'Pipinsried, Oberzeitlbach', price: '25 €' },
                      { area: 'Sielenbach, Tandern', price: '35 €' },
                      { area: 'Aichach, Indersdorf', price: '45 €' }
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2 last:border-0">
                        <span className="text-gray-600">{item.area}</span>
                        <span className="font-bold text-brand-dark bg-gray-50 px-2 py-1 rounded">ab {item.price}</span>
                      </li>
                    ))}
                 </ul>
               </div>
               <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-600 leading-relaxed border border-gray-100">
                  <h4 className="font-semibold text-brand-dark mb-2">Hinweis zur Lieferung</h4>
                  <p>
                    Wir liefern frisch und heiß direkt zu Ihnen nach Hause. 
                    Bitte beachten Sie den Mindestbestellwert für Ihr Liefergebiet.
                    Bei größeren Bestellungen oder Partys bitten wir um rechtzeitige Vorbestellung.
                  </p>
               </div>
             </div>
           </div>
        </section>

        {/* Menu Sections */}
        <div className="space-y-4">
          {MENU_DATA.map(category => (
            <MenuSection 
              key={category.id} 
              category={category} 
              onAdd={addToCart} 
            />
          ))}
        </div>

        {/* Drinks Note */}
        <div className="mt-16 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
          <UtensilsCrossed size={32} className="text-brand-red mx-auto mb-4 opacity-50" />
          <h3 className="font-display text-xl font-medium text-brand-dark mb-3">
            Durstig?
          </h3>
          <p className="mb-6 max-w-lg mx-auto text-gray-500 leading-relaxed">
            Wir führen eine große Auswahl an gekühlten Getränken:<br/>
            <span className="font-medium text-gray-700">Cola, Fanta, Spezi, Wasser, Bier, Wein & Prosecco</span>
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
             <Info size={14} />
             Preise bitte telefonisch oder vor Ort erfragen
          </div>
        </div>

      </main>

      <Footer />

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