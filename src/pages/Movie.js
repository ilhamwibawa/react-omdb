import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../actions/movies";
import styles from "./Movie.module.css";

function Movie() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <Link to="/" className={styles.btnBack}>
        Back
      </Link>
      {loading ? (
        <div className={styles.loadingBar}>Loading...</div>
      ) : (
        <div className={styles.content}>
          <div className={styles.image}>
            <span className={styles.rating}>{movie.imdbRating}</span>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className={styles.description}>
            <h4>{movie.Title}</h4>
            <p>{movie.Plot}</p>
            <table>
              <tbody>
                <tr>
                  <td width="80">Year</td>
                  <td>:</td>
                  <td>{movie.Year}</td>
                </tr>
                <tr>
                  <td width="80">Type</td>
                  <td>:</td>
                  <td>{movie.Type}</td>
                </tr>
                <tr>
                  <td width="80">Genre</td>
                  <td>:</td>
                  <td>{movie.Genre}</td>
                </tr>
                <tr>
                  <td width="80">Released</td>
                  <td>:</td>
                  <td>{movie.Released}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
