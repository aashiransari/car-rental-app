import React from 'react';
import AdminLayout from './AdminLayout';
import '../../styles/admin/style.css'

const Dashboard = () => {
    return (
        <AdminLayout>
            <h1>Dashboard</h1>
            <p>Welcome to the admin panel of your MERN application!</p>
        </AdminLayout>
    );
};

export default Dashboard;
