import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Product.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getproduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    //  console.log(data);

    setProduct(data);
  };
  console.log(product);

  useEffect(() => {
    if (id && id !== "") getproduct(id);
  }, [id]);

  // const prodID = useParams();

  return (
    <>
      <div className="productContainer">
        <div className="productImage">
          <img src={product.image} alt={product.title} />
        </div>
        {/* <div className="describtionContainer">
          <h1 className="describtion title">{product.title}</h1>
          <hr />
          <h2 className="describtion price">$ {product.price}</h2>
          <h2 className="describtion category">{product.category}</h2>
          <p className="description mainDescription">{product.describtion}</p>
          <button
          // onClick={() => handleCart(product)}
          // className="btn btn-outline-primary my-5"
          >
            Add to Cart
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ProductDetailsPage;
