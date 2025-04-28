import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pengunjung Setia',
    content: 'Suasananya sangat nyaman, makanannya juga enak dan harganya terjangkau. Tempat favorit untuk nongkrong dan berkumpul dengan teman-teman.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Pecinta Kuliner',
    content: 'Nasi Goreng Joglo Besannya sangat enak dengan bumbu yang pas. Pelayanannya juga ramah dan cepat. Pasti akan kembali lagi.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    role: 'Food Blogger',
    content: 'Konsep tempatnya unik dengan nuansa Jawa yang kental. Menu-menunya juga beragam dan cita rasanya autentik. Sangat direkomendasikan!',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

    // Carousel auto-play
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-100 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-100 opacity-60"></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
            Apa Kata Mereka
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Berikut cerita pengalaman pelanggan setia kami
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden pb-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-amber-50 rounded-xl shadow-lg p-8 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 text-amber-500 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                        <p className="text-amber-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-amber-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;