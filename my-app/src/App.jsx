import Header from './components/Header'
import Banner from './components/Banner'
import Carrousel from './components/Carrousel'
import ProductCard from './components/productCard'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Carrousel category="soap"/>
      <Carrousel category="skin"/>
      <ProductCard />
      <Footer />
    </>
  )
}

export default App
