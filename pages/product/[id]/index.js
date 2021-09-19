import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";
// import { getProductsById } from "../api/product/[id]";
import { getProducts } from "../../api/products/index";
// import ProductCard from "../../../components/ProductCard";
import styles from "../../../styles/ProductCard.module.css";
// import data from "../../api/products/data.json";

const product = ({ product }) => {
  console.log(product);
  // const router = useRouter();
  // const { id } = router.query;

  const dispatch = useDispatch();

  return (
    <div>
      {/* <div>This is product {id}</div> */}
      <div>
        {product.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} className={styles.image} />
            <h4 className={styles.title}>{product.product}</h4>
            <h5 className={styles.seller}>{product.seller}</h5>
            <p>$ {product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className={styles.button}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link href="/shop">Go Back</Link>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const product = await getProducts(id);
  return { props: { product } };
};

export default product;
