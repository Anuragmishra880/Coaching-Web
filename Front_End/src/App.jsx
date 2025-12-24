import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Program/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

import Contact from './components/Contacts/Contact'
// import Inquiry from './components/Enquiry/Inquiry'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Inquiry></Inquiry> */}
      <Hero></Hero>

      <Title subTitle='Our Programs' title='What We Offer'></Title>
      <Programs></Programs>
      <About></About>
      <Title subTitle='Galleries' title='Coaching Photos'></Title>
      <Campus></Campus>

      <Title subTitle='Contact Us' title='Get in touch'></Title>
      <Contact></Contact>

    </div >
  )
}

export default App
