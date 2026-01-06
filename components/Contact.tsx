
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch('https://formspree.io/f/xvzgjoaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', phone: '', email: '', region: '', size: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#006335] rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Left: Info Section */}
          <div className="w-full md:w-2/5 p-8 md:p-12 text-white relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 md:mb-12 break-keep">
              가족이 되고 싶은 예비 창업주님의 문의를 기다립니다. 전문가가 상세히 상담해 드립니다.
            </p>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                <p className="font-medium text-sm">hinoyakorea@gmail.com</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call Center</p>
                <p className="font-black text-2xl">1588-XXXX</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 hidden md:block">
              <p className="text-xs font-bold opacity-60 mb-4 uppercase">Social channels</p>
              <div className="flex space-x-6 text-sm font-bold">
                <a href="#" className="hover:text-white opacity-60 hover:opacity-100 transition-all">Instagram</a>
                <a href="#" className="hover:text-white opacity-60 hover:opacity-100 transition-all">YouTube</a>
              </div>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="w-full md:w-3/5 bg-white p-8 md:p-12 relative">
            {status === 'SUCCESS' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-500">
                <CheckCircle2 size={64} className="text-[#006335] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">상담 신청 완료!</h3>
                <p className="text-gray-500 text-sm mb-8">소중한 정보를 남겨주셔서 감사합니다.<br />담당자가 영업일 기준 24시간 이내에 연락드리겠습니다.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="bg-[#006335] text-white px-8 py-3 rounded-full font-bold text-sm"
                >
                  새로 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">이메일</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">희망 매장 평수</label>
                    <input 
                      type="text" 
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      placeholder="예: 20평"
                      className="w-full border-b border-gray-100 py-2 focus:border-[#006335] outline-none text-sm transition-all"
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
                    placeholder="예: 서울 강남구 또는 경기 성남시"
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
                    placeholder="문의하실 내용을 자유롭게 적어주세요."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <input type="checkbox" id="privacy" className="accent-[#006335]" required />
                  <label htmlFor="privacy" className="text-[10px] text-gray-400 cursor-pointer">개인정보 수집 및 이용에 동의합니다. (필수)</label>
                </div>

                {status === 'ERROR' && (
                  <div className="flex items-center space-x-2 text-red-500 text-[11px] bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={14} />
                    <span>전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className={`w-full flex items-center justify-center space-x-2 text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95 ${
                    status === 'SUBMITTING' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#006335] hover:bg-[#004d29]'
                  }`}
                >
                  {status === 'SUBMITTING' ? (
                    <span className="flex items-center animate-pulse">전송 중...</span>
                  ) : (
                    <>
                      <span>상담 신청하기</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
