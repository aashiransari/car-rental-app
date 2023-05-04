import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer text-white text-center poppins'>
                <div className='row'>
                    <div className="text-start col-12 col-sm-12 col-md-3 col-lg-4 px-4 mb-4">
                        <div className="col-12">
                            <h6>About Us</h6>
                            <p>Looking for a hassle-free car rental experience? Look no further than our car rental website! With a wide selection of vehicles to choose from, competitive pricing, and flexible rental options, we make it easy for you to rent the perfect car for your needs. Whether you're planning a weekend getaway or a long-term trip, our user-friendly website makes booking your rental car quick and easy. Plus, with our commitment to top-notch customer service, you can rest assured that we'll be there every step of the way to ensure your rental experience is a success. So why wait? Book your rental car today and hit the road with confidence!</p>
                        </div>
                        <div className="col-12">
                            <h6>Contact Us</h6>
                            <p>ADDRESS: Near Haseen Farhan Street, Office no 08,  Mumbai Thane Bhiwandi 421302</p>
                        </div>
                        <div className="col-12">
                            <h6>Social Media Links</h6>
                            <div className="social__media__links">
                                <Link target="_blank" to='https://instagram.com/aashir.digital'><i className='fa-brands fa-instagram'></i></Link>
                                <Link target="_blank" to='https://wa.me/919284263003'><i className='fa-brands fa-whatsapp'></i></Link>
                                <Link target="_blank" to=''><i className='fa-brands fa-linkedin'></i></Link>
                                <Link target="_blank" to=''><i className='fa-brands fa-youtube'></i></Link>
                                <Link target="_blank" to=''><i className='fa-brands fa-facebook'></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="left__border text-start col-12 col-sm-12 col-md-3 col-lg-2 px-4 mb-4">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                                <h6>Are you a Vendor?</h6>
                                <p>Get registered with us</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                                <h6>Corporate Query</h6>
                                <p>Having any query? write to us</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                                <h6>Wedding</h6>
                                <p>Bookings</p>
                            </div>
                        </div>
                    </div>
                    <div className="left__border text-start col-12 col-sm-12 col-md-3 col-lg-2 px-4 mb-4">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                                <h6>Coupons & Discounts</h6>
                                <p>Get a coupon</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                                <h6>Feedback</h6>
                                <p>Write us a feedback</p>
                            </div>
                        </div>
                    </div>
                    <div className="left__border quick__links text-start col-12 col-sm-12 col-md-3 col-lg-4 px-4 mb-4">
                        <h4>Quick Links</h4>
                        <div>
                            <p className='m-1'>Privacy Policy</p>
                        </div>
                        <div>
                            <p className='m-1'>Cancellation Policy</p>
                        </div>
                        <div>
                            <p className='m-1'>Terms & Conditions</p>
                        </div>
                        <div>
                            <p className='m-1'>Disclaimer</p>
                        </div>
                        <div>
                            <p className='m-1'>About Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center copyright__text">
                <h5>© Copyright by Car Rental App</h5>
            </div>
        </>
    )
}

export default Footer