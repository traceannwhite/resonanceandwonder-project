import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link href={`/product/${product._id}`}>
        <div className={styles.card}>
          <img src={product.image} className={styles.image} />
          <h4 className={styles.title}>{product.title}</h4>
          <h5 className={styles.seller}>{product.seller}</h5>
          <p>$ {product.price}</p>
        </div>
      </Link>
      <div className={styles.card}>
        <button
          onClick={() => dispatch(addToCart(product))}
          className={styles.button}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
