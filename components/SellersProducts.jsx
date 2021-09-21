import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { server } from ".././congif/index";
import { getProducts } from "../pages/api/products";

const SellersProducts = ({ product }) => {
  const router = useRouter();

  const [changeProduct, setChangeProduct] = useState([]);

  const editProduct = async (product) => {
    const response = await fetch(
      `${server}/api/products/product/${product.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    getProducts();
    router.push("/sellerprofile");
  };

  const handleChange = (e) => {
    setChangeProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const deleteProduct = async (product) => {
    const response = await fetch(
      `${server}/api/products/product/${product.id}`,
      {
        method: "delete",
      }
    );
    getProducts();
    router.push("/sellerprofile");
  };
  return (
    <div key={product.id}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.card}>
          <img src={product.image} className={styles.image} />
          <h4 className={styles.title}>{product.title}</h4>
          <p>$ {product.price}</p>
        </div>
      </Link>

      <button onClick={() => editProduct(product)}>Edit</button>
      <button onClick={() => deleteProduct(product)}>Delete</button>
    </div>
  );
};

export default SellersProducts;
