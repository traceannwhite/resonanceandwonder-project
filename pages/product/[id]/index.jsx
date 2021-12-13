import { useState, useEffect } from "react";
import styles from "../../../styles/ProductPage.module.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import IndividualProduct from "../../../components/IndividualProduct";

export default function IndividualProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "products");

    const q = query(collectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className={styles.container}>
      {/* <IndividualProduct key={product.id} product={product} /> */}
      <h1 className={styles.title}>Product</h1>
      <div className={styles.cards}>
        {products &&
          products.map((product) => {
            return <IndividualProduct key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import IndividualProduct from "../../../components/IndividualProduct";
// // import { addToCart } from "../../../redux/cart.slice";
// // import styles from "../../../styles/ProductPage.module.css";
// // import styles from "../../../styles/ProductCard.module.css";

// const ProductPage = () => {
//   // const dispatch = useDispatch();

//   return (
//     <div>
//       <IndividualProduct />
//     </div>
//   );
// };

// export default ProductPage;

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
