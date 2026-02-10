
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.postimg.cc/nc1dHdT6/main-img.jpg?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Area - Added top padding to create space from the fixed header */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-24 md:pt-32">
        <div className="inline-block mb-6 md:mb-8 animate-fade-in">
          <p className="text-[#006335] bg-white inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] shadow-xl">
            KANDA CURRY GRAND PRIX WINNER
          </p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl break-keep">
          진심을 담은<br />
          <span className="text-white/90">한 그릇의 감동</span>
        </h1>
        
        <p className="text-base md:text-2xl font-light mb-10 md:mb-14 opacity-90 max-w-2xl mx-auto break-keep leading-relaxed drop-shadow-md">
          처음은 달콤하게, 끝은 매콤하게!<br className="md:hidden" />
          일본 No.1 카레의 자부심을 지금 경험해 보세요.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="#menu" 
            className="group relative bg-[#006335] text-white px-10 py-4 rounded-full font-bold transition-all hover:pr-14 active:scale-95 w-full md:w-auto text-sm overflow-hidden shadow-2xl"
          >
            <span className="relative z-10">대표 메뉴 보기</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>
          <a 
            href="#franchise" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#006335] transition-all active:scale-95 w-full md:w-auto text-sm shadow-xl"
          >
            가맹 상담하기
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-50">
        <span className="text-[10px] uppercase tracking-widest mb-4 font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s infinite ease-in-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
