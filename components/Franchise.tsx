
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
    { category: '가맹금', item: '가입비', price: '500', note: '영업표시 사용(규모에 따라 다름 500~1000)', note2: '-' },
    { category: '', item: '교육비', price: '0', note: '사전 교육 및 오픈 현장 교육', note2: '-' },
    { category: '인테리어', item: '기본공사', price: '6,000', note: '벽체, 천장, 바닥, 전기, 설비, 공조', note2: '점주 직접공사 (감리-협의)' },
    { category: '기타1', item: '추가공사', price: '900', note: '가스공사, 간판 및 사인류, 어닝', note2: '' },
    { category: '기타2', item: '주방집기/기물 등', price: '3,500', note: '주방설비, 주방도구, 식기, 가구, POS 및 KIOSK 일체', note2: '-' },
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
                    <th className="px-5 py-4 font-bold text-gray-900 text-xs">비고2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {costs.map((cost, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-5 py-4 text-xs text-gray-500">{cost.category}</td>
                      <td className="px-5 py-4 text-xs text-gray-900 font-medium">{cost.item}</td>
                      <td className="px-5 py-4 text-xs text-right font-bold text-gray-900">{cost.price}</td>
                      <td className="px-5 py-4 text-[11px] text-gray-400 italic">{cost.note}</td>
                      {idx === 2 ? (
                        <td rowSpan={2} className="px-5 py-4 text-[11px] text-gray-400 italic border-l border-gray-50 align-middle text-center bg-gray-50/30">
                          {cost.note2}
                        </td>
                      ) : idx === 3 ? null : (
                        <td className="px-5 py-4 text-[11px] text-gray-400 italic">
                          {cost.note2}
                        </td>
                      )}
                    </tr>
                  ))}
                  <tr className="bg-[#006335]/5">
                    <td colSpan={2} className="px-5 py-5 font-bold text-gray-900 text-sm">개설비용 합계</td>
                    <td className="px-5 py-5 text-right font-black text-[#006335] text-lg">10,900</td>
                    <td colSpan={2} className="px-5 py-5 text-[10px] text-[#006335] font-medium italic">※실13평 기준(직영/가맹 운영 추정치)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <div className="flex items-start space-x-3 text-gray-500 text-[11px] leading-relaxed break-keep">
              <Info size={14} className="mt-0.5 shrink-0" />
              <p>별도고사내역 : 철거, 외부공사(샤시 프레임, 도어/자동문, 유리 등), 냉난방공사, 전면간판 외 추가간판, 화장실공사, 전기증설, 소방공사 등</p>
              <p>제시된 금액은 당사의 직영점 공사 경험으로 추정한 금액으로, 실제 공사환경 및 여건에 따라 금액이 변동될 수 있습니다.</p>
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
