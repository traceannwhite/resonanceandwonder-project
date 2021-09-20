// import { useState } from "react";
// import { useRouter } from "next/router";

const UpdateProductPage = () => {
  const [products, setProducts] = useState([]);

  const nullProduct = {
    product: "",
    category: "",
    seller: "",
    image: "",
    price: "",
    quantity: "",
    SKU: "",
    description: "",
  };

  const [targetProduct, setTargetProduct] = useState(nullProduct);

  const getTargetProduct = async (product) => {
    setTargetProduct(product);
    props.history.push("/updateproduct");
  };

  const updateProduct = async (product) => {
    const response = await fetch(`${server}/api/products/product/:id`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    getProducts();
    router.push("/sellerprofile");
  };

  return <div>Edit Product Page</div>;
};

export default UpdateProductPage;
