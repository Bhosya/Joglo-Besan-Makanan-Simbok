import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        // Create parallax effect
        const opacity = 1 - scrollPosition / (window.innerHeight * 0.8);
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://www.minimalist.id/wp-content/uploads/2024/08/hard_well_restoran_joglo_jawa._7962a499-6450-4807-b69e-b3a78b92319f-768x430.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Javanese Ornamental Border */}
      <div className="absolute inset-8 border-4 border-amber-500/20 z-10">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-500/20"></div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-500/20"></div>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-amber-500/20"></div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-amber-500/20"></div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMFoiIGZpbGw9IiNkOTc3MDYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20 rotate-90"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMFoiIGZpbGw9IiNkOTc3MDYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMFoiIGZpbGw9IiNkOTc3MDYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20 -rotate-90"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMFoiIGZpbGw9IiNkOTc3MDYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20 rotate-180"></div>

      {/* Content */}
      <div
        ref={heroRef}
        className="container mx-auto px-4 z-20 text-center text-white"
      >
        <div className="inline-block p-1 border-2 border-amber-500 rounded-lg mb-4">
          <span className="text-xs uppercase tracking-widest font-medium bg-amber-500/20 px-3 py-1 rounded-md">
            Sejak 2020
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Rasakan Kenikmatan Kuliner Jawa dalam Sentuhan Modern
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Sebuah pengalaman gastronomi yang menghadirkan cita rasa tradisional
          dengan suasana yang hangat dan penuh kenangan
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors font-medium text-lg w-full sm:w-auto"
          >
            Lihat Menu
          </a>
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#reservation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-md transition-colors font-medium text-lg w-full sm:w-auto"
          >
            Reservasi
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
