import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
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
      <main className={styles.container}>
        <Hero />
        <h1>Products</h1>
        <ul className={styles.cards}>
          {products &&
            products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </ul>
        <h1>Product Categories</h1>
        <div className={styles.small}>
          <CategoryCard
            image="/image/clothing-and-shoes.jpeg"
            name="Clothing"
          />
          <CategoryCard image="/image/home-and-living.jpeg" name="Home" />
          <CategoryCard image="/image/eco-friendly.jpeg" name="Eco-friendly" />
          <CategoryCard
            image="https://imgur.com/qb6IW1f.png"
            name="Self-care"
          />
        </div>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getAllProducts();
//   return { props: { products } };
// }
