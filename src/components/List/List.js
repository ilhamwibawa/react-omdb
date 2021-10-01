import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovies } from "../../actions/movies";
import Item from "../Item/Item";
import LoadingState from "../LoadingState/LoadingState";
import styles from "./List.module.css";

export default function List() {
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const allLoaded = useSelector((state) => state.movies.allLoaded);
  const pageNumber = useSelector((state) => state.movies.pageNumber);
  const keyword = useSelector((state) => state.filters.keyword);
  const dispatch = useDispatch();

  const isBottom = (el) => {
    if (!el) return;
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = useCallback(() => {
    const el = document.getElementById("movies-container");
    if (isBottom(el) && !loading) {
      dispatch(addMovies(keyword, pageNumber));
    }
  }, [pageNumber, dispatch, loading, keyword]);

  useEffect(() => {
    if (!allLoaded) document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, allLoaded, dispatch]);

  const renderMovies =
    movies &&
    movies.map((movie, index) => (
      <Item
        target={`/${movie.imdbID}`}
        key={index}
        thumbnail={movie.Poster}
        title={movie.Title}
      />
    ));

  return (
    <>
      <div className={styles.row} id="movies-container">
        {renderMovies}
      </div>
      {loading && <LoadingState />}
    </>
  );
}
