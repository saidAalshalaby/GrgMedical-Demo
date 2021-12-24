import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About'
import Products from '../components/products/Products';
import Contact from '../components/Contact';
import Offers from '../components/Offers';
import Poster from '../components/Poster';



const Home = () => {
    return (
      <div className="home-container">
      <Header/>
      <Hero/>
      <Offers/>
      <About/>
      <Products/>
      <Poster />
      <Contact/>
      <Footer/>
        </div>
    )
}

export default Home
