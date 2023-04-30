import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { message } from 'antd';

const EditProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const uploadedImages = [];

        for (const file of files) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'noteZipper');

            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/ashir/image/upload',
                formData
            );

            uploadedImages.push(response.data.secure_url);
        }

        setImages((prevImages) => [...prevImages, ...uploadedImages]);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.post(`/api/getSingleTour`, { id: params.id });
            if (res.data.success) {
                message.success("single tour fetched success")
                setName(res.data.data.name)
                setSubtitle(res.data.data.subtitle)
                setDescription(res.data.data.description)
                setImages(res.data.data.imageGallery)
            }
        };
        fetchProduct();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedProduct = {
            name,
            subtitle,
            description,
            id: params.id,
            imageGallery: images,
        };

        const res = await axios.post(`/api/updateSingleTour`, updatedProduct);
        if (res.data.success) {
            message.success("Tour Updated successfully")
            navigate("/products")
        }
        // Redirect to product list page
        // history.push('/products');
    };

    return (
        <AdminLayout>
            <div className="poppins">
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <label htmlFor="name">Tour Name</label>
                        <input type="text" className='form-control' id="name" placeholder='Enter Tour Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input type="text" className='form-control' id="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group mb-3'>
                        <div>
                            <label htmlFor="images">Images:</label>
                        </div>
                        {
                            images?.map((item) => {
                                return <img width={100} src={item} alt="" />
                            })
                        }
                        <div className="form-group mb-3">
                            <label htmlFor="imageGallery">Add Image Gallery</label>
                            <input type="file" className="form-control-file" id="imageGallery" multiple onChange={handleImageUpload} />
                        </div>
                    </div>
                    <button className='btn btn-success' type="submit">Save</button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditProduct;
