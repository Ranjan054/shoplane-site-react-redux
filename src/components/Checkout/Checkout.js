import React, { useEffect } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { emptyCart } from "../../redux/actions/actions";

const Checkout = ({ cartData, clearCart }) => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let b = 0;

  cartData.forEach((card) => {
    let c = parseInt(card.count) * parseInt(card.price);
    b = b + c;
  });

  const placeOrderClickHandler = () => {
    clearCart(emptyCart([]));
    history.push("/thankyou");
  };

  return (
    <section id="main-section">
      <h1 id="main-heading">Checkout</h1>

      <div id="content-wrapper">
        <div id="card-list">
          <h3 className="section-heading">
            Total Items: <span id="item-count">{cartData.length}</span>
          </h3>

          {cartData.map((card, index) => (
            <div className="checkout-card" key={index}>
              <div>
                <img
                  src={card.preview}
                  alt="model"
                  className="checkout-product-img"
                />
              </div>
              <div>
                <h4>{card.name}</h4>
                <p>x{card.count}</p>
                <p>
                  <span>Amount: Rs</span>
                  <span> {parseInt(card.count) * parseInt(card.price)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="section-heading">Total Amount</h3>
          <p>
            Amount: Rs
            <span id="total-amount">{b}</span>
          </p>
          <button id="btn-place-order" onClick={placeOrderClickHandler}>
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: (data) => dispatch(data),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
