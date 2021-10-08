import styles from "../styles/SearchBar.module.css";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import dynamic from "next/dynamic";

const SearchBar = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("search");
  const filteredProducts = filterProducts(products, query);

  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
    });
  };

  const Scroll = dynamic(
    () => {
      return import("./Scroll");
    },
    { ssr: false }
  );

  return (
    <div className={styles.searchbarcontainer}>
      <form classname={styles.searchbar}>
        <label className={styles["visually-hidden"]}>
          Search for anything.
        </label>
        <input
          type="text"
          placeholder="Search for anything."
          id="search"
          name="search"
        />
        <button type="submit">
          <SearchIcon className={styles.searchicon} />
        </button>
      </form>
      <ul className={styles.searchresults}>
        {filteredProducts.map((product) => {
          return (
            <div>
              <li>
                <ProductCard product={product} />
              </li>
              <Scroll />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
