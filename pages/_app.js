import { Provider } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import SearchBar from "../components/SearchBar";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Meta />
        <NavBar />
        <SearchBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
