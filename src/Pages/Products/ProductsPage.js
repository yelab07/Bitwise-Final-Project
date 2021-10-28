import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

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
    <div className="productList" >
      {products.map((items,index) => (
        <Link to={`/product/${items.id}`}>
          <div key={index } className="product-container">
            <div className="product-poster">
              <img src={items.image} alt={items.title} />
            </div>
            <div className="product-name"><p>{items.title}</p></div>
            <div className="product-info">
              <div className="info">$ {items.price}</div>
              <div className="info">{items.category}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default ProductsPage;
