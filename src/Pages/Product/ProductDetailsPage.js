import React, { useState, useEffect, useContext } from "react";
import { useParams,useHistory } from "react-router-dom";
import "./Product.css";
import cartContext from "../../Context/ThemeContext";

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
          <h2 className="describtion price">$ {product.price}</h2>
          <h2 className="describtion category">{product.category}</h2>
          <p className="description mainDescription">{product.describtion}</p>
        </div>
        <div className="addContainer">
          <div>
            <button className="cntBtn" onClick={() => setCount(count - 1)}>
              -
            </button>
            {count}
            <button
              className="cntBtn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setCart([...cart, { ...product, count }]);
            history.push("/checkout");
          }}
          className="cntBtn"
        >
          Add To Cart
        </button>
        {/* {cart.includes(product) ? (
          <button
            className="add remove"
            onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="add"
            onClick={() => {
              setCart([...cart, { ...product, count }]);
              history.push("/");
            }}
          >
            Add to Cart
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
