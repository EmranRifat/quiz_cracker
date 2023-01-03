import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const products = useLoaderData();
  const items=products.data;
  // console.log(items);
  return (
    <div className="shop-container">
      <h4>home page: {products.data.length}</h4>
    
      <div className="cart-container">
      <h4>cart summary</h4>
    </div>
    
    <div className="home-container">
    {
        items.map(product=><Product
        key={product.id}
        product={product}
        
        ></Product>)
     }
    
    </div>
   

   
     
     
     
    </div>
  );
};

export default Home;
