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
    </div>
  )
}

export default App
