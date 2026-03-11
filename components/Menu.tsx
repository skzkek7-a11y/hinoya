
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
    name: '새우튀김 카레',
    description: '통통한 대하살을 담백한 빵가루로 튀겨내 카레와 최고의 어울림',
    image: 'https://i.postimg.cc/wjZgFnnT/menu04.jpg'
  },
  {
    id: 4,
    name: '(한우)규스지 카레',
    description: '한우의 스지를 비법양념으로 조리한 히노야만의 메뉴',
    image: 'https://i.postimg.cc/0QWB21ns/menu201.jpg'
  },
  {
    id: 5,
    name: '믹스야채 카레',
    description: '야채 매니아들의 기호를 충족하는 다양한 야채로 구성',
    image: 'https://i.postimg.cc/DZyNTwrv/menu202.jpg'
  },
  {
    id: 6,
    name: '시금치 카레',
    description: '건강과 맛을 한번에 잡은 시금치와 카레의 조화',
    image: 'https://i.postimg.cc/wvTrpjXB/menu203.jpg'
  },
  {
    id: 7,
    name: '치킨카츠 카레',
    description: '국내산 닭고기로 만든 영양 만점 메뉴',
    image: 'https://i.postimg.cc/635PXpr6/menu301.jpg'
  },
  {
    id: 8,
    name: '가지튀김 카레',
    description: '생가지를 바삭하게 튀겨낸 히노야의 프리미엄 메뉴',
    image: 'https://i.postimg.cc/Y0vyvDD4/menu302.jpg'
  },
  {
    id: 9,
    name: '비엔나 카레',
    description: '국내산 한돈 100%, 쫀득하고 탄력있는 최고의 소시지',
    image: 'https://i.postimg.cc/zBtcXY7w/menu303.jpg'
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
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#006335] transition-colors">{item.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
