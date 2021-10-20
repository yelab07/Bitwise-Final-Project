import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import "../../App.css";
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
    const { image, title, price, id } = prod;
    return (
        
          <div
            className="product-contaier"
            // onClick={() => {
            //   props.setproductSelected(imdbID);

            // }}
          >
            <img className="product-poster" src={image} alt={title} />
            {/* <div className="product-name">{prod.title}</div> */}
            <div className="product-info">
              <span className="info">Title:{title}</span>
              <span className="info">Price: ${price}</span>
            </div>
         
        
      </div>
    );
    
  });
  return <div className="listed-products">{productList}</div>;
  
};

export default ProductsPage;
