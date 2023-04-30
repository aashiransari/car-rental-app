import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Products = () => {
    const navigate = useNavigate();
    const [tours, setTours] = useState(null)

    async function getAllTours() {
        const res = await axios.get('/api/getAllTour');
        if (res.data.success) {
            setTours(res.data.data)
        }
    }

    const deleteHandler = async (id) => {
        console.log('id:', id)
        try {
            const res = await axios.post('/api/deleteProduct', { id });
            if (res.data.success) {
                message.success("Tour Deleted Successfully")
            } else {
                message.error("Error Deleting Tour");
            }
        } catch (error) {
            console.error(error);
            message.errror("Error deleting Tour");
        }
    };


    useEffect(() => {
        getAllTours();
    }, [tours])

    return (
        <AdminLayout>
            <div className="poppins">
                <div className="d-flex justify-content-between">
                    <h3>Our Car Tours</h3>
                    <button onClick={() => navigate("/add-product")} className='btn btn-success'>Add Product</button>
                </div>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Gallery</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tours?.map((item, index) => {
                                return <tr key={item._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.imageGallery.length} Images</td>
                                    <td>{new Date(item.createdAt).toLocaleString('default', { day: "numeric", month: "long", year: "numeric" })}</td>
                                    <td>
                                        <button onClick={() => navigate(`/edit-product/${item._id}`)} className='btn btn-warning me-2'>Edit</button>
                                        <button onClick={() => deleteHandler(item._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default Products
