import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Joglo Besan</h3>
            <p className="mb-4">
              Restoran dengan konsep Jawa yang menghadirkan suasana hangat dan tradisional serta makanan berkualitas dengan cita rasa autentik.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/tongkronganjoglobesan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-amber-600 text-white p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/6282137267007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Jl. Gg. Bharadaksa II, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+6282137267007" className="hover:text-amber-400 transition-colors">
                  +62 821-3726-7007
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:joglobesan@example.com" className="hover:text-amber-400 transition-colors">
                  joglobesan@example.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Senin - Sabtu: 08.00 - 16.00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a 
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#reservation"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Reservasi
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Joglo Besan Makanan Simbok. Hak Cipta Dilindungi.
            </p>
            <div className="mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors mr-4">Kebijakan Privasi</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;