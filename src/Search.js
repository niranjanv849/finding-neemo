import React, { useState } from "react";
import "./Search.css";
import { SearchOutlined } from "@material-ui/icons";
import { Mic } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchOutlined className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type in anything for neemo to find"
        />
        <Mic className="search__inputIcon" />
      </div>
      <div></div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search Google
          </Button>
          <Button variant="outlined">Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Search Google
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            Feeling Lucky
          </Button>
        </div>
      )}
      {/* <Button className="theme__switche">Switch to Dark mode</Button> */}
    </form>
  );
}

export default Search;
