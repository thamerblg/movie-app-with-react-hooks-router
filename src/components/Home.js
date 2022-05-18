import React from "react";
import { useEffect, useState } from "react";
import AddMovie from "./addMovie/AddMovie";
import Filter from "./filter/Filter";
import MovieList from "./movieList/MovieList";
import { movies } from "../data";

const Home = () => {
  // eslint-disable-next-line
  const [moviesList, setMoviesList] = useState(movies);
  const [titleSearch, setTitleSearch] = useState("");
  const [ratingSearche, setRatingSearche] = useState(0);

  const addNewMovie = (newMovie) => {
    movies.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
    console.log(newMovie);
  };

  const filterMovies = () => {
    setMoviesList(
      movies.filter(
        (movie) =>
          movie.average >= ratingSearche &&
          movie.title.toLowerCase().includes(titleSearch.trim())
      )
    );
  };

  useEffect(() => {
    filterMovies();
    // eslint-disable-next-line
  }, [titleSearch, ratingSearche]);

  return (
    <>
      <AddMovie addNewMovie={addNewMovie} />
      <Filter
        setTitleSearch={setTitleSearch}
        ratingSearche={ratingSearche}
        setRatingSearche={setRatingSearche}
      />
      <MovieList moviesList={moviesList} />
    </>
  );
};

export default Home;
