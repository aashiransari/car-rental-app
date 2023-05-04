import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/LandingPage/HeroSection'
import ProductSlider from '../components/LandingPage/ProductSlider'
import Feature from '../components/LandingPage/Feature'
import Testimonials from '../components/LandingPage/Testimonials'
import HotLocations from '../components/LandingPage/HotLocations'

const LandingPage = () => {
    return (
        <Layout>
            <HeroSection />
            <ProductSlider />
            <Feature />
            <HotLocations />
            <Testimonials />
        </Layout>
    )
}

export default LandingPage
