import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StoreRoundedIcon fontSize="large" className="header_logoImage" />
          <h2 className="header_logoTitle">Instant Shop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchRoundedIcon className="header_searchInputIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span className="nav_itemLineTwo nav_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
