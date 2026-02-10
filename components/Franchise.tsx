
import React from 'react';
import { Award, Handshake, HardHat, Info, ChevronRight } from 'lucide-react';

const Franchise: React.FC = () => {
  const competitiveness = [
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      title: "최고의 맛과 가격",
      desc: "칸다 카레 그랑프리 우승의 맛을 합리적인 가격대에 제공하여 고객 만족도를 극대화합니다."
    },
    {
      icon: <Handshake className="w-8 h-8 md:w-10 md:h-10" />,
      title: "상생 협력 시스템",
      desc: "본사와 가맹점의 동반 성장을 위해 유통 마진 최소화와 밀착 운영 관리를 지원합니다."
    },
    {
      icon: <HardHat className="w-8 h-8 md:w-10 md:h-10" />,
      title: "현장 중심 경영",
      desc: "현장에서 직접 땀 흘리며 열정을 쏟을 준비가 된 사업자분들께 성공 노하우를 전수합니다."
    }
  ];

  const costs = [
    { category: '가맹금', item: '가입비', price: '500', note: '영업표시 사용(규모에 따라 다름 500~1000)' },
    { category: '', item: '교육비', price: '0', note: '사전 교육 및 오픈 현장 교육' },
    { category: '인테리어', item: '기본공사', price: '7,500', note: '철거,목/금속 공사, 전기, 도장, 타일, 급 배수 설비, 공조(급/배기)' },
    { category: '기타1', item: '추가공사', price: '2,500', note: '도시가스, 간판, 의/탁자, 냉난방, 전기증설 등' },
    { category: '기타2', item: '주방집기/기물 등', price: '3,500', note: '가스기구, 식기 및 도구, POS장비 일체 포함' },
 ];

  return (
    <section id="franchise" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-[#006335] tracking-widest uppercase mb-3">Franchise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">창업 안내</h3>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto break-keep px-4">
            히노야와 함께 성공적인 비즈니스 파트너십을 시작하십시오.
          </p>
        </div>

        {/* 창업경쟁력 Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1.5 h-6 bg-[#006335] rounded-full"></div>
            <h4 className="text-xl font-bold text-gray-900">창업경쟁력</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {competitiveness.map((item, idx) => (
              <div key={idx} className="p-6 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#006335] transition-all">
                <div className="text-[#006335] mb-4">{item.icon}</div>
                <h5 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h5>
                <p className="text-gray-600 leading-relaxed text-sm break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 개설비용 Section */}
        <div>
          <div className="flex items-center justify-between mb-8 px-1">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-6 bg-[#006335] rounded-full"></div>
              <h4 className="text-xl font-bold text-gray-900">개설비용</h4>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">(만원 / VAT 별도)</span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-5 py-4 font-bold text-gray-900 text-xs">구분</th>
                    <th className="px-5 py-4 font-bold text-gray-900 text-xs">항목</th>
                    <th className="px-5 py-4 font-bold text-gray-900 text-xs text-right">투자비</th>
                    <th className="px-5 py-4 font-bold text-gray-900 text-xs">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {costs.map((cost, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-5 py-4 text-xs text-gray-500">{cost.category}</td>
                      <td className="px-5 py-4 text-xs text-gray-900 font-medium">{cost.item}</td>
                      <td className="px-5 py-4 text-xs text-right font-bold text-gray-900">{cost.price}</td>
                      <td className="px-5 py-4 text-[11px] text-gray-400 italic">{cost.note}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#006335]/5">
                    <td colSpan={2} className="px-5 py-5 font-bold text-gray-900 text-sm">개설비용 합계</td>
                    <td className="px-5 py-5 text-right font-black text-[#006335] text-lg">14,000</td>
                    <td className="px-5 py-5 text-[10px] text-[#006335] font-medium italic">※실13평 기준(직영/가맹 운영 추정치)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <div className="flex items-start space-x-3 text-gray-500 text-[11px] leading-relaxed break-keep">
              <Info size={14} className="mt-0.5 shrink-0" />
              <p>본 금액은 점포 구조 및 공사 기간, 물가 변동에 따라 변경될 수 있으며 외부/소방/공과금 등 추가 공사비는 제외된 금액입니다.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-[#006335] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#004d29] transition-all shadow-lg active:scale-95"
            >
              <span>창업 상담 신청</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
