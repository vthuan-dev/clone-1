import Header from './components/Header'
import Hero from './components/Hero'
import GameCategories from './components/GameCategories'
import About from './components/About'
import Articles from './components/Articles'
import Providers from './components/Providers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-['Be_Vietnam_Pro',sans-serif]">
      <Header />
      <div className="overflow-x-hidden">
        <main className="pt-[94px] md:pt-[135px]">
          <Hero />
          <GameCategories />
          <About />
          <Articles />
          <Providers />
        </main>
        <Footer />
      </div>

      {/* Telegram Floating Button */}
      <a
        href="https://t.me/baocode6868"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-2 z-50 flex flex-row items-center gap-2 group"
        aria-label="Chat Telegram"
      >
        {/* Blinking label */}
        <span
          className="tele-blink-text bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[11px] font-bold px-2 py-[3px] rounded-full shadow-lg whitespace-nowrap tracking-wide"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
        >
          🎁 Nhận khuyến mãi ngay
        </span>
        {/* Icon button */}
        <div
          className="tele-glow-btn w-14 h-14 rounded-full flex items-center justify-center bg-[#0088cc] border-2 border-white transition-transform group-hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="none">
            <circle cx="24" cy="24" r="24" fill="#0088cc"/>
            <path d="M11.5 23.5l5.8 2.2 2.2 7.1c.15.47.73.62 1.09.28l3.1-2.9a1 1 0 0 1 1.28-.05l5.6 4.07c.43.31 1.04.07 1.14-.45l4.1-19.6c.11-.52-.42-.96-.91-.76L11.5 21.8c-.55.21-.54 1.01.0 1.22z" fill="white"/>
            <path d="M19.3 25.7l-.6 5.5c0 0 .24.18.5-.06l2.5-2.4" fill="#d2e5f1"/>
          </svg>
        </div>
      </a>
    </div>
  )
}

export default App
