import { useRouter } from "next/router";
// import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/ShopPage.module.css";
import { getProductsByCategory } from "../api/products/[category]";

const CategoryPage = ({ products, name, categoryCount }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <h5>{categoryCount}</h5>
      <h1 className={styles.title}>All Products in {router.query.category}</h1>
      <h3>{categoryCount}</h3>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}

export default CategoryPage;
