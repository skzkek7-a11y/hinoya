
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
      // User provided Formspree endpoint: https://formspree.io/f/xlgwdbbk
      const response = await fetch('https://formspree.io/f/xlgwdbbk', {
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
      console.error('Submission error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#006335] rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Left: Info Section */}
          <div className="w-full md:w-2/5 p-8 md:p-12 text-white relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Contact</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 md:mb-12 break-keep">
              가족이 되고 싶은 예비 창업주님의 문의를 기다립니다. <br/>
              전문 상담사가 상세히 안내해 드립니다.
            </p>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Email</p>
                <p className="font-medium text-sm">hinoyakorea@gmail.com</p>
              </div>
            </div>

          {/* Right: Form Section */}
          <div className="w-full md:w-3/5 bg-white p-8 md:p-12 relative">
            {status === 'SUCCESS' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-[#006335]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">상담 신청 완료!</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  소중한 정보를 남겨주셔서 감사합니다.<br />
                  담당자가 확인 후 빠르게 연락드리겠습니다.
                </p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="bg-[#006335] text-white px-10 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-[#004d29] transition-all"
                >
                  새로 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all bg-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">이메일</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">희망 매장 평수</label>
                    <input 
                      type="text" 
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      placeholder="예: 15평"
                      className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">가맹희망지역</label>
                  <input 
                    type="text" 
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    placeholder="예: 서울 강남구 또는 경기 성남시"
                    className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all bg-transparent placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 tracking-wider">문의사항</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3} 
                    className="w-full border-b border-gray-100 py-2.5 focus:border-[#006335] outline-none text-sm transition-all resize-none min-h-[80px] bg-transparent"
                    placeholder="궁금하신 내용을 입력해 주세요."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <input type="checkbox" id="privacy" className="accent-[#006335] w-4 h-4 cursor-pointer" required />
                  <label htmlFor="privacy" className="text-[10px] text-gray-400 cursor-pointer select-none">개인정보 수집 및 이용에 동의합니다. (필수)</label>
                </div>

                {status === 'ERROR' && (
                  <div className="flex items-center space-x-2 text-red-500 text-[11px] bg-red-50 p-4 rounded-xl border border-red-100">
                    <AlertCircle size={14} />
                    <span>메시지 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className={`w-full flex items-center justify-center space-x-2 text-white py-4 rounded-2xl font-bold text-base transition-all shadow-xl active:scale-[0.98] ${
                    status === 'SUBMITTING' ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#006335] hover:bg-[#004d29] hover:shadow-[#006335]/20'
                  }`}
                >
                  {status === 'SUBMITTING' ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>요청 중...</span>
                    </div>
                  ) : (
                    <>
                      <span>문의하기</span>
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
