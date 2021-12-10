import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/NavBar.module.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      {/* <Link href="/" className="logo">
        <img src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png" />
      </Link> */}

      <nav className="navigation">
        <ul>
          <li>
            <Link href="/shop">
              <p>Shop</p>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <p>Cart({getItemsCount()})</p>
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <HamburgerMenu />
        </div>
      </nav>
      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
          background-color: white;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 20px 0;
          padding: 0 25px;
        }

        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }

        .hamburger {
          display: none;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            position: absolute;
            right: 20px;
            z-index: 10;
          }

          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: teal;
            height: 10vh;
            width: 100vw;
            margin-top: 50px;
            position: absolute;
            text-align: right;
            padding: 12px;
          }

          .navigation ul li {
            color: white;
          }

          // .logo {
          //   width: 200px;
          // }

          // .logo img {
          //   width: 200px;
          // }
        }
      `}</style>
    </div>
    // <nav className={styles.navbar}>
    //   <header className={styles.header}>
    //     <Link href="/" className={styles.logo}>
    //       <img src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png" />
    //     </Link>
    //     <ul className={styles.links}>
    //       <li className={styles.navlink}>
    //         <Link href="/shop">Shop</Link>
    //       </li>
    //       <li className={styles.navlink}>
    //         <Link href="/cart">
    //           <div className={styles.carticon}>
    //             <p>Cart</p>
    //             <p>({getItemsCount()})</p>
    //           </div>
    //         </Link>
    //       </li>
    //     </ul>
    //     <div className="hamburger" onClick={toggleHamburger}>
    //       <HamburgerMenu />
    //     </div>
    //   </header>
    //   <style jsx>{`
    //     .hamburger {
    //       display: none;
    //     }
    //     @media (max-width: 767px) {
    //       .hamburger {
    //         display: fixed;
    //         position: absolute;
    //         right: 20px;
    //         z-index: 10;
    //       }

    //       .header ul {
    //         display: ${hamburgerOpen ? "inline" : "none"};
    //         background-color: teal;
    //         height: 100vh;
    //         width: 50vw;
    //         margin-top: 50px;
    //         position: absolute;
    //       }
    //     }
    //   `}</style>
    // </nav>
  );
};

export default NavBar;
