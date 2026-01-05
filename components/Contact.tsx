
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: '',
    size: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#006335] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10">
          {/* Left: Info Section */}
          <div className="w-full md:w-2/5 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-white/80 leading-relaxed mb-10">
                히노야의 가족이 되고 싶은 예비 창업주님의 문의를 기다립니다.<br />
                남겨주신 소중한 정보는 담당자가 확인 후 24시간 이내에 연락드리겠습니다.
              </p>
              
              <div className="space-y-6">
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1 group-hover:text-white transition-colors">Head Office</p>
                  <p className="font-medium">서울특별시 강남구 강남대로94길 75, 101호</p>
                </div>
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1 group-hover:text-white transition-colors">Email Address</p>
                  <p className="font-medium">hinoyakorea@gmail.com</p>
                </div>
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1 group-hover:text-white transition-colors">Partnership Call</p>
                  <p className="font-medium text-3xl font-black">1588-XXXX</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
              <p className="text-sm font-bold opacity-80 mb-4 uppercase tracking-tighter">Follow our story</p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-bold">Instagram</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-bold">Facebook</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-bold">YouTube</a>
              </div>
            </div>

            {/* Decorative Background for info side */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full pointer-events-none"></div>
          </div>

          {/* Right: Form Section */}
          <div className="w-full md:w-3/5 bg-white p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">성함</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="성함을 입력하세요"
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all placeholder:text-gray-300"
                    required
                  />
                </div>
                {/* Phone Field */}
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">전화번호</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="010-0000-0000"
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all placeholder:text-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">이메일</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all placeholder:text-gray-300"
                    required
                  />
                </div>
                {/* Preferred Region Field */}
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">가맹희망 지역</label>
                  <input 
                    type="text" 
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    placeholder="예: 서울 강남구, 부산 해운대 등"
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Store Size Field */}
              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">가맹희망 매장면적</label>
                <input 
                  type="text" 
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="예: 약 15평, 미정 등"
                  className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              {/* Inquiries / Requests Field */}
              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">기타문의 및 요청사항</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="구체적인 문의 내용을 작성해주시면 더욱 정확한 상담이 가능합니다."
                  className="w-full border-b-2 border-gray-100 py-3 focus:border-[#006335] outline-none transition-all resize-none placeholder:text-gray-300 min-h-[120px]"
                ></textarea>
              </div>

              <div className="flex items-center space-x-3 py-4">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="w-4 h-4 accent-[#006335] cursor-pointer"
                  required 
                />
                <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer select-none">
                  개인정보 수집 및 이용(가맹 상담 목적)에 동의합니다.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#006335] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#004d29] transition-all transform active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                가맹 상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
