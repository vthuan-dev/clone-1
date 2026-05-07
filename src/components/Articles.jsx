import { useState, useEffect } from 'react'

const TARGET = 'https://u888h8.com?f=6670012'

const articles = [
  {
    id: 1,
    slug: 'cach-choi-tai-xiu-tai',
    date: '07\nNov',
    color: 'e85d04',
    tag: 'Cách Chơi',
    title: 'Cách Chơi Tài Xỉu Tại U888 Đạt Chuẩn Nhất Năm 2024',
    href: TARGET,
  },
  {
    id: 2,
    slug: 'cach-choi-roulette',
    date: '07\nNov',
    color: 'dc2626',
    tag: 'Cách Chơi',
    title: 'Cách Chơi Roulette Tại U888 – Mẹo Nâng Cao Tỷ Lệ Thắng',
    href: TARGET,
  },
  {
    id: 3,
    slug: 'cach-choi-craps',
    date: '07\nNov',
    color: '7c3aed',
    tag: 'Cách Chơi',
    title: 'Cách Chơi Craps – Hướng Dẫn Cho Người Mới Tại U888',
    href: TARGET,
  },
  {
    id: 4,
    slug: 'cach-choi-poker',
    date: '07\nNov',
    color: '1d4ed8',
    tag: 'Cách Chơi',
    title: 'Cách Chơi Poker – Nhận Thưởng Khổng Lồ Ngay Tại U888',
    href: TARGET,
  },
]

function useWpImage(slug, fallbackColor) {
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    fetch(`https://11prosnowmeprona.za.com/wp-json/wp/v2/posts?slug=${slug}&_embed=1`)
      .then((r) => r.json())
      .then((data) => {
        const media = data?.[0]?._embedded?.['wp:featuredmedia']?.[0]
        const url = media?.media_details?.sizes?.medium_large?.source_url
          || media?.source_url
        if (url) setImgUrl(url)
      })
      .catch(() => {})
  }, [slug])

  return imgUrl || `https://placehold.co/300x170/${fallbackColor}/ffffff?text=Loading...`
}

function ArticleCard({ a }) {
  const imgUrl = useWpImage(a.slug, a.color)
  return (
    <a
      href={a.href}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group block"
    >
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt={a.title}
          className="w-full h-[160px] object-cover block group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-[#f97316] text-white text-[11px] font-bold px-2 py-1 rounded text-center leading-tight whitespace-pre-line z-10">
          {a.date}
        </span>
      </div>
      <div
        className="text-center relative z-10"
        style={{ backgroundColor: 'rgb(56,24,24)', padding: '15px 15px 20px' }}
      >
        <h3 className="text-[#f97316] text-[13px] font-bold leading-[1.6] mb-2">
          {a.title}
        </h3>
        <p className="text-[#ccc] text-[11px] leading-[1.5]">
          {a.title.split(' ').slice(0, 5).join(' ')} tại U888 [...]
        </p>
      </div>
    </a>
  )
}

export default function Articles() {
  return (
    <section className="bg-[#f5f5f5] py-9">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-[#ddd]" />
          <h2 className="text-[#e85d04] text-[15px] font-extrabold uppercase tracking-widest whitespace-nowrap">
            BÀI VIẾT NỔI BẬT
          </h2>
          <div className="flex-1 h-px bg-[#ddd]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {articles.map((a) => (
            <ArticleCard key={a.id} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
