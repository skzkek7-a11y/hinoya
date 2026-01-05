
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#006335] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="w-full md:w-2/5 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-white/80 leading-relaxed mb-10">
                히노야에 대해 궁금한 점이 있으신가요?<br />
                언제든 편하게 문의해 주세요. 최대한 빠르게 답변 드리겠습니다.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Office</p>
                  <p className="font-medium">서울특별시 강남구 도산대로 456 히노야빌딩</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Email</p>
                  <p className="font-medium">support@hinoya.co.kr</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Call</p>
                  <p className="font-medium text-2xl">1588-XXXX</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm font-bold opacity-80 mb-2">Social</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
                <a href="#" className="hover:text-white/60 transition-colors">Facebook</a>
                <a href="#" className="hover:text-white/60 transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 bg-white p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">성함</label>
                  <input 
                    type="text" 
                    placeholder="홍길동"
                    className="w-full border-b border-gray-200 py-3 focus:border-[#006335] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">연락처</label>
                  <input 
                    type="tel" 
                    placeholder="010-0000-0000"
                    className="w-full border-b border-gray-200 py-3 focus:border-[#006335] outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">문의 유형</label>
                <select className="w-full border-b border-gray-200 py-3 focus:border-[#006335] outline-none transition-colors bg-white">
                  <option>가맹 문의</option>
                  <option>고객의 소리</option>
                  <option>제휴 제안</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">문의 내용</label>
                <textarea 
                  rows={4} 
                  placeholder="내용을 입력해주세요"
                  className="w-full border-b border-gray-200 py-3 focus:border-[#006335] outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div className="flex items-center space-x-2 py-4">
                <input type="checkbox" id="privacy" className="accent-[#006335]" />
                <label htmlFor="privacy" className="text-sm text-gray-500">개인정보 수집 및 이용에 동의합니다.</label>
              </div>
              <button className="w-full bg-[#006335] text-white py-5 rounded-2xl font-bold hover:bg-[#004d29] transition-all transform active:scale-95">
                문의하기 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
