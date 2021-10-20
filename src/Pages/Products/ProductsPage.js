import React from 'react'
import { useState,useEffect } from 'react'
const ProductsPage = () => {
  const [products, setProducts] = useState();

    const getproducts= async () => {
      const response = await fetch(`https://fakestoreapi.com/products/1`);
      const data = await response.json();
       console.log(data);

        setProducts(data);
    };
    useEffect(() => {
      getproducts();
    }, []);
  
// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

    return (
        <div>
            <h2>product page</h2>
        </div>
    )
}

export default ProductsPage
