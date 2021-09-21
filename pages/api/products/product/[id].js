// // This if for /api/products/product/:id

// import { getProducts } from "../../products/index";

// export default function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       res.json(getProducts());
//     case "PUT":
//       updateProduct();
//     case "DELETE":
//       deleteProduct();
//     default:
//       // res.setHeaders("Allow", ["POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${req.method} is not allowed`);
//   }
// }
// function updateProduct() {
//   try {
//     res.json(getProducts().findByIdAndUpdate(req.body));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }
// function deleteProduct() {
//   try {
//     res.json(getProducts().findByIdAndDelete(req.body));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }
