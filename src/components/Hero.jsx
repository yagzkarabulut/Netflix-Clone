import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  // storda tutulan verileri eriş
  const store = useSelector((store) => store.movieReducer);

  //   random bir sayı
  const i = Math.floor(Math.random() * 20);

  const randomMovie = store.populerMovies[i];

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10 ">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB: </span>
              <span className="text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded hover:bg-red-700">
                Film İzle
              </button>
              <button className="p-2 bg-gray-700 rounded hover:bg-gray-800">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="my-4 img-fluid object-contain rounded hero-img max-h-[300px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
