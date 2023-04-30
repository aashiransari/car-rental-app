import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const adminMenu = [
        { id: "1", path: "/dashboard", name: "Dashboard", class: "fa fa-user" },
        { id: "3", path: "/products", name: "Products", class: "fa fa-user" },
        // { id: "2", path: "/users", name: "Manage Users", class: "fa fa-user" },
        // { id: "4", path: "/orders", name: "Manage orders", class: "fa fa-user" },
    ]

    return (
        <nav className="sidebar poppins">
            <ul>
                {
                    adminMenu.map(item => {
                        return <div key={item.id}>
                            <li><i className={`${item.class}`}></i><Link to={`${item.path}`}>{item.name}</Link></li>
                        </div>
                    })
                }
                <button className='btn btn-light mt-3'>Logout</button>
            </ul>
        </nav>
    );
};

export default Sidebar;
