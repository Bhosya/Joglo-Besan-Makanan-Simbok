import React, { useEffect, useRef } from 'react';
import { Truck, Home, Users, Coffee, Calendar } from 'lucide-react';

const servicesList = [
  {
    icon: <Truck className="h-7 w-7" />,
    title: 'Antar Tanpa Bertemu',
    description: 'Layanan pengantaran dengan protokol aman tanpa kontak langsung'
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: 'Pesan Antar',
    description: 'Pengantaran langsung ke tempat Anda dengan kondisi tetap hangat'
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: 'Bawa Pulang',
    description: 'Pesan dan ambil langsung di restoran untuk dinikmati di rumah'
  },
  {
    icon: <Coffee className="h-7 w-7" />,
    title: 'Makan di Tempat',
    description: 'Nikmati suasana autentik Jawa dalam restoran kami'
  },
  {
    icon: <Calendar className="h-7 w-7" />,
    title: 'Menerima Reservasi',
    description: 'Pesan tempat untuk acara khusus atau kunjungan berkelompok'
  }
];

const Services = () => {
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
    <section className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
            Layanan Kami
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Berbagai pilihan cara untuk menikmati makanan Joglo Besan sesuai kebutuhan Anda
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {servicesList.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-amber-500 text-white w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-auto">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Banner */}
        <div className="mt-12 bg-amber-600 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-3">
                Butuh Informasi Tambahan?
              </h3>
              <p className="text-amber-100 mb-6">
                Tim kami siap membantu Anda dengan pertanyaan seputar layanan dan pesanan khusus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+6282137267007"
                  className="px-6 py-3 bg-white hover:bg-amber-50 text-amber-700 font-medium rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Kami
                </a>
                <a 
                  href="https://wa.me/6282137267007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-amber-700 p-8 md:p-10 h-full flex items-center justify-center">
              <Users className="h-24 w-24 text-amber-300 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Phone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default Services;