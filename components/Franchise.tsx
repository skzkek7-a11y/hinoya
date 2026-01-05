
import React from 'react';
import { Award, Handshake, HardHat, Info, ChevronRight } from 'lucide-react';

const Franchise: React.FC = () => {
  const competitiveness = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "최고의 맛과 합리적 가격",
      desc: "칸다 카레 그랑프리 우승의 검증된 맛을 합리적인 가격대에 제공하여 고객 만족도와 재방문율을 극대화합니다."
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "본사와 가맹점의 상생 협력",
      desc: "가맹점의 성공이 곧 본사의 성공이라는 철학으로, 유통 마진 최소화와 밀착 운영 관리를 통해 성공 가능성을 높입니다."
    },
    {
      icon: <HardHat className="w-10 h-10" />,
      title: "준비된 사업자를 위한 지원",
      desc: "현장에서 직접 땀 흘리며 열정을 쏟을 준비가 된 사업자분들께 히노야만의 모든 노하우와 기술을 전수합니다."
    }
  ];

  const costs = [
    { category: '가맹금', item: '가입비', price: '1,000', note: '영업표시의 사용' },
    { category: '', item: '교육비', price: '500', note: '오픈 현장 교육, 영업 관리 및 매장 지도' },
    { category: '소계', item: '합계', price: '1,500', note: '', isSubtotal: true },
    { category: '인테리어', item: '기본공사', price: '5,280', note: '기본 인테리어 공사 (20평 기준)' },
    { category: '간판/사인', item: '내외부 사인', price: '700', note: '간판 및 홀 디자인 요소' },
    { category: '주방기기', item: '시설일체', price: '2,100', note: '주방 시설 일체' },
    { category: '가구', item: '의탁자', price: '920', note: '기본 의탁자, 홀 가구' },
    { category: '시스템', item: 'POS 시스템', price: '210', note: '핸디 2개 포함' },
    { category: '기타', item: '초도 물품', price: '300', note: '오픈 셋팅 물품 일체' },
  ];

  return (
    <section id="franchise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#006335] tracking-widest uppercase mb-4">Franchise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">창업 안내</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            히노야와 함께 성공적인 비즈니스 파트너십을 시작하십시오. 
            검증된 맛과 시스템이 여러분의 도전을 성공으로 이끕니다.
          </p>
        </div>

        {/* 창업경쟁력 Section */}
        <div className="mb-32">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-2 h-8 bg-[#006335] rounded-full"></div>
            <h4 className="text-2xl font-bold text-gray-900">창업경쟁력</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitiveness.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-[#006335] hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="text-[#006335] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h5 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h5>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 개설비용 Section */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-8 bg-[#006335] rounded-full"></div>
              <h4 className="text-2xl font-bold text-gray-900">개설비용</h4>
            </div>
            <span className="text-sm text-gray-400 font-medium">(단위: 만원 / VAT 별도)</span>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-8 py-5 font-bold text-gray-900 text-sm">구분</th>
                    <th className="px-8 py-5 font-bold text-gray-900 text-sm">항목</th>
                    <th className="px-8 py-5 font-bold text-gray-900 text-sm text-right">투자비</th>
                    <th className="px-8 py-5 font-bold text-gray-900 text-sm">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costs.map((cost, idx) => (
                    <tr key={idx} className={`${cost.isSubtotal ? 'bg-gray-50/50' : 'hover:bg-gray-50/30'} transition-colors`}>
                      <td className={`px-8 py-5 text-sm ${cost.isSubtotal ? 'font-bold text-[#006335]' : 'text-gray-500'}`}>
                        {cost.category}
                      </td>
                      <td className={`px-8 py-5 text-sm ${cost.isSubtotal ? 'font-bold text-gray-900' : 'text-gray-900'}`}>
                        {cost.item}
                      </td>
                      <td className={`px-8 py-5 text-sm text-right font-bold ${cost.isSubtotal ? 'text-[#006335] text-lg' : 'text-gray-900'}`}>
                        {cost.price}
                      </td>
                      <td className="px-8 py-5 text-sm text-gray-500 italic">
                        {cost.note}
                      </td>
                    </tr>
                  ))}
                  {/* 인테리어 합계 행 */}
                  <tr className="bg-[#006335]/5">
                    <td colSpan={2} className="px-8 py-6 font-bold text-gray-900">인테리어 합계</td>
                    <td className="px-8 py-6 text-right font-black text-[#006335] text-2xl">9,510</td>
                    <td className="px-8 py-6 text-sm text-[#006335] font-medium">※가맹점주님이 직접 인테리어 시공 가능합니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 하단 안내 문구 */}
          <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <div className="flex items-start space-x-3 text-gray-500 text-sm leading-relaxed">
              <Info size={18} className="mt-0.5 shrink-0 text-gray-400" />
              <div className="space-y-2">
                <p>※ 별도 공사 내역 : 외부공사, 소방공사, 전기 및 가스 증설 공사, 화장실 공사 등 매장 상황에 따른 추가 공사 비용 제외</p>
                <p>※ 위 금액은 당사가 그동안 직영점 및 가맹점 운영 경험을 토대로 추정한 것으로 실제 금액과 다를 수 있으며, 제시된 금액은 점포 구조 및 공사 기간, 물가 변동 사항에 따라 변경 될 수 있습니다.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-3 bg-[#006335] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#004d29] transition-all transform hover:-translate-y-1 shadow-xl"
            >
              <span>상세 창업 상담 신청</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
