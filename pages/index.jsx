import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { useMongoDB } from "../providers/mongodb";
import { useRealmApp } from "../providers/realm";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  const loadedContent = () => {
    return (
      <div className={styles.container}>
        <main className={styles.container}>
          <Hero />
          <section className="content">
            <h1 className={styles.title}>Products</h1>
            <ul className={styles.cards}>
              {products &&
                products.map((product) => {
                  return (
                    <li className={styles.card} key={product._id}>
                      <ProductCard key={product._id} product={product} />
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className="content">
            <h1 className={styles.title}>Product Categories</h1>
            <div className={styles.small}>
              <CategoryCard
                image="/image/clothing-and-shoes.jpeg"
                name="Clothing"
              />
              <CategoryCard image="/image/home-and-living.jpeg" name="Home" />
              <CategoryCard
                image="/image/eco-friendly.jpeg"
                name="Eco-friendly"
              />
              <CategoryCard
                image="/image/Best-Body-Lotions-For-Women.jpeg"
                name="Self-care"
              />
            </div>
          </section>
        </main>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return products ? loadedContent() : loading();
}

// export async function getStaticProps() {
//   const products = await getAllProducts();
//   return { props: { products } };
// }
