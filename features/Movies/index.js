import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectMovies } from "./moviesSlice";

const MoviesComponent = () => {
  const { popularMovies, loading, error } = useSelector(selectMovies);

  return (
    <>
      <header>
        <h2 className="text-primaryLight text-6xl font-semibold">Movies</h2>
        <h3 className="text-primaryLight text-3xl font-semibold">
          You'll Love
        </h3>
      </header>

      <div>
        <h4 className="font-bold text-primaryLight mt-12 border-b border-gray-300">
          Popular Movies
        </h4>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:justify-center">
          {popularMovies?.results?.map((eachMovie) => (
            <Link href={`/movies/${eachMovie.id}`} key={eachMovie.id}>
              <a>
                <div className="card transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:border-secondary-200">
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/w440_and_h660_face/${eachMovie.poster_path}`}
                      alt="pop_movie"
                      className="object-contain"
                    />
                    <div className="badge">
                      <span>
                        {parseFloat(eachMovie.vote_average).toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="m-4">
                    <span className="text-primaryDark font-bold">
                      {eachMovie.title.slice(0, 30)}
                    </span>
                    <span className="block text-xs text-black">
                      {new Date(eachMovie.release_date).getFullYear()}
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesComponent;
