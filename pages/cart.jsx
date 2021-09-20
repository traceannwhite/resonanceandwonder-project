import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Items in Your Cart</div>
      {cart.length === 0 ? (
        <h1>There is nothing in your cart, yet!</h1>
      ) : (
        <div className={styles.grid}>
          {cart.map((item) => (
            <div key={item.id} className={styles.card}>
              <div>
                <p>{item.seller}</p>
              </div>
              <div className={styles.details}>
                <div className={styles.image}>
                  <Image src={item.image} alt="" height="100" width="100" />
                </div>
                <p>{item.product}</p>
                <p className={styles.quantity}>{item.quantity}</p>
                <p className={styles.price}>$ {item.price}</p>
                {/* Want to add ".toFixed(2) here, but not workign right */}
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.button}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
                <button
                  className={styles.button}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <button
                  className={styles.button}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
                <p>Total: $ {item.quantity * item.price}</p>
              </div>
            </div>
          ))}
          <div className={styles.checkout}>
            <h3>Items Total: </h3>
            <h3>${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
