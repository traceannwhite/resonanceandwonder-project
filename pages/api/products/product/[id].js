// import { products } from "../data.json";

// export default function handler({ query: { id } }, res) {
//   const filteredProduct = products.filter((product) => product.id === id);

//   if (filteredProduct.length > 0) {
//     res.status(200).json(filteredProduct[0]);
//   } else {
//     res.status(404).json({ message: `Product ${id} is not found` });
//   }
// }
