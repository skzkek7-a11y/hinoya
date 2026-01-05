
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-[#006335] bg-white inline-block px-3 py-1 rounded-full text-[10px] md:text-sm font-bold tracking-widest mb-4 animate-bounce">
          KANDA CURRY GRAND PRIX WINNER
        </p>
        <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight break-keep">
          처음은 달콤하게,<br />끝은 매콤하게!
        </h1>
        <p className="text-base md:text-xl font-light mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto break-keep">
          일본 최고의 카레 격전지 칸다에서 인정받은 단 하나의 맛.<br className="hidden md:block" />
          정통 일본식 카레의 진수를 경험하세요.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          <a 
            href="#menu" 
            className="bg-[#006335] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#004d29] transition-all transform active:scale-95 w-full md:w-auto text-sm"
          >
            대표 메뉴 보기
          </a>
          <a 
            href="#franchise" 
            className="bg-white text-[#006335] px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all transform active:scale-95 w-full md:w-auto text-sm"
          >
            가맹 상담하기
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens to save space */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-70">
        <div className="w-[1px] h-10 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;
