// // This if for /api/products/product
// import { getProducts } from "../../products/index";

// export default function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       res.json(getProducts());
//     case "POST":
//       createProduct();
//     default:
//       res.setHeaders("Allow", ["POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${req.method} is not allowed`);
//   }
// }

// function createProduct() {
//   try {
//     res.json(getProducts().push(req.body));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }
