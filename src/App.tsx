import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-ivory text-ink font-body">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
