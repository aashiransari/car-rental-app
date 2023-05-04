import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/SideMenu/style.css'

const SideMenu = ({ sideMenu, setSidemenu }) => {
    return (
        <div className={`${sideMenu ? "sideMenu sideMenu__open" : "sideMenu"} sticky-top top-sticky`}>
            <ul>
                <li>
                    <Link onClick={() => setSidemenu(false)} to='/about'>About Us</Link>
                </li>
                <li>
                    <Link onClick={() => setSidemenu(false)} to='/contact'>Contact Us</Link>
                </li>
                {/* <div className='text-center Mon_font'>
                    <img src={contactme} alt="" />
                    <button onClick={() => navigate("/contact")} className='btn btn-warning'>Talk to our expert</button>
                </div> */}
            </ul>
        </div>
    )
}

export default SideMenu
