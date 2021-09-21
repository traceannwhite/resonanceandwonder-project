import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import styles from "../styles/ShopPage.module.css";
import { getProducts } from "./api/products/index";

const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ShopPage;

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}
