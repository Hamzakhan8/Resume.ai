import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import About from './components/About'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App