import data from "./data.json";

export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
// function createProduct() {
//   try {
//     res.json(getProducts().push(req.body));
//   } catch (error) {
//     res.status(400).json(error);
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

// // export default function handler(req, res) {
// //   if (req.method === "GET") {
// //     const products = getProducts();
// //     res.status(200).json(products);
// //   } else if (req.method === "POST") {
// //     const newProduct = createProduct();
// //     products.push(newProduct);
// //     res.status(201).json(newProduct);
// //   } else if (req.method === "PUT") {
// //     const updateProduct = req.body.updateProduct;
// //     products.push(updateProduct);
// //     res.status(201).json(updateProduct);
// //   } else if (req.method === "DELETE") {
// //     const deleteProduct = req.body.deleteProduct;
// //     res.status(201).json(deleteProduct);
// //   }
// // }

// // export default function handler(req, res) {
// //   if (req.method !== "POST") {
// //     res.setHeader("Allow", ["POST"]);
// //     res.status(405).json({ message: `Method ${req.method} is not allowed` });
// //   } else {
// //     res.status(200).json(products);
// //   }
// // }
