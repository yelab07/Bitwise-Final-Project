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
  const productList = products.map((prod, index) => {
    const { image, title, price, id,category} = prod;
    return (
      <div>
        <div calssName="product-contaier " key={id}>
          <Link to={`/product/${id}`}>
            {/* <div className="ui link cards">
            <div className="card"> */}
            <div className="product-poster">
              <img src={image} alt={title} />
            </div>
            <div className="product-name">{title}</div>
            <div className="product-info">
              <div className="info">$ {price}</div>
              <div className="info">{category}</div>
            </div>
            {/* </div>
          </div> */}
          </Link>
        </div>
      </div>
    );
  });
    
  return <>{productList}</>;
  
};

export default ProductsPage;
