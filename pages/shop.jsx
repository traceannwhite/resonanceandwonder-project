// import ProductCard from "../components/ProductCard";
// import Pagination from "../components/Pagination";
// import styles from "../styles/ShopPage.module.css";
// import { getProducts } from "./api/products/index";

// const ShopPage = ({ products }) => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>All Results</h1>
//       <div className={styles.cards}>
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//       <Pagination />
//     </div>
//   );
// };

// export default ShopPage;

// export async function getServerSideProps() {
//   const products = await getProducts();
//   return { props: { products } };
// }

import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import styles from "../styles/ShopPage.module.css";

export default function ShopPage() {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <ul className={styles.cards}>
        {products &&
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
      </ul>
      <Pagination />
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getAllProducts();
//   return { props: { products } };
// }
