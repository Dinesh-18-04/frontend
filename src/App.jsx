import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroPage from './components/Hero1/HeroPage'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      disable: "phone",
      offset: 100,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
       <Navbar/>
       <HeroPage/>
       <Products/>
       <TopProducts/>
       <Banner/>
    </div>
  )
}

export default App
