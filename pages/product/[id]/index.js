import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProducts } from "../../api/products/index";
import styles from "../../../styles/ProductCard.module.css";
import { useState, useEffect } from "react";

const product = ({ product }) => {
  console.log(product);

  // const router = useRouter();
  // const { id } = router.query;
  const dispatch = useDispatch();

  const [filteredProduct, setFilteredProduct] = useState([]);

  const getFilteredProduct = async () => {
    const response = await fetch("/product/[id]");
    const product = await response.json();
    // const id = product.id;
    // const product = await getProducts(id);
    setFilteredProduct(product.filter((product) => product.id === id));
  };

  console.log(getFilteredProduct());

  useEffect(() => {
    getFilteredProduct;
  }, []);

  return (
    <div>
      {/* <div>This is product {id}</div> */}
      <div>
        <div key={filteredProduct.id} className={styles.card}>
          <img src={filteredProduct.image} className={styles.image} />
          <h4 className={styles.title}>{filteredProduct.product}</h4>
          <h5 className={styles.seller}>{filteredProduct.seller}</h5>
          <p>$ {filteredProduct.price}</p>
          <p>{filteredProduct.description}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.button}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const product = await getProducts(id);
  return { props: { product } };
};

export default product;
