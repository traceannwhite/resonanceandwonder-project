import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/NavBar.module.css";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <img src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png" />
        </Link>
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/sellerprofile">My Profile</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/cart">
              <div className={styles.carticon}>
                <p>Cart</p>
                <p>({getItemsCount()})</p>
              </div>
            </Link>
          </li>
        </ul>
      </header>
      <div className={styles.searchbar}>
        <SearchIcon className={styles.searchicon} />
        <input type="text" placeholder="Search for anything." />
      </div>
    </nav>
  );
};

export default NavBar;
