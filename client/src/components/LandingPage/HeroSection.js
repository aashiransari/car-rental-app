import React from 'react'
import IMAGES from '../../images/LandingPage/index'
import '../../styles/LandingPage/HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero__section">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={IMAGES.thar} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5>Car Rental</h5>
                            <p>Mumbai's new life line</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={IMAGES.thar2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5>Car Rental India</h5>
                            <p>A perfect ride</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={IMAGES.thar3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5>Plan your ride</h5>
                            <p>Your next ride wwith us</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeroSection
