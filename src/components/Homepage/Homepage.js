import React from "react";
import { connect } from "react-redux";
import Carasoule from "../Carasoule/Carasoule";
import BannerIcons from "../BannerIcons/BannerIcons";
import Products from "../Products/Products";

const Homepage = ({ inputFocusStatus }) => {
  return (
    <>
      {!inputFocusStatus && <Carasoule />}
      {!inputFocusStatus && <BannerIcons />}
      <Products />
    </>
  );
};

const mapStateToProps = (state) => ({
  inputFocusStatus: state.inputFocus,
});

export default connect(mapStateToProps, null)(Homepage);
