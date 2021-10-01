import React from "react";
import List from "../components/List/List";
import PopupImage from "../components/PopupImage/PopupImage";
import SearchBar from "../components/searchBar/SearchBar";

function Index() {
  return (
    <div>
      <div className="container">
        <SearchBar />
        <List />
      </div>
      <PopupImage />
    </div>
  );
}

export default Index;
