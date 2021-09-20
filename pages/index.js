import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../pages/api/products/index";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <main className={styles.container}>
        <Hero />
        <h1>Products</h1>
        <ul className={styles.cards}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
