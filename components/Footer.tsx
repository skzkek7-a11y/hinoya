
import React from 'react';
import { Instagram, Facebook, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/5 pb-16 mb-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-8">
              <img 
                src="https://static.wixstatic.com/media/0866ad_8df994eb9433440c829d4158566a7f2f~mv2.png/v1/fill/w_492,h_117,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Photoroom-20250307_125337.png" 
                alt="히노야카레" 
                className="h-14 md:h-16 w-auto opacity-100 transition-opacity object-contain"
                style={{ 
                  // 로고의 녹색 글씨가 블랙 배경에서 죽지 않도록 약간의 밝기/대비 보정 및 화이트 글로우 추가
                  filter: 'brightness(1.3) contrast(1.1) drop-shadow(0px 0px 1px rgba(255,255,255,0.3))' 
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-footer-text');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="fallback-footer-text hidden flex items-center space-x-2">
                <span className="text-2xl font-black text-white tracking-tighter">HINOYA</span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed opacity-60">
              도쿄 칸다 카레 그랑프리 우승의 맛,<br />
              정통 일본식 카레 전문점 히노야입니다.<br />
              "처음은 달콤하게, 끝은 매콤하게"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h5 className="text-white font-bold mb-8 text-lg">HINOYA</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#hero" className="hover:text-white transition-colors">홈</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">메뉴 소개</a></li>
                <li><a href="#brand-story" className="hover:text-white transition-colors">브랜드 스토리</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-8 text-lg">FRANCHISE</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#franchise" className="hover:text-white transition-colors">창업 혜택</a></li>
                <li><a href="#franchise" className="hover:text-white transition-colors">개설 절차</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">창업 문의</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-8 text-lg">SUPPORT</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#store-locator" className="hover:text-white transition-colors">매장 찾기</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">공지사항</a></li>
                <li><a href="https://hinoya.jp/" target="_blank" className="hover:text-white transition-colors flex items-center">
                  JAPAN <Globe size={14} className="ml-2" />
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-[11px] uppercase tracking-[0.2em] gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4">
            <span className="opacity-40">© 2024 HINOYA KOREA. ALL RIGHTS RESERVED.</span>
            <a href="#" className="hover:text-white transition-colors font-medium">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors font-bold text-[#006335]">Privacy Policy</a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="mt-12 text-[11px] text-gray-700 leading-relaxed text-center lg:text-left border-t border-white/5 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <p>상호명: (주)히노야코리아 | 대표자: 홍길동 | 사업자등록번호: 000-00-00000 | 주소: 서울특별시 강남구 도산대로 456</p>
            <p className="lg:text-right">고객센터: 1588-XXXX | 이메일: support@hinoya.co.kr | 제휴문의: partner@hinoya.co.kr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
