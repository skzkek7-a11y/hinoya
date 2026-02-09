
import React from 'react';

const menuItems = [
  {
    id: 1,
    name: '(명물)돈카츠 카레',
    description: '국내산 등심으로 만든 히노야카레의 시그니처 메뉴',
    image: 'https://i.postimg.cc/T3Ythr48/menu01.jpg'
  },
  {
    id: 2,
    name: '야끼치즈 카레',
    description: '풍부한 로짜렐라 치즈가 가득 들어간 프리미엄 메뉴',
    image: 'https://i.postimg.cc/4xNWnzSG/menu02.jpg'
  },
  {
    id: 3,
    name: '비엔나 카레',
    description: '고함량 국내산 돼지고기로 만들어 차원이 다른 쫀득함',
    image: 'https://i.postimg.cc/htP2h95q/menu03.jpg?auto=format&fit=crop&q=80&w=600'
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-[#006335] tracking-widest uppercase mb-3">Our Signature</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">대표 메뉴</h3>
          <div className="w-12 h-1 bg-[#006335] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#006335] transition-colors">{item.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
                <button className="text-[#006335] font-bold text-xs flex items-center group-hover:underline">
                  자세히 보기 <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="w-full md:w-auto border-2 border-[#006335] text-[#006335] px-10 py-3.5 rounded-full font-bold hover:bg-[#006335] hover:text-white transition-all text-sm">
            전체 메뉴 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
