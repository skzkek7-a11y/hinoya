
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://hinoya.jp/wp-content/uploads/2016/03/yushima_DSC_1196-300x210.jpg" 
                alt="Hinoya Kitchen Heritage" 
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
            </div>
            {/* Decorative background box - Hidden on mobile to save visual weight */}
            <div className="hidden md:block absolute -top-10 -left-10 w-64 h-64 bg-[#006335]/10 rounded-full z-0"></div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-80 h-80 bg-[#006335]/5 rounded-full z-0"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-xs font-bold text-[#006335] tracking-widest uppercase mb-3">Brand Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight break-keep">
              도쿄 칸다 카레 그랑프리<br />우승에 빛나는 정통의 맛
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed break-keep">
              <p>
                히노야(Hinoya)는 일본 최고의 카레 격전지로 알려진 도쿄 칸다 지역에서 시작되었습니다. 
                매년 수백 개의 카레 전문점이 경쟁하는 '칸다 카레 그랑프리'에서 우승을 차지하며 
                그 맛과 가치를 일본 전역에 입증하였습니다.
              </p>
              <p className="font-bold text-base md:text-lg text-gray-900 italic border-l-4 border-[#006335] pl-4 py-1">
                "첫 맛은 달콤하게, 끝 맛은 매콤하게"
              </p>
              <p>
                히노야 카레의 독창적인 풍미는 입안에 넣는 순간 퍼지는 달콤함으로 시작하여, 
                넘긴 뒤에 서서히 올라오는 알싸한 매운맛이 특징입니다. 
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-200 pt-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006335]">1st</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Winner</p>
              </div>
              <div className="text-center border-x border-gray-100 px-2">
                <p className="text-2xl md:text-3xl font-bold text-[#006335]">100+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Stores</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006335]">2013</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
