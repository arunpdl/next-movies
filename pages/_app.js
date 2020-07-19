import { wrapper } from "app/store";
import dynamic from "next/dynamic";
import "assets/styles/index.css";
import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
