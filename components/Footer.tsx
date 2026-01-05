
import React from 'react';
import { Instagram, Facebook, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/5 pb-16 mb-10">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#006335] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">日</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">HINOYA</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              도쿄 칸다 카레 그랑프리 우승의 맛,<br />
              정통 일본식 카레 전문점 히노야입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div>
              <h5 className="text-white font-bold mb-6">히노야</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#hero" className="hover:text-white transition-colors">홈</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">메뉴 소개</a></li>
                <li><a href="#brand-story" className="hover:text-white transition-colors">브랜드 스토리</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">가맹안내</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#franchise" className="hover:text-white transition-colors">창업 혜택</a></li>
                <li><a href="#franchise" className="hover:text-white transition-colors">개설 절차</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">창업 문의</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">고객지원</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#store-locator" className="hover:text-white transition-colors">매장 찾기</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">공지사항</a></li>
                <li><a href="https://hinoya.jp/" target="_blank" className="hover:text-white transition-colors flex items-center">히노야 日本 <Globe size={14} className="ml-1" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest gap-6">
          <div className="flex items-center space-x-6">
            <span>© 2024 HINOYA KOREA. ALL RIGHTS RESERVED.</span>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors font-bold text-[#006335]">개인정보처리방침</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="mt-10 text-[10px] text-gray-600 leading-relaxed text-center md:text-left">
          <p>상호명: (주)히노야코리아 | 대표자: 홍길동 | 사업자등록번호: 000-00-00000 | 주소: 서울특별시 강남구 도산대로 456</p>
          <p>고객센터: 1588-XXXX | 이메일: support@hinoya.co.kr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
