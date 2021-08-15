import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dummyImg from "../../assets/dummy.png";
import Spinner from "../Spinner/Spinner";
import PdCard from "./PdCard/PdCard";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [bigImg, setBigImg] = useState(dummyImg);
  const [flag, setFlag] = useState(true);
  const [clickedId, setClickedId] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
      .then((res) => setSelectedProductData(res.data));
  }, [id]);

  const imgChangeHandler = (e) => {
    setFlag(false);
    setBigImg(e.target.src);
    setClickedId(e.target.id);
  };

  return (
    <section>
      <div id="main-div">
        <div className="details-img-wrapper">
          <img
            id="left-big-img"
            className="details-img"
            src={
              selectedProductData
                ? flag
                  ? selectedProductData.preview
                  : bigImg
                : dummyImg
            }
            alt="a model man"
          />
        </div>

        <div id="details-wrapper">
          {selectedProductData ? (
            <PdCard
              data={selectedProductData}
              previewImgClickHandler={imgChangeHandler}
              clickedId={clickedId}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
