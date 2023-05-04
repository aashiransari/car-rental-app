import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header/Header.css'
import SideMenu from '../SideMenu/SideMenu';
import BackDrop from '../SideMenu/BackDrop';

const Header = () => {
    const [sideMenu, setSidemenu] = useState(false);
    const toggleMenu = () => {
        setSidemenu(!sideMenu)
    }
    return (
        <>
            <BackDrop sideMenu={sideMenu} closeSideMenu={toggleMenu} />
            <SideMenu sideMenu={sideMenu} setSidemenu={setSidemenu} />
            <nav>
                <div className="header__main fixed-top">
                    <div className="logo"><Link to='/'><i className='fa fa-user'>Logo</i></Link></div>
                    <div className="menu__list poppins">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/location'>Locations</Link>
                    </div>
                    <div className="social__media__icons text-white d-flex">
                        <div className="icons"><i className='fa-brands fa-instagram'></i></div>
                        <div className="icons"><i className='fa-brands fa-whatsapp'></i></div>
                        <div className="icons"><i className='fa-brands fa-facebook'></i></div>
                        <div className="icons"><i className='fa-brands fa-youtube'></i></div>
                    </div>
                    <div className="nav_toggle_button d-lg-none text-white" onClick={toggleMenu}>
                        {
                            sideMenu ?
                                <i className="fa-solid fa-xmark"></i>
                                :
                                <i className="fa-solid fa-bars"></i>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
