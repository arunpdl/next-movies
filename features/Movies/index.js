import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:justify-center">
          {popularMovies?.results?.map((eachMovie) => (
            <Link href={`/movies/${eachMovie.id}`} key={eachMovie.id}>
              <a>
                <div className="card-parent w-300px">
                  <div className="card-inner">
                    <div className="card bg-secondary-200 card-front">
                      <div className="h-full w-full">
                        <div className="relative">
                          <Image
                            src={`https://image.tmdb.org/t/p/w400${eachMovie.poster_path}`}
                            alt={eachMovie.title}
                            className="object-cover"
                            height={560}
                            width={325}
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
                    </div>
                    <div className="card bg-secondary-200 card-back h-full w-full">
                      <div className="p-5">
                        <div className="font-semibold text-lg">Synopsis:</div>
                        <div>{eachMovie?.overview}</div>
                      </div>
                    </div>
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
