import React from 'react'
import IMAGES from '../../images/LandingPage';
import Slider from 'react-slick';
import '../../styles/LandingPage/Testimonials.css'

const Testimonials = () => {
    const TestimonialSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Display 4 slides in desktop
        // slidesToScroll: 2, // Scroll 4 slides at a time
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3, // Display 3 slides in tablet
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1, // Display 1.5 slides in mobile
                }
            }
        ],
        centerMode: false, // Disable center mode
        centerPadding: 0
    };

    const testimonials = [
        {
            id: 1, name: "Ansari Ashir", message: "Best experience ever. Had a great time and enjoyed a lot!", date: "10 Jan 2023"
        },
        {
            id: 2, name: "Aakash Sharma", message: "Best experience ever. Had a great time and enjoyed a lot!", date: "15 March 2023"
        },
        {
            id: 3, name: "Priya Rai", message: "Best experience ever. Had a great time and enjoyed a lot!", date: "20 April 2023"
        },
        {
            id: 4, name: "Jhanvi", message: "Best experience ever. Had a great time and enjoyed a lot!", date: "25 April 2023"
        },
    ]

    return (
        <div className='testimonials__container poppins'>
            <h2 className='mb-3 text-center'>Our Testimonials</h2>
            <Slider {...TestimonialSettings}>
                {
                    testimonials.map((item) => {
                        return <div className="testimonials">
                            <div className="row p-0">
                                <h3>{item.name}</h3>
                                <p>{item.message}</p>
                                <div className="mt-2 d-flex justify-content-between">
                                    <p className="m-0">{item.date}</p>
                                    <h3>5.0<i className="ms-1 fa-solid fa-star"></i></h3>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    )
}

export default Testimonials
