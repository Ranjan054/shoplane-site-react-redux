import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";

import "./PdCard.css";

const PdCard = ({
  data,
  previewImgClickHandler,
  clickedId,
  cartStoredItem,
  addItemToCart,
}) => {
  const [cartBtnActive, setCartBtnActive] = useState(false);

  const cartBtnHandler = () => {
    setCartBtnActive(true);
    setTimeout(() => {
      setCartBtnActive(false);
    }, 200);

    let itemPos = -1;
    cartStoredItem.forEach((item, index) => {
      if (item.id === data.id) {
        itemPos = index;
      }
    });

    if (itemPos > -1) {
      cartStoredItem[itemPos].count = cartStoredItem[itemPos].count + 1;
      
    } else {
      data.count = 1
      addItemToCart(addToCart(data));
    }
  };

  return (
    <>
      <h1 className="details-heading">{data.name}</h1>
      <p className="details-brand-name">{data.brand}</p>
      <p>
        Price: Rs <span className="price-value">{data.price}</span>
      </p>
      <p className="details-desc-data">{data.description}</p>
      <p>Product Preview</p>

      <div className="details-product-img-wrapper">
        {data.photos.map((photo, index) => (
          <img
            src={photo}
            alt="model"
            className={
              "details-product-img " +
              (parseInt(clickedId) === index ? "active-card" : "")
            }
            id={index}
            key={index}
            onClick={(e) => previewImgClickHandler(e)}
          />
        ))}
      </div>

      <button
        className={"btn-add-cart " + (cartBtnActive ? "btn-clicked" : "")}
        onClick={cartBtnHandler}
      >
        Add to Cart
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartStoredItem: state.cartItem,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (data) => dispatch(data),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdCard);
