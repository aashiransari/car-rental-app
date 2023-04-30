import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import { message } from 'antd'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const clearHandle = () => {
        setName('');
        setSubtitle('');
        setDescription('');
        setImages([]);
    }

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create product data object
        const productData = {
            name: name,
            subtitle: subtitle,
            description: description,
            imageGallery: images,
        };

        // Send POST request to API endpoint
        const res = await axios.post('/api/addProduct', productData);
        if (res.data.success) {
            clearHandle();
            message.success("Tour Added Successfully")
        }
    };

    return (
        <AdminLayout>
            <div className="container-fluid poppins">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Add Product</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Tour Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <pre>
                                {
                                    images && images?.map(item => {
                                        return <img className='me-2' width={60} key={item} src={item} alt="img" />
                                    })
                                }
                            </pre>
                            <div className="form-group mb-3">
                                <label htmlFor="imageGallery">Add Image Gallery</label>
                                <input type="file" className="form-control-file" id="imageGallery" multiple onChange={handleImageUpload} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="subtitle">Subtitle</label>
                                <input type="text" className="form-control" id="subtitle" placeholder="Enter subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" rows="3" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddProduct
