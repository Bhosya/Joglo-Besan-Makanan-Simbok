import React, { useEffect, useRef } from 'react';
import { Coffee, Utensils, Leaf, Heart, Baby, Car } from 'lucide-react';

const featuresList = [
  {
    icon: <Coffee className="h-8 w-8" />,
    title: 'Kopi Enak',
    description: 'Kopi pilihan dengan cita rasa khas yang menyegarkan',
    bgImage: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: 'Makanan Pencuci Mulut Enak',
    description: 'Berbagai pilihan makanan penutup yang manis dan lezat',
    bgImage: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Pilihan Teh Enak',
    description: 'Ragam teh berkualitas dengan rasa yang menenangkan',
    bgImage: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Suasana Nyaman',
    description: 'Suasana yang santai dan tenang untuk bersantai',
    bgImage: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: 'Cocok untuk Anak-anak',
    description: 'Lingkungan yang ramah untuk keluarga dengan anak-anak',
    bgImage: 'https://images.pexels.com/photos/8964915/pexels-photo-8964915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: 'Banyak Tempat Parkir',
    description: 'Area parkir yang luas dan aman untuk kendaraan Anda',
    bgImage: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Features = () => {
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
            Keunggulan Kami
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Apa yang membuat pengalaman bersantap di Joglo Besan begitu istimewa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              style={{
                height: '300px',
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-amber-100 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features