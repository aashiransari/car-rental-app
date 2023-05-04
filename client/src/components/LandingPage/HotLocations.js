import React, { useEffect, useState } from 'react'
import '../../styles/LandingPage/HotLocations.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const HotLocations = () => {
    const [tours, setTours] = useState(null)

    async function getAllTours() {
        const res = await axios.get('/api/getAllTour');
        if (res.data.success) {
            setTours(res.data.data)
        }
    }

    useEffect(() => {
        if (tours === null) {
            getAllTours();
        }
    }, [tours])

    return (
        <div className='container-fluid hot__locations poppins'>
            <h2 className='mb-3'><span className='me-2'>Hot Locations</span><i class="fa-solid fa-fire"></i></h2>
            <div className='row'>
                {
                    tours?.map(item => {
                        return <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <Link to=''><i className='fa-solid fa-arrow-right'></i><span className='ms-1'>{item.name}</span></Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default HotLocations
