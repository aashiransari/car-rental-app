import React from 'react'
import '../../styles/LandingPage/Feature.css'

const Feature = () => {
    return (
        <div className='container-fluid feature__container'>
            <div className="row">
                <div className="my-4 text-center col-6 col-sm-6 col-md-6 col-lg-3">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <p>Fair Pricing</p>
                </div>
                <div className="my-4 text-center col-6 col-sm-6 col-md-6 col-lg-3">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <p>Easy Booking</p>
                </div>
                <div className="my-4 text-center col-6 col-sm-6 col-md-6 col-lg-3">
                    <i class="fa-solid fa-shield"></i>
                    <p>Secure Payment</p>
                </div>
                <div className="my-4 text-center col-6 col-sm-6 col-md-6 col-lg-3">
                    <i class="fa-solid fa-face-smile"></i>
                    <p>Reliable</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
