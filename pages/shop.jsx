import { useState, useEffect, useMemo } from "react";
import * as Realm from "realm-web";
import ProductCard from "../components/ProductCard";
// import Pagination from "../components/Pagination";
import styles from "../styles/ShopPage.module.css";

// let PageSize = 6;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();

  useEffect(async () => {
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const products = useMemo(async () => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   const user = await app.logIn(credentials);
  //   const allProducts = await user.functions.getAllProducts();
  //   setProducts(allProducts);
  //   return products.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <ul className={styles.cards}>
        {products &&
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
      </ul>
      {/* <Pagination /> */}
    </div>
  );
}
