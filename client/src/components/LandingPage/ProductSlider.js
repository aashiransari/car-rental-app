import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios'
import '../../styles/LandingPage/ProductSlider.css'
import { Link } from 'react-router-dom';

const ProductSlider = () => {
    const [tours, setTours] = useState(null)

    async function getAllTours() {
        const res = await axios.get('/api/getAllTour');
        if (res.data.success) {
            setTours(res.data.data)
        }
    }

    const ProductSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Display 4 slides in desktop
        slidesToScroll: 2, // Scroll 4 slides at a time
        // swipeToSlide: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3, // Display 3 slides in tablet
                    slidesToScroll: 1, // Scroll 4 slides at a time
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1.5, // Display 1.5 slides in mobile
                    slidesToScroll: 1, // Scroll 4 slides at a time
                }
            }
        ],
        centerMode: false, // Disable center mode
        centerPadding: 0
    };

    useEffect(() => {
        if (tours === null) {
            getAllTours();
        }
    }, [tours])

    return (
        tours?.length > 0 &&
        <div className='product__slider poppins'>
            <h2 className='mb-3'><span className='me-2'>Mumbai Car Rental</span><i class="fa-solid fa-arrow-right"></i></h2>
            <Slider {...ProductSliderSettings}>
                {
                    tours?.map(item => {
                        return <Link to='/' key={item.id}>
                            <div className='product'>
                                <img src={item.imageGallery[0]} alt="" />
                                <h5 className='mt-2'>{item.name}</h5>
                            </div>

                        </Link>
                    })
                }
            </Slider>
        </div>
    );
};

export default ProductSlider;
