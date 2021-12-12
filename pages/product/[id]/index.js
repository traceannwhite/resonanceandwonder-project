import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
// import styles from "../../../styles/ProductPage.module.css";
import styles from "../../../styles/ProductCard.module.css";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    async function init() {
      try {
        const user = await app.logIn(credentials);
        const getProduct = await user.functions.getOneProduct();
        setProduct(getProduct);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  return (
    <div key={product._id}>
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

export default Product;

// // import { getProducts } from "../../api/products/index";

// const Product = ({ products, setProducts, filteredProduct }) => {

//   return (
//     <div className={styles.container}>
//       <div key={products._id} className={styles.display}>
//         <div>
//           <img src={products.image} className={styles.image} />
//           {/* <div className={styles.reviews}>
//             <h4 className={styles.title}>Reviews</h4>
//             <p>List of Reviews</p>
//           </div>
//         </div>
//         <div className={styles.details}>
//           <h5 className={styles.seller}>{filteredProduct.seller}</h5>
//           <h4 className={styles.title}>{filteredProduct.product}</h4>
//           <p>${filteredProduct.price}</p> */}
//           <button
//             onClick={() => dispatch(addToCart(filteredProduct))}
//             className={styles.button}
//           >
//             Add to Cart
//           </button>
//           {/* <div className={styles.descriptionbox}>
//             <h4 className={styles.title}>Description</h4>
//             <p className={styles.description}>{filteredProduct.description}</p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export const getServerSideProps = async (ctx) => {
// //   const id = parseInt(ctx.params.id);
// //   const product = await getAllProducts(id);
// //   const filteredProduct = product.filter((product) => product.id === id);

// //   return { props: { filteredProduct: filteredProduct[0] } };
// // };

// export default Product;
