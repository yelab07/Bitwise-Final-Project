import React from 'react'

const productCard = () => {
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
          {cart.includes(product) ? (
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
                history.push("/cart");
              }}
            >
              Add to Cart
            </button>
          )}
          {/* <button
          onClick={() => {
            setCart([...cart, { ...product, count }]);
            history.push("/cart");
          }}
          className="cntBtn"
        >
          Add to Cart
        </button> */}
        </div>
      </div>
    );
}

export default productCard
