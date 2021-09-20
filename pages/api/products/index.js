import data from "./data.json";

export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const newProduct = req.body.newProduct;
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
}
// export default function handler(req, res) {
//   if (req.method !== "GET") {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     res.status(200).json(products);
//   }
// }

// export default function handler(req, res) {
//   if (req.method === "PUT") {
//     res.setHeader("Allow", ["PUT"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     res.status(200).json(products);
//   }
// }

// export default function handler(req, res) {
//   if (req.method === "DELETE") {
//     res.setHeader("Allow", ["DELETE"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     res.status(200).json(products);
//   }
// }
