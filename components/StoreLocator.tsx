
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
    phone: '02-566-3419',
    hours: '11:00 - 21:00',
    status: '영업 중'
  }/*,
  {
    id: 2,
    name: '히노야카레 홍대점',
    address: '서울 마포구 어울마당로 94-7',
    phone: '02-333-5678',
    hours: '11:30 - 21:30',
    status: '영업 중'
  },
  {
    id: 3,
    name: '히노야카레 여의도점',
    address: '서울 영등포구 국제금융로2길 32',
    phone: '02-780-9988',
    hours: '11:00 - 20:30',
    status: '브레이크 타임'
  }*/
];

const StoreLocator: React.FC = () => {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStores = stores.filter(store => 
    store.name.includes(searchTerm) || store.address.includes(searchTerm)
  );

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(activeStore.address + " " + activeStore.name)}&output=embed`;

  return (
    <section id="store-locator" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold text-[#006335] tracking-widest uppercase mb-3">Store</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">매장 찾기</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map Side - Reduced height on mobile */}
          <div className="w-full lg:w-2/3 h-[350px] md:h-[600px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg border-4 border-white">
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Store Map"
            ></iframe>
            
            <div className="absolute top-4 left-4 right-4 md:right-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="매장 검색" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg text-xs w-full md:w-64 outline-none border border-gray-100"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              </div>
            </div>
          </div>

          {/* List Side - Compact items on mobile */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3 max-h-[450px] md:max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredStores.map((store) => (
              <div 
                key={store.id} 
                onClick={() => setActiveStore(store)}
                className={`p-5 md:p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                  activeStore.id === store.id 
                    ? 'bg-[#006335] border-[#006335] shadow-lg' 
                    : 'bg-white border-white hover:border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-base font-bold transition-colors ${
                    activeStore.id === store.id ? 'text-white' : 'text-gray-900'
                  }`}>
                    {store.name}
                  </h4>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                    store.status === '영업 중' 
                      ? (activeStore.id === store.id ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700') 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {store.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className={`flex items-start text-[11px] leading-tight transition-colors ${
                    activeStore.id === store.id ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    <MapPin size={14} className={`mr-2 shrink-0 ${activeStore.id === store.id ? 'text-white' : 'text-[#006335]'}`} />
                    <span>{store.address}</span>
                  </div>
                  <div className={`flex items-center text-[11px] transition-colors ${
                    activeStore.id === store.id ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    <Phone size={14} className={`mr-2 shrink-0 ${activeStore.id === store.id ? 'text-white' : 'text-[#006335]'}`} />
                    <span>{store.phone}</span>
                  </div>
                </div>

                {activeStore.id === store.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                    <button className="bg-white text-[#006335] p-1.5 rounded-full">
                      <Navigation size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default StoreLocator;
