import { wrapper } from "app/store";
import Layout from "components/Layout";
import MoviesComponent from "features/Movies";
import { loadPopularMovies } from "features/Movies/moviesSlice";

const Movies = () => {
  return (
    <Layout title="Movies">
      <MoviesComponent />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(loadPopularMovies());
  }
);

export default Movies;
