import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import { SearchOutlined } from "@material-ui/icons";
import { LinkSharp } from "@material-ui/icons";
import { Casino } from "@material-ui/icons";
import { ShoppingCart } from "@material-ui/icons";
import { Fastfood } from "@material-ui/icons";
import { FavoriteOutlined } from "@material-ui/icons";

//AIzaSyD_Pe5ffz1SVXjkgQYwnRILvdlE8CCeLeI
//ac547a9613a4b8420
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="Home"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchOutlined />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage__option">
                <LinkSharp />
                <Link to="/social">Social</Link>
              </div>
              <div className="searchPage__option">
                <Casino />
                <Link to="/entertainment">Entertainment</Link>
              </div>
              <div className="searchPage__option">
                <ShoppingCart />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Fastfood />
                <Link to="/food">Food</Link>
              </div>
              <div className="searchPage__option">
                <FavoriteOutlined />
                <Link to="/health">Health</Link>
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
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt="Images Loading"
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
