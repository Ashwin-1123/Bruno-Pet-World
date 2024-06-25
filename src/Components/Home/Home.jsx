import React from 'react'
import { Hero } from './Hero'
import './CSS/Hero.css'
import { About } from './About'
import { Services } from './Services'
// import { Product } from './Product'
import { Offer } from './Offer'
import { Pricingplan } from './Pricingplan'
export const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Offer/>
      <Pricingplan/>
    </>
  )
}
