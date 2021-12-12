import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cardcontainer}>
      <Link href={`/product/${product._id}`}>
        <a>
          <div className={styles.card}>
            <img src={product.image} alt="product" className={styles.image} />
            <div className={styles.text}>
              <h4 className={styles.title}>{product.title}</h4>
              <h5 className={styles.seller}>{product.seller}</h5>
              <p>$ {product.price}</p>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.buttonscontainer}>
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
