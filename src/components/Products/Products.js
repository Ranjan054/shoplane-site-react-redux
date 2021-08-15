import React, { useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
import Spinner from "../Spinner/Spinner";
import "./Products.css";
import { connect } from "react-redux";
import { productData } from "../../redux/actions/actions";

const Products = ({ data, filterData, inputFocusStatus, apiFetchedData }) => {
  useEffect(() => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => apiFetchedData(res.data))
      .catch((err) => console.log(err));
  }, [apiFetchedData]);

  



  return (
    <>
      <section id="products">
        <h1 id="clothe-coll-heading">Clothing for Men and Women</h1>
        <div id="clothe-collection" className="card-layout">
          {inputFocusStatus ? (
            filterData.map(
              (item) => !item.isAccessory && <Card data={item} key={item.id} />
            )
          ) : data.length ? (
            data.map(
              (item) => !item.isAccessory && <Card data={item} key={item.id} />
            )
          ) : (
            <Spinner />
          )}
        </div>

        <h1 id="access-coll-heading">Accessories for Men and Women</h1>
        <div id="clothe-collection" className="card-layout padding-bottom">
          {inputFocusStatus ? (
            filterData.map(
              (item) => item.isAccessory && <Card data={item} key={item.id} />
            )
          ) : data.length ? (
            data.map(
              (item) => item.isAccessory && <Card data={item} key={item.id} />
            )
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.productData,
  filterData: state.filterData,
  inputFocusStatus: state.inputFocus,
});

const mapDispatchToProps = (dispatch) => ({
  apiFetchedData: (pdata) => dispatch(productData(pdata)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
