import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
// import "../../App.css";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    //  console.log(data);

    setProducts(data);
  };
  console.log(products);

  useEffect(() => {
    getproducts();
  }, []);
  
    
    return (
      <div>
        
        <div>
          {products.map((items, index) => (
            { image, title, price, id,category} = items;
            // <Link  to={`/products/${id}`}>
              <div className="product-poster">
                <img src={image} alt={title} />
              </div>
              <div className="product-name">{title}</div>
              <div className="product-info">
                <div className="info">$ {price}</div>
                <div className="info">{category}</div>
              </div>
            // </Link>
          ))}
        </div>
      </div>
    );
  
    

  
};

export default ProductsPage;
