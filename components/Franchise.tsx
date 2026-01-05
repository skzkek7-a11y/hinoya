
import React from 'react';
import { TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: '검증된 맛과 브랜드 파워',
    desc: '일본 No.1 카레 그랑프리 우승으로 검증된 맛과 전 세계적인 인지도'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: '고효율 운영 시스템',
    desc: '초보자도 7일이면 마스터 가능한 표준화된 레시피와 간편한 운영 방식'
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: '체계적인 교육 지원',
    desc: '본사의 전문 교육팀이 제공하는 조리 교육, 서비스 매뉴얼 및 마케팅 전략'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: '지속적인 사후 관리',
    desc: '슈퍼바이저 정기 방문을 통한 매출 분석 및 상권 맞춤형 메뉴 제안'
  }
];

const Franchise: React.FC = () => {
  return (
    <section id="franchise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#006335] tracking-widest uppercase mb-4">Partnership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">히노야 성공 파트너가 되세요</h3>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            히노야는 단순히 매장을 늘리는 것이 아닌, 점주님의 성공적인 창업과 지속 가능한 성장을 최우선 가치로 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-3xl text-center hover:bg-[#006335] group transition-all duration-500">
              <div className="w-16 h-16 bg-[#006335] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{benefit.title}</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-200 transition-colors leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#006335] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h4 className="text-3xl font-bold mb-6">가맹 개설 절차</h4>
              <div className="space-y-6">
                {[
                  { step: '01', title: '가맹상담 및 신청', desc: '온라인/전화 상담을 통한 상권 확인' },
                  { step: '02', title: '상권분석 및 점포개발', desc: '전문가의 데이터 기반 입지 선정 지원' },
                  { step: '03', title: '가맹계약 체결', desc: '최종 상권 및 계약 조건 협의 후 체결' },
                  { step: '04', title: '인테리어 및 조리교육', desc: '본사 표준 매뉴얼에 따른 시공 및 교육' },
                  { step: '05', title: '그랜드 오픈', desc: '본사 지원 인력 투입 및 매장 운영 활성화' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <span className="text-white/40 font-bold text-xl">{item.step}</span>
                    <div>
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <div className="inline-block p-1 bg-white/10 rounded-3xl backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
                  alt="Interior" 
                  className="rounded-2xl w-full max-w-md shadow-2xl"
                />
              </div>
              <p className="mt-8 text-2xl font-light italic">"작은 공간에서 만드는 큰 수익의 기적"</p>
              <button className="mt-8 bg-white text-[#006335] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                창업 가이드북 신청하기
              </button>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
