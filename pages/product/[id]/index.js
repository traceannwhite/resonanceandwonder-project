import { useDispatch } from "react-redux";
import { getProducts } from "../../api/products/index";
import { addToCart } from "../../../redux/cart.slice";
// import { server } from "../../../next.config";
import styles from "../../../styles/ProductPage.module.css";

const Product = ({ filteredProduct }) => {
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
            onClick={() => dispatch(addToCart(filteredProduct))}
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

// export const getStaticProps = async (ctx) => {
//   const id = parseInt(ctx.params.id);
//   const res = await fetch(`${server}/api/products/product/${id}`);
//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/products`);
//   const products = await res.json;
//   const ids = products.map((product) => product.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
export default Product;
