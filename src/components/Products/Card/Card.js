import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

const Card = ({ data }) => {
  const history = useHistory();

  const cardClickHandler = (id) => {
    history.push(`/product-details/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="card-wrapper"
      id={"item-" + data.id}
      onClick={() => cardClickHandler(data.id)}
    >
      <img className="coll-img" src={data.preview} alt="things" />
      <div className="coll-content">
        <h3>{data.name}</h3>
        <p className="coll-brand">{data.brand} </p>
        <p className="coll-price">{"Rs " + data.price}</p>
      </div>
    </div>
  );
};

export default Card;
