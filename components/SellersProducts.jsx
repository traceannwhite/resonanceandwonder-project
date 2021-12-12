import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

const SellersProducts = ({ product }) => {
  const [products, setProducts] = useState([]);

  // useEffect(async () => {
  //   const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
  //   const app = new Realm.App({ id: REALM_APP_ID });
  //   const credentials = Realm.Credentials.anonymous();
  //   try {
  //     const user = await app.logIn(credentials);
  //     const allProducts = await user.functions.getAllProducts();
  //     setProducts(allProducts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const router = useRouter();

  const [changeProduct, setChangeProduct] = useState([]);

  const editProduct = async (product) => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      await user.functions.deleteProduct(product._id);
      const allProducts = await user.functions.updateProduct();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
    router.push("/sellerprofile");
  };

  const handleChange = (e) => {
    setChangeProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const deleteProduct = async (product) => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      await user.functions.deleteProduct(product._id);
      const allProducts = await user.functions.getAllProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
    router.push("/sellerprofile");
  };
  return (
    <div key={product.id}>
      <Link href={`/product/${product.id}`}>
        <a>
          <div className={styles.card}>
            <Image
              src={product.image}
              className={styles.image}
              alt="product"
              width="300px"
              height="200px"
            />
            <h4 className={styles.title}>{product.title}</h4>
            <p>$ {product.price}</p>
          </div>
        </a>
      </Link>
      <button className={styles.button} onClick={() => editProduct(product)}>
        Edit
      </button>
      <button className={styles.button} onClick={() => deleteProduct(product)}>
        Delete
      </button>
    </div>
  );
};

export default SellersProducts;
