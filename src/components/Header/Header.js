import React, { useState } from "react";
import "./Header.css";
import selfImg from "../../assets/self.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchData } from "../../redux/actions/actions";
import { showBanner } from "../../redux/actions/actions";

const Header = ({
  cartStoredItem,
  apiFetchedData,
  inputValueSet,
  filterData,
  showBanners,
}) => {
  const [searcValu, setSearchValue] = useState(inputValueSet);
  const [flag, setFlag] = useState(false);

  const inputValueChanged = (e) => {
    setSearchValue(() => e.target.value);

    let searchedData = apiFetchedData.filter((item) => {
      return item.name
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim());
    });
    filterData(searchedData);
    showBanners(e.target.value);
  };

  const navClickHandler = (x, y) => {
    window.scrollTo(x, y);
  };

  const burgerClicked = () => {
    setFlag(!flag);
  };

  return (
    <header>
      <nav id="nav-bar">
        <Link id="logo" to="/">
          <span id="logo-bold">SHOP</span>LANE
        </Link>
        <Link
          to="/#clothe-coll-heading"
          onClick={() => navClickHandler(0, 300)}
          id="header-clothe"
        >
          clothing
        </Link>
        <Link
          to="/#access-coll-heading"
          onClick={() => navClickHandler(0, 1000)}
          id="header-access"
        >
          accessories
        </Link>
        <div id="header-search-wrapper">
          <i id="header-search-icon" className="fas fa-search"></i>
          <input
            id="header-search"
            value={searcValu}
            type="text"
            placeholder="Search for Clothing and Accessories"
            onChange={inputValueChanged}
          />
        </div>

        <div id="right-menu">
          <div id="header-cart-wrapper">
            <p id="header-cart-count">{cartStoredItem.length}</p>
            <Link to="/checkout">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>

          <img id="header-user-img" src={selfImg} alt="a boy" />
        </div>

        <div
          className={
            "sidebar-inactive " + (flag ? "" : "sidebar-inactive-disable")
          }
          onClick={burgerClicked}
        ></div>

        <div id="burger" onClick={burgerClicked}>
          <div className={"line1 " + (flag ? "active-line1" : "")}></div>
          <div className={"line2 " + (flag ? "active-line2" : "")}></div>
          <div className={"line3 " + (flag ? "active-line3" : "")}></div>
        </div>

        <div
          className={
            "sidebar-navlinks " + (flag ? "sidebar-active-navlinks" : "")
          }
        >
          <Link to="/" onClick={burgerClicked} className="sidebar-item1">
            Home
          </Link>
          <Link
            to="/#clothe-coll-heading"
            onClick={burgerClicked}
            className="sidebar-item2"
          >
            clothing
          </Link>
          <Link
            to="/#access-coll-heading"
            onClick={burgerClicked}
            className="sidebar-item2"
          >
            accessories
          </Link>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartStoredItem: state.cartItem,
  apiFetchedData: state.productData,
  inputValueSet: state.inputFocus,
});

const mapDispatchToProps = (dispatch) => ({
  filterData: (pdata) => dispatch(searchData(pdata)),
  showBanners: (value) => dispatch(showBanner(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// rafce
