const categories = [
  { label: 'CASINO',       src: '/images/1.png' },
  { label: 'THỂ THAO',     src: '/images/2.png' },
  { label: 'GAME BÀI 3D',  src: '/images/3.png' },
  { label: 'NỔ HŨ',        src: '/images/4.png' },
  { label: 'BẮN CÁ',       src: '/images/5.png' },
  { label: 'XỔ SỐ',        src: '/images/6.png' },
]

export default function GameCategories() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group"
            >
              <img
                src={cat.src}
                alt={cat.label}
                className="w-full h-[150px] md:h-[270px] object-cover block group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
