import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Banner from './Banner'
import Aboutus from './About/Aboutus'
import Counter from './About/Counter'
import Aboutcontent from './About/Aboutcontent'
import Clients from './About/Clients' 
import Testimonials from './About/Testimonials'
import Services from './Services/Services'
import Calltoaction from './Services/Calltoaction'
import Portfolio from './Portfolio/Portfolio'
import Team from './Team/Team'
import Faqs from './FAQs/Faqs'
import Contact from './Contact/Contact'
import Footer from './Footer'
function Mainpage() {
  return (
    <div>
      <Header/>
      {/* <Outlet/> */}
      <Banner/>
      <Aboutus/>
      <Counter/>
      <Aboutcontent/>
      <Clients/>
      <Testimonials/>
      <Services/>
      <Calltoaction/>
      <Portfolio/>
      <Team/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default Mainpage
