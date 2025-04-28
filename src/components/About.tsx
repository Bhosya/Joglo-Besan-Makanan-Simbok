import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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
    <section id="about" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
            Tentang Kami
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.v2s4rhVVaW3AFPU1XY8dMgHaE6?cb=iwc1&w=800&h=530&rs=1&pid=ImgDetMain"
                alt="Suasana Restoran Joglo Besan"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-700">
              Cerita Joglo Besan
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Joglo Besan Makanan Simbok hadir dengan konsep yang mengedepankan
              keaslian cita rasa masakan Jawa dengan sentuhan modern. Berdiri
              sejak tahun 2020, kami berkomitmen untuk menyajikan pengalaman
              kuliner yang tidak hanya memuaskan selera, tetapi juga
              menghadirkan kenangan dan kehangatan.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nama "Makanan Simbok" terinspirasi dari masakan rumahan khas Jawa
              yang penuh cinta dan kehangatan, seperti yang dibuat oleh seorang
              ibu (simbok) untuk keluarganya. Kami menyajikan hidangan dengan
              bahan-bahan segar dan bumbu rempah pilihan untuk memastikan
              kualitas terbaik.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">
                    Cita Rasa Autentik
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Resep turun-temurun dengan bumbu pilihan
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">
                    Suasana Keluarga
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tempat yang nyaman untuk berkumpul bersama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
