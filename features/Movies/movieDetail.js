import React from "react";
import Image from "next/image";

const MovieDetailComponent = ({ movieDetail, loading, error }) => {
  console.log(">>>", movieDetail);

  return (
    <div className="mt-20 h-screen">
      <div
        className="bg-no-repeat bg-cover shadow-inner text-white relative"
        style={{
          backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetail?.backdrop_path})`,
        }}
      >
        <div className="sm:flex sm:justify-start">
          <div className="relative">
            <div className="card">
              <Image
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetail?.poster_path}`}
                alt={movieDetail?.title}
                width={300}
                height={450}
              />
            </div>
            <div className="badge bottom-0 right-0 mr-2 mt-2">
              <span>{parseFloat(movieDetail?.vote_average).toFixed(1)}</span>
            </div>
          </div>
          <div className="w-3/5">
            <div className="ml-10">
              <div className="sm:flex sm:justify-start sm:items-baseline">
                <h2 className="text-4xl text-primaryLight font-bold">
                  {movieDetail?.title}
                </h2>
                <span className="ml-5 text-lg">
                  {new Date(movieDetail?.release_date).getFullYear()}
                </span>
                <h4 className="ml-5">
                  Directed by {movieDetail?.crew?.["Director"]?.name}
                </h4>
              </div>
              <div className="text-justify">{movieDetail?.overview}</div>
              <div className="flex justify-start mt-5">
                {movieDetail?.genres?.map((eachGenre) => (
                  <span
                    key={eachGenre.id}
                    className="p-1 mx-1 rounded border border-secondary-100 text-xs cursor-default"
                  >
                    {eachGenre.name}
                  </span>
                ))}
              </div>
              <div className="my-5">
                <div className="font-bold">Cast</div>
                <div className="flex justify-start mt-5 flex-wrap">
                  {movieDetail?.cast?.map((eachCast) => (
                    <span
                      key={eachCast.id}
                      className="p-2 mx-1 my-2 rounded border border-white-100 text-xs text-center whitespace-no-wrap tooltip cursor-pointer relative"
                    >
                      {eachCast.name}
                      <span className="tooltip-text">
                        {eachCast.character || "Unnamed"}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailComponent;
