import React from 'react'
import { useState, useEffect } from 'react'
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

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  return (
    <div>
      {/* {products} */}
      <h2>product page</h2>
    </div>
  );
}

export default ProductsPage
