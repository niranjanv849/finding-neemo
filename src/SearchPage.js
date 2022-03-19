import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import { SearchOutlined } from "@material-ui/icons";
import { Description } from "@material-ui/icons";
import { Image } from "@material-ui/icons";
import { ShoppingBasket } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
//AIzaSyD_Pe5ffz1SVXjkgQYwnRILvdlE8CCeLeI
//ac547a9613a4b8420
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png"
            alt="Home"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <ShoppingBasket />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
