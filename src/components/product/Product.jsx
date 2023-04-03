import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, img }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={img} alt="Product-Image" />

      <button onClick={addToCart}>
        <strong>ADD TO CART</strong>
      </button>
    </div>
  );
}

export default Product;
