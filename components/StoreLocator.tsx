
import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const stores = [
  {
    name: '히노야카레 강남본점',
    address: '서울특별시 강남구 테헤란로 123 1층',
    phone: '02-1234-5678',
    hours: '11:00 - 21:00 (L.O 20:30)',
    status: '영업 중'
  },
  {
    name: '히노야카레 성수점',
    address: '서울특별시 성동구 아차산로 56 102호',
    phone: '02-9876-5432',
    hours: '11:30 - 22:00 (L.O 21:30)',
    status: '영업 중'
  },
  {
    name: '히노야카레 판교점',
    address: '경기도 성남시 분당구 판교역로 10 2층',
    phone: '031-456-7890',
    hours: '10:30 - 20:30 (L.O 20:00)',
    status: '영업 마감'
  }
];

const StoreLocator: React.FC = () => {
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
          <div className="w-full lg:w-2/3 h-[500px] bg-gray-300 rounded-3xl overflow-hidden relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101294.0229342938!2d126.96989439999998!3d37.5258975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d522901%3A0x9963623f3d850220!2z7ISc7Jq47Yq567OE7Iuc!5e0!3m2!1sko!2skr!4v1715654321000!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 flex space-x-2">
              <input 
                type="text" 
                placeholder="지역 또는 지점명 입력" 
                className="bg-white px-6 py-3 rounded-full shadow-lg text-sm w-64 outline-none focus:ring-2 focus:ring-[#006335]"
              />
              <button className="bg-[#006335] text-white p-3 rounded-full shadow-lg hover:bg-[#004d29] transition-colors">
                <Navigation size={20} />
              </button>
            </div>
          </div>

          {/* List Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#006335]">
            {stores.map((store, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold group-hover:text-[#006335] transition-colors">{store.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${store.status === '영업 중' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {store.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="text-[#006335] mr-3 shrink-0" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="text-[#006335] mr-3 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="text-[#006335] mr-3 shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
