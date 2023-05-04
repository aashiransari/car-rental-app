import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
