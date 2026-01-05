
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  status: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: '히노야카레 강남본점',
    address: '서울 강남구 강남대로94길 75',
    phone: '02-555-1234',
    hours: '11:00 - 21:00 (L.O 20:30)',
    status: '영업 중'
  },
  {
    id: 2,
    name: '히노야카레 홍대점',
    address: '서울 마포구 어울마당로 94-7',
    phone: '02-333-5678',
    hours: '11:30 - 21:30 (L.O 21:00)',
    status: '영업 중'
  },
  {
    id: 3,
    name: '히노야카레 여의도점',
    address: '서울 영등포구 국제금융로2길 32',
    phone: '02-780-9988',
    hours: '11:00 - 20:30 (L.O 20:00)',
    status: '브레이크 타임'
  }
];

const StoreLocator: React.FC = () => {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 필터링된 매장 목록
  const filteredStores = stores.filter(store => 
    store.name.includes(searchTerm) || store.address.includes(searchTerm)
  );

  // 구글 지도 임베드 URL 생성 (주소 기반)
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(activeStore.address + " " + activeStore.name)}&output=embed`;

  return (
    <section id="store-locator" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#006335] tracking-widest uppercase mb-4">Store Locator</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">매장 찾기</h3>
          <div className="w-16 h-1 bg-[#006335] mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Map Side */}
          <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] bg-gray-200 rounded-[40px] overflow-hidden relative shadow-2xl border-8 border-white">
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Map"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
            
            {/* Map Search Overlay */}
            <div className="absolute top-8 left-8 right-8 md:right-auto flex space-x-2">
              <div className="relative group flex-grow md:flex-grow-0">
                <input 
                  type="text" 
                  placeholder="지역 또는 지점명 입력" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl text-sm w-full md:w-80 outline-none focus:ring-4 focus:ring-[#006335]/20 border border-gray-100 transition-all"
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>

          {/* List Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div 
                  key={store.id} 
                  onClick={() => setActiveStore(store)}
                  className={`p-8 rounded-[32px] cursor-pointer transition-all duration-300 border-2 ${
                    activeStore.id === store.id 
                      ? 'bg-[#006335] border-[#006335] shadow-2xl scale-[1.02]' 
                      : 'bg-white border-white hover:border-gray-100 hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h4 className={`text-xl font-bold transition-colors ${
                      activeStore.id === store.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {store.name}
                    </h4>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                      store.status === '영업 중' 
                        ? (activeStore.id === store.id ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700') 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className={`flex items-center text-sm transition-colors ${
                      activeStore.id === store.id ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      <MapPin size={18} className={`mr-4 shrink-0 ${activeStore.id === store.id ? 'text-white' : 'text-[#006335]'}`} />
                      <span className="leading-snug">{store.address}</span>
                    </div>
                    <div className={`flex items-center text-sm transition-colors ${
                      activeStore.id === store.id ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      <Phone size={18} className={`mr-4 shrink-0 ${activeStore.id === store.id ? 'text-white' : 'text-[#006335]'}`} />
                      <span>{store.phone}</span>
                    </div>
                    <div className={`flex items-center text-sm transition-colors ${
                      activeStore.id === store.id ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      <Clock size={18} className={`mr-4 shrink-0 ${activeStore.id === store.id ? 'text-white' : 'text-[#006335]'}`} />
                      <span>{store.hours}</span>
                    </div>
                  </div>

                  {activeStore.id === store.id && (
                    <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white text-xs font-bold">현재 선택된 매장</span>
                      <button className="bg-white text-[#006335] p-2 rounded-full hover:scale-110 transition-transform">
                        <Navigation size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default StoreLocator;
