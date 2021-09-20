import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { server } from ".././congif/index";
import { getProducts } from "../pages/api/products";

const SellersProducts = ({ product }) => {
  const router = useRouter();

  const deleteProduct = async (product) => {
    const response = await fetch(`${server}/api/products/product/:id`, {
      method: "delete",
    });
    getProducts();
    router.push("/sellerprofile");
  };
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <div className={styles.card}>
          <img src={product.image} className={styles.image} />
          <h4 className={styles.title}>{product.product}</h4>
          <p>$ {product.price}</p>
        </div>
      </Link>
      <Link href="sellerprofile/updateproduct">
        <button>Edit</button>
      </Link>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default SellersProducts;
