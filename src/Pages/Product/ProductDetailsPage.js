import React, { useState, useEffect, useContext } from "react";
import { useParams,useHistory } from "react-router-dom";
import "./Product.css";
import cartContext from "../../Context/cartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  

  const { cart, setCart } = useContext(cartContext);
  const [count, setCount] = useState(1);

  const getproduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    if (id && id !== "") getproduct(id);
  }, [id]);

  return (
    <div className="main-container">
      <div className="productContainer">
        <div className="productImage">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="describtionContainer">
          <h1 className="describtion title">{product.title}</h1>
          <hr />
          <p className="description mainDescription">{product.description}</p>

          <h2 className="describtion price">$ {product.price}</h2>
          <h2 className="describtion category">{product.category}</h2>

          <div className="buttonContainer">
            <button className="countBtn" onClick={() => setCount(count - 1)}>
              -
            </button>
            {count}
            <button
              className="countBtn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="addContainer"></div>
          <button
            onClick={() => {
              setCart([...cart, { ...product, count }]);
              history.push("/checkout");
            }}
            className="countBtn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
