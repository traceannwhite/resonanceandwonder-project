import Link from "next/link";
// import SellersProducts from "../../components/SellersProducts";
import styles from "../../styles/SellerProfile.module.css";
import { useState, useEffect } from "react";
// import * as Realm from "realm-web";

const SellerProfile = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
  //   const app = new Realm.App({ id: REALM_APP_ID });
  //   const credentials = Realm.Credentials.anonymous();
  //   async function init() {
  //     try {
  //       const user = await app.logIn(credentials);
  //       const allProducts = await user.functions.getAllProducts();
  //       setProducts(allProducts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   init();
  // }, []);

  return (
    <div className={styles.container}>
      <h1>Seller Profile</h1>
      <div className={styles.infobox}>
        <h3>Add a New Product</h3>
        <div className={styles.newproduct}>
          <p className={styles.info}>
            To get started selling products on Resonance and Wonder, add
            products to the website by filling out the Add Product form.
          </p>
          <Link href="/sellerprofile/newproduct">
            <a>
              <button className={styles.button}>Add New Product</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.infobox}>
        <h3>Your Current Products</h3>
        {/* {products.map((product) => (
          <SellersProducts key={product._id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default SellerProfile;
