
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#006335] rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Left: Info Section - Compressed on mobile */}
          <div className="w-full md:w-2/5 p-8 md:p-12 text-white relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 md:mb-12 break-keep">
              가족이 되고 싶은 예비 창업주님의 문의를 기다립니다.
            </p>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                <p className="font-medium text-sm">hinoyakorea@gmail.com</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call</p>
                <p className="font-black text-2xl">1588-XXXX</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 hidden md:block">
              <p className="text-xs font-bold opacity-60 mb-4 uppercase">Social</p>
              <div className="flex space-x-6 text-sm font-bold">
                <a href="#" className="hover:text-white opacity-60 hover:opacity-100 transition-all">Instagram</a>
                <a href="#" className="hover:text-white opacity-60 hover:opacity-100 transition-all">YouTube</a>
              </div>
            </div>
          </div>

          {/* Right: Form Section - Reduced padding on mobile */}
          <div className="w-full md:w-3/5 bg-white p-8 md:p-12">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">성함</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">연락처</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">가맹희망지역</label>
                <input 
                  type="text" 
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  placeholder="예: 서울 강남구"
                  className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all placeholder:text-gray-200"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">문의사항</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3} 
                  className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all resize-none min-h-[80px]"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <input type="checkbox" id="privacy" className="accent-[#006335]" required />
                <label htmlFor="privacy" className="text-[10px] text-gray-400 cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#006335] text-white py-4 rounded-xl font-bold text-base hover:bg-[#004d29] transition-all shadow-lg active:scale-95"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
