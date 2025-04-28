import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const Info = () => {
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
    <section id="info" className="py-20 bg-stone-800 text-white">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Informasi Restoran
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-8">
            <div className="bg-stone-700/50 rounded-lg p-6 backdrop-blur-sm shadow-xl border border-stone-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-stone-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                  <p className="text-amber-100">
                    Jl. Gg. Bharadaksa II, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-700/50 rounded-lg p-6 backdrop-blur-sm shadow-xl border border-stone-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 rounded-full p-3">
                  <Clock className="h-6 w-6 text-stone-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
                  <ul className="space-y-2 text-amber-100">
                    <li className="flex justify-between">
                      <span>Senin - Sabtu</span>
                      <span>08.00 - 16.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Minggu</span>
                      <span>Tutup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stone-700/50 rounded-lg p-6 backdrop-blur-sm shadow-xl border border-stone-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 rounded-full p-3">
                  <Phone className="h-6 w-6 text-stone-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kontak</h3>
                  <p className="text-amber-100 mb-3">
                    <a href="tel:+6282137267007" className="hover:text-amber-300 transition-colors">
                      +62 821-3726-7007
                    </a>
                  </p>
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-amber-500" />
                    <a 
                      href="https://www.instagram.com/tongkronganjoglobesan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-100 hover:text-amber-300 transition-colors"
                    >
                      @tongkronganjoglobesan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.717780604238!2d110.42243587577504!3d-7.048864592986388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b6d38ac78c3%3A0xb9b4b5631f8a5825!2sJl.%20Gg.%20Bharadaksa%20II%2C%20Sumurboto%2C%20Kec.%20Banyumanik%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1719422345789!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Joglo Besan Makanan Simbok"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;