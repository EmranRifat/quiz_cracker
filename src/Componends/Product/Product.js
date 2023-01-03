import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {
    const {name,logo,id}=product;
    const navigate=useNavigate();
    
 const handleNavigate=()=>{
       navigate(`/quizDetail/${id}`);
    }

    return (
        <div className='cart' >
            <img className='image-container' src={logo} alt="" />
           <h4>{name}</h4> 
           <button onClick={handleNavigate} className='cart-btn'>Go Quiz</button>
        </div>
    );
};

export default Product;