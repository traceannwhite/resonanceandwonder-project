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
    <header className={styles.header}>
      <Link href="/" className="logo">
        <a>
          <img
            src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png"
            alt="logo"
          />
        </a>
      </Link>

      <nav className="navigation">
        <ul>
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a className="cart-link">
                <ShoppingCartIcon />({getItemsCount()})
              </a>
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
          height: 100px;
          background-color: white;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 20px 0;
        }

        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }

        .navigation ul .cart-link {
          display: flex;
        }

        .hamburger {
          display: none;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            position: absolute;
            top: 20px;
            right: 10px;
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
        }
      `}</style>
    </header>
  );
};

export default NavBar;
