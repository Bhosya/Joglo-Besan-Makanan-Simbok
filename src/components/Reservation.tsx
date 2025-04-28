import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

const Reservation = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const message = `Halo, saya ingin reservasi meja.%0A%0ANama: ${formState.name}%0ANo. HP: ${formState.phone}%0ATanggal: ${formState.date}%0AWaktu: ${formState.time}%0AJumlah Tamu: ${formState.guests}%0APesan: ${formState.message}`;
      
      window.open(
        `https://wa.me/6282137267007?text=${message}`,
        '_blank'
      );
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="reservation" className="py-20 bg-amber-100 relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://tse4.mm.bing.net/th/id/OIP.Sp5ZXfFKN4X3cTB8UZmm3AHaFj?cb=iwc1&rs=1&pid=ImgDetMain")`,
          backgroundSize: '250px 250px'
        }}></div>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Image and Info */}
            <div className="md:w-5/12 bg-amber-600 text-white p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Reservasi
                </h2>
                <p className="mb-8 text-amber-100">
                  Rencanakan kunjungan Anda ke Joglo Besan Makanan Simbok untuk pengalaman kuliner yang tak terlupakan.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 rounded-full p-2 mt-0.5">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hari Operasional</h3>
                      <p className="text-amber-100 text-sm">Senin - Sabtu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 rounded-full p-2 mt-0.5">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Jam Operasional</h3>
                      <p className="text-amber-100 text-sm">08.00 - 16.00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 rounded-full p-2 mt-0.5">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Kapasitas Grup</h3>
                      <p className="text-amber-100 text-sm">Hingga 30 orang</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-amber-500 pt-6 mt-6">
                <p className="text-sm text-amber-100 italic">
                  Untuk reservasi grup besar atau acara khusus, silakan hubungi kami langsung di nomor 082137267007.
                </p>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="md:w-7/12 p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">
                Formulir Reservasi
              </h3>
              
              {isSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Berhasil!</strong>
                  <span className="block sm:inline"> Permintaan reservasi Anda telah dikirim. Kami akan segera menghubungi Anda untuk konfirmasi.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Contoh: 08123456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Tanggal Kunjungan
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Waktu Kunjungan
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formState.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Pilih Waktu</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah Tamu
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formState.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Pilih Jumlah</option>
                      <option value="1-2">1-2 orang</option>
                      <option value="3-5">3-5 orang</option>
                      <option value="6-10">6-10 orang</option>
                      <option value="11-20">11-20 orang</option>
                      <option value=">20">Lebih dari 20 orang</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Catatan Tambahan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Contoh: Permintaan khusus atau keperluan acara"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      px-6 py-3 bg-amber-600 text-white rounded-md font-medium
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-700'}
                      transition-colors flex items-center
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Memproses...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Kirim via WhatsApp
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation