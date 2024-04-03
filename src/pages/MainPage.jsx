import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/action/movieAction";
import { getGenres } from "../redux/action/genreAction";
import Hero from "../components/Hero";
import genreReducers from "./../redux/reducers/genreReducer";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const MainPage = () => {
  const genreState = useSelector((store) => store.genreReducers);
  const dispatch = useDispatch();
  // apiden popüler filmler al ve store'a aktar
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError} </p>
      ) : (
        genreState.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
