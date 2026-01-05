
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582234372722-50d7ccc30eba?auto=format&fit=crop&q=80&w=1200" 
                alt="Hinoya Kitchen Heritage" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#006335]/10 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#006335]/5 rounded-full z-0"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-[#006335] tracking-widest uppercase mb-4">Brand Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              도쿄 칸다 카레 그랑프리<br />우승에 빛나는 정통의 맛
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                히노야(Hinoya)는 일본 최고의 카레 격전지로 알려진 도쿄 칸다 지역에서 시작되었습니다. 
                매년 수백 개의 카레 전문점이 경쟁하는 '칸다 카레 그랑프리'에서 우승을 차지하며 
                그 맛과 가치를 일본 전역에 입증하였습니다.
              </p>
              <p className="font-medium text-lg text-gray-900 italic border-l-4 border-[#006335] pl-4">
                "첫 맛은 달콤하게, 끝 맛은 매콤하게"
              </p>
              <p>
                히노야 카레의 독창적인 풍미는 입안에 넣는 순간 퍼지는 기분 좋은 달콤함으로 시작하여, 
                넘긴 뒤에 서서히 올라오는 알싸한 매운맛이 특징입니다. 
                이 중독성 있는 맛의 밸런스는 수십 년간 이어온 비법 소스와 엄선된 향신료의 배합에서 탄생했습니다.
              </p>
              <p>
                우리는 단순한 한 끼 식사를 넘어, 고객님께 일본 현지의 장인 정신이 깃든 
                최고의 미식 경험을 제공하는 것을 사명으로 합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#006335] mb-1">1st</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Grand Prix Winner</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#006335] mb-1">100+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Stores in Japan</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#006335] mb-1">2013</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Founded Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
