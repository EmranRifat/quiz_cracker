import React, { useContext } from 'react';
import { authContext } from '../../Contexts/UserContext';
import"./Blog.css";
const Blog = () => {
    const {user}=useContext(authContext);
    return (
        <div className='blog-container'>
            <h2>Loging user : {user.email} </h2>
        </div>
    );
};

export default Blog;