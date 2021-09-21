import Link from "next/link";
import SellersProducts from "../../components/SellersProducts";
import styles from "../../styles/SellerProfile.module.css";
import { getProducts } from "../api/products";

const SellerProfile = ({ products }) => {
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
            <button className={styles.button}>Add New Product</button>
          </Link>
        </div>
      </div>
      <div className={styles.infobox}>
        <h3>Your Current Products</h3>
        {products.map((product) => (
          <SellersProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}
export default SellerProfile;
