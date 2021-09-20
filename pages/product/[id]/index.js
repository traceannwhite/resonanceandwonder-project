import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProducts } from "../../api/products/index";
import styles from "../../../styles/ProductPage.module.css";
import { useState, useEffect } from "react";

const product = ({ filteredProduct }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div key={filteredProduct.id} className={styles.display}>
        <div>
          <img src={filteredProduct.image} className={styles.image} />
          <div className={styles.reviews}>
            <h4 className={styles.title}>Reviews</h4>
            <p>List of Reviews</p>
          </div>
        </div>
        <div className={styles.details}>
          <h5 className={styles.seller}>{filteredProduct.seller}</h5>
          <h4 className={styles.title}>{filteredProduct.product}</h4>
          <p>${filteredProduct.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.button}
          >
            Add to Cart
          </button>
          <div className={styles.descriptionbox}>
            <h4 className={styles.title}>Description</h4>
            <p className={styles.description}>{filteredProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const id = parseInt(ctx.params.id);
  const product = await getProducts(id);
  const filteredProduct = product.filter((product) => product.id === id);

  return { props: { filteredProduct: filteredProduct[0] } };
};

export default product;
