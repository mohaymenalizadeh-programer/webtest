import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Category from './components/Category'
import BannerSection from './components/BannerSection'
import Shophomepage from './components/Shophomepage'
import HeroBanner from './components/HeroBanner'
import SpecialCategories from './components/SpecialCategories'
import HeroBannertwo from './components/HeroBannertwo'
import TrustFeatures from './components/TrustFeatures'
import FooterSection from './components/FooterSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Homepage/>
      <Category/>
      <BannerSection/>
      <Shophomepage/>
      <HeroBanner/>
      <SpecialCategories/>
      <HeroBannertwo/>
      <TrustFeatures/>
      <FooterSection/>
    </>
  )
}

export default App
