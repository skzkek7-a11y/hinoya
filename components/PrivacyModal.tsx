
import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">개인정보처리방침</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8 max-h-[70vh] overflow-y-auto text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
          <div className="space-y-6">
            <section>
              <h4 className="font-bold text-gray-900 mb-2">1. 개인정보의 수집 및 이용 목적</h4>
              <p>가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</p>
            </section>
            
            <section>
              <h4 className="font-bold text-gray-900 mb-2">2. 처리하는 개인정보 항목</h4>
              <p>- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)</p>
              <p>- 선택항목 : 문의내용</p>
            </section>
            
            <section>
              <h4 className="font-bold text-gray-900 mb-2">3. 개인정보의 처리 및 보유 기간</h4>
              <p>① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.</p>
              <p>② 개인정보의 보유 기간은 5년입니다.</p>
            </section>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
