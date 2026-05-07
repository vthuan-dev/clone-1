import { useState } from 'react'

const navItems = [
  { label: 'TRANG CHỦ', active: true },
  { label: 'NỔ HŨ' },
  { label: 'CASINO' },
  { label: 'THỂ THAO' },
  { label: 'BẮN CÁ' },
  { label: 'XỔ SỐ' },
  { label: 'ĐÁ GÀ' },
  { label: 'GAME BÀI' },
  { label: 'KHUYẾN MÃI' },
  { label: 'HƯỚNG DẪN' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
    setTimeout(() => setDrawerVisible(true), 10)
  }
  const closeMenu = () => {
    setDrawerVisible(false)
    setTimeout(() => setMenuOpen(false), 300)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-lg">
        {/* Top bar */}
        <div className="bg-[#0d0d0d] border-b border-[#222]">
          <div className="max-w-[1200px] mx-auto px-3 md:px-5 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
            {/* Row 1: hamburger + logo */}
            <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
              {/* Hamburger (mobile only) */}
              <button
                className="md:hidden text-white p-1"
                onClick={openMenu}
                aria-label="Mở menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6"  x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>

              {/* Logo */}
              <div className="flex-1 flex justify-center md:justify-start">
                <a href="https://u8886n.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/logo.png"
                    alt="U888 Logo"
                    className="h-[44px] md:h-[62px] max-w-[160px] md:max-w-none object-contain"
                  />
                </a>
              </div>

              {/* Spacer on mobile to balance hamburger */}
              <div className="w-8 md:hidden" />
            </div>

            {/* Row 2 (mobile) / inline (desktop): Buttons */}
            <div className="flex gap-2 md:gap-3 justify-center md:justify-end">
              <div className="relative inline-block">
                <a href="https://u8886n.com/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold text-[11px] md:text-[12px] px-4 md:px-5 py-[7px] rounded-lg transition-colors tracking-wide shadow-md">
                    ĐĂNG KÝ
                  </button>
                </a>
                <span
                  className="absolute -top-[10px] -right-[8px] text-white font-black text-[9px] leading-none pointer-events-none select-none flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg,#f97316,#dc2626)',
                    width: '42px',
                    height: '17px',
                    clipPath: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  }}
                >
                  +148K
                </span>
              </div>
              <a href="https://u8886n.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold text-[11px] md:text-[12px] px-4 md:px-5 py-[7px] rounded-lg transition-colors tracking-wide shadow-md">
                  ĐĂNG NHẬP
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar — desktop only */}
        <nav className="hidden md:block bg-[#000000]" style={{ minHeight: '55px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <ul className="flex flex-wrap items-center justify-center" style={{ minHeight: '44px' }}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`block px-4 py-[18px] text-[13px] font-bold tracking-wide whitespace-nowrap transition-colors
                      ${item.active
                        ? 'text-white border-t-2 border-white'
                        : 'text-[#e8401a] hover:text-white'
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300"
            style={{ opacity: drawerVisible ? 1 : 0 }}
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div
            className="relative bg-white w-[75%] max-w-[300px] h-full shadow-2xl flex flex-col transition-transform duration-300 ease-out"
            style={{ transform: drawerVisible ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={closeMenu}
              aria-label="Đóng menu"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            </button>

            <ul className="mt-12 flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className={`block px-6 py-[14px] text-[13px] font-semibold border-b border-gray-100 transition-colors
                      ${item.active ? 'text-[#e8401a]' : 'text-[#333] hover:text-[#e8401a]'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
