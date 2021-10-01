import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByKeyword, suggestion } from "../../actions/filters";
import { retrieveMovies } from "../../actions/movies";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [displaySuggestion, setDisplaySuggestion] = useState(false);
  const keyword = useSelector((state) => state.filters.keyword);
  const suggestions = useSelector((state) => state.filters.suggestions);
  const dispatch = useDispatch();

  const onSearchTitle = (e) => {
    const searchTitle = e.target.value;
    dispatch(filterByKeyword(searchTitle));
  };

  const onClickSuggestionHandler = (e) => {
    dispatch(filterByKeyword(e.target.attributes.title.value));
    dispatch(retrieveMovies(e.target.attributes.title.value, 1));
    setDisplaySuggestion(false);
  };

  const findByTitle = async () => {
    dispatch(retrieveMovies(keyword, 1));
  };

  const handleKeydown = (e) => {
    setDisplaySuggestion(true);
    dispatch(suggestion(keyword, 1));
    if (e.key === "Enter") {
      dispatch(retrieveMovies(keyword, 1));
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarArea}>
        <input
          type="text"
          value={keyword}
          placeholder="Search movie..."
          onChange={onSearchTitle}
          onKeyDown={handleKeydown}
          className={styles.searchBarInput}
        />
        <button className={styles.searchBarButton} onClick={findByTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512", width: "18px" }}
          >
            <path d="M508.875 493.792 353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z" />
          </svg>
        </button>
        <div
          className={`${styles.suggestion} ${
            displaySuggestion ? styles.open : ""
          }`}
        >
          {suggestions &&
            suggestions.map((movie) => (
              <li
                className={styles.suggestionItem}
                onClick={onClickSuggestionHandler}
                title={movie.Title}
              >
                <div className={styles.suggestionImage} title={movie.Title}>
                  <img src={movie.Poster} alt="" title={movie.Title} />
                </div>
                <div className={styles.suggestionMeta} title={movie.Title}>
                  <p title={movie.Title}>{movie.Title}</p>
                  <p title={movie.Title}>{movie.Year}</p>
                </div>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
