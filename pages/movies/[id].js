import { wrapper } from "app/store";
import Layout from "components/Layout";
import { useSelector } from "react-redux";
import MovieDetailComponent from "features/Movies/movieDetail";
import { loadMovieDetail, selectMovies } from "features/Movies/moviesSlice";

const Movies = () => {
  const { movieDetail, loading, error } = useSelector(selectMovies);
  return (
    <Layout title="Movies">
      <MovieDetailComponent
        movieDetail={movieDetail}
        loading={loading}
        error={error}
      />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    await store.dispatch(loadMovieDetail(params.id));
  }
);

export default Movies;
