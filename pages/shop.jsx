import { useState, useEffect, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/ShopPage.module.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "products");

    const q = query(collectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <ul className={styles.cards}>
        {products &&
          products.map((product) => {
            return (
              <li className={styles.card} key={product.id}>
                <ProductCard key={product.id} product={product} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
