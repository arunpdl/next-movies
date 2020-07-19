import React from "react";

const MovieDetailComponent = ({ movieDetail, loading, error }) => {
  // console.log(">>>", movieDetail);

  return (
    <div className="mt-20 h-screen">
      <div
        className="bg-no-repeat bg-cover shadow-inner text-white"
        // style={{
        //   backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetail?.backdrop_path})`,
        // }}
      >
        {/* <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-0"> */}
        <div className="sm:flex sm:justify-start">
          <div className="relative">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetail?.poster_path}`}
                alt="movie-poster"
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
                    className="p-1 mx-1 rounded border border-secondary-100 text-xs"
                  >
                    {eachGenre.name}
                  </span>
                ))}
              </div>
              <div className="my-5">
                <div className="font-bold">Cast</div>
                <div className="flex justify-start mt-5 ">
                  {movieDetail?.cast?.map((eachCast) => (
                    <span
                      key={eachCast.id}
                      className="p-1 mx-1 rounded border border-white-100 text-xs text-center tooltip"
                    >
                      {eachCast.name}
                      <span className="tooltip-text">{eachCast.character}</span>
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
