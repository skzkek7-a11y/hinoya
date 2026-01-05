
import React from 'react';

const menuItems = [
  {
    id: 1,
    name: '히노야 카레 (기본)',
    price: '9,000원',
    description: '히노야만의 비법 소스로 완성한 오리지널 카레. "첫 맛은 달콤, 끝 맛은 매콤"의 정수.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: '등심 돈까스 카레',
    price: '12,500원',
    description: '바삭하게 튀겨낸 두툼한 한돈 등심 돈까스와 정통 카레의 완벽한 조화.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: '치즈 돈까스 카레',
    price: '13,500원',
    description: '풍부한 모짜렐라 치즈가 가득 들어간 돈까스를 곁들인 프리미엄 메뉴.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600'
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#006335] tracking-widest uppercase mb-4">Our Signature</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">히노야의 대표 메뉴</h3>
          <div className="w-16 h-1 bg-[#006335] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-md font-bold text-[#006335]">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 group-hover:text-[#006335] transition-colors">{item.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="text-[#006335] font-bold text-sm flex items-center group-hover:underline">
                  자세히 보기 
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-[#006335] text-[#006335] px-12 py-4 rounded-full font-bold hover:bg-[#006335] hover:text-white transition-all">
            전체 메뉴판 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
