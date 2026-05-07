const TARGET = 'https://u8886n.com/'

const quickLinks = [
  { label: 'VỀ CHÚNG TÔI',          href: TARGET },
  { label: 'HƯỚNG DẪN ĐĂNG KÝ',     href: TARGET },
  { label: 'HƯỚNG DẪN ĐĂNG NHẬP',   href: TARGET },
  { label: 'HƯỚNG DẪN NẠP TIỀN',    href: TARGET },
  { label: 'HƯỚNG DẪN RÚT TIỀN',    href: TARGET },
  { label: 'CHÍNH SÁCH BẢO MẬT',    href: TARGET },
  { label: 'ĐIỀU KHOẢN ĐIỀU KIỆN',  href: TARGET },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-[#ccc]">
      <div className="max-w-[1200px] mx-auto px-5 pt-10">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8 border-b border-[#222]">

          {/* Col 1 – About */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <img
                src="https://11prosnowmeprona.za.com/wp-content/uploads/2024/11/logo-u888.png"
                alt="U888"
                className="h-[70px] object-contain"
              />
            </div>
            <p className="text-[12.5px] text-[#999] leading-[1.7] mb-4">
              U888n.info là địa chỉ chính thức của U888 tại Việt Nam. Nơi đây cung cấp đầy đủ
              các loại hình giải trí cá cược như: casinos, bắn cá,... điền với đó là các chương
              trình khuyến mãi độc quyền hấp dẫn nhất thị trường !
            </p>
            <a
              href="#"
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white text-[12px] font-bold px-5 py-2 rounded transition-colors"
            >
              Tìm hiểu ngay
            </a>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 className="text-white text-[13px] font-extrabold uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#f97316]">
              LIÊN KẾT NHANH
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aaa] hover:text-[#f97316] text-[12.5px] transition-colors"
                  >
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Payment */}
          <div>
            <h4 className="text-white text-[13px] font-extrabold uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#f97316]">
              PHƯƠNG THỨC THANH TOÁN
            </h4>
            <img
              src="https://11prosnowmeprona.za.com/wp-content/uploads/2024/11/thong-tin-thanh-toan.png"
              alt="Phương thức thanh toán"
              className="w-full object-contain mt-2"
            />
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="text-white text-[13px] font-extrabold uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#f97316]">
              THÔNG TIN CHI TIẾT
            </h4>
            <div className="space-y-[6px] text-[12px] text-[#aaa] mb-5">
              <p><span className="text-[#ddd] font-semibold">Website: </span><a href="https://11prosnowmeprona.za.com/" className="text-[#f97316] hover:underline">https://11prosnowmeprona.za.com/</a></p>
              <p><span className="text-[#ddd] font-semibold">SĐT: </span>0921111744</p>
              <p><span className="text-[#ddd] font-semibold">Địa chỉ: </span>86 Trường Sơn, Tân Bình, TP. Hồ Chí Minh, Việt Nam</p>
              <p><span className="text-[#ddd] font-semibold">Email: </span>u888n.info@gmail.com</p>
              <p><span className="text-[#ddd] font-semibold">Hastag: </span>#u888 #u888n_info #Nhà_cái_u888 #Cổng_game_u888</p>
            </div>

            <img
              src="https://11prosnowmeprona.za.com/wp-content/uploads/2024/11/8.png"
              alt="Gamble Responsibly 18+"
              className="w-full max-w-[200px] object-contain mt-2"
            />
          </div>

        </div>

        {/* Partners bar */}
        <div className="flex items-center justify-center gap-10 py-6 border-b border-[#222]">
          <img
            src="https://11prosnowmeprona.za.com/wp-content/uploads/2024/11/okvip-logo-ok.png"
            alt="OKVIP"
            width="1032"
            height="151"
            className="max-w-full object-contain"
            style={{ maxHeight: '130px' }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-[12px] text-[#555]">
          Copyright 2026 © Platinium Theme
        </div>

      </div>
    </footer>
  )
}
