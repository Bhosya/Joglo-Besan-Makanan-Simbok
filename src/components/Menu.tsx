import React, { useState, useEffect, useRef } from 'react';
import { menuData } from '../data/menuData';

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID').format(price);
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
            Menu Kami
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Nikmati aneka hidangan tradisional Jawa dengan cita rasa yang autentik, diracik dengan bahan-bahan pilihan dan bumbu rempah berkualitas.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuData
            .find((category) => category.id === activeCategory)
            ?.items.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-lg font-semibold text-stone-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
                      <span className="text-amber-800 font-medium whitespace-nowrap">
                        Rp {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Note for additional topping */}
        {activeCategory === 1 && (
          <div className="mt-8 bg-amber-100 p-4 rounded-lg shadow-inner text-center">
            <p className="text-amber-800 italic">
              * Tambah Topping Selai Srikaya + Rp 5.000
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/6282137267007?text=Halo,%20saya%20ingin%20memesan%20makanan%20dari%20Joglo%20Besan%20Makanan%20Simbok."
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu