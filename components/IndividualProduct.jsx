import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";

const IndividualProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.id}>
      <div className={styles.card}>
        <Image
          src={product.image}
          alt="product"
          className={styles.image}
          width="300px"
          height="200px"
        />
        <div className={styles.text}>
          <h4 className={styles.title}>{product.title}</h4>
          <h5 className={styles.seller}>{product.seller}</h5>
          <p>$ {product.price}</p>
        </div>
      </div>
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

export default IndividualProduct;
