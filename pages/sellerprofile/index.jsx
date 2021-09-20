import Link from "next/link";
import styles from "../../styles/SellerProfile.module.css";

const SellerProfile = () => {
  return (
    <div className={styles.container}>
      <h1>Seller Profile</h1>
      <div className={styles.infobox}>
        <div className={styles.newproduct}>
          <p className={styles.info}>
            To get started selling products on Resonance and Wonder, add
            products to the website by filling out the Add Product form.
          </p>
          <Link href="/sellerprofile/newproduct">
            <button className={styles.button}>Add New Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
