import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Process />
        </div>
    )
}

export default Home