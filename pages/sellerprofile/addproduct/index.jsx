import styles from "../../../styles/AddProductForm.module.css";
import { useState } from "react";

const AddProduct = () => {
  //create and set the state to grab the value the seller enters
  const [input, setInput] = useState("");

  const addProduct = async (e) => {
    e.preventDefault(); // prevents page reload
    try {
      const res = await fetch("../api/products/newproduct", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: input,
        }),
      });

      if (res.status === 200) {
        alert("Your product has been added to the products page!");
      } else {
        alert("Sorry, something went wrong.");
      }
    } catch (err) {
      alert("Sorry, something went wrong.");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    handleSubmit(input);
    history.push("/sellerprofile");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmission}>
        <label className={styles.box}>
          Photos
          <input
            id="image"
            type="file"
            aria-label="image"
            placeholder="Add Photo of Your Product"
            accept="image/png, image/jpeg, image/heic"
            value={input.image}
            onChange={handleChange}
          />
        </label>
        <label className={styles.box}>
          Listing Details
          <input
            id="product"
            type="text"
            aria-label="Product Name"
            placeholder="Add a Name for your Product"
            value={input.product}
            onChange={handleChange}
          />
          <input
            id="description"
            type="text"
            aria-label="Description"
            placeholder="Add a description for your product."
            value={input.description}
            onChange={handleChange}
          />
          <input
            id="category"
            type="text"
            aria-label="Category"
            placeholder="Category"
            value={input.category}
            onChange={handleChange}
          />
        </label>
        <label className={styles.box}>
          Inventory and Pricing
          <input
            id="price"
            type="number"
            aria-label="price"
            placeholder="Price"
            value={input.price}
            onChange={handleChange}
          />
          <input
            id="quantity"
            type="number"
            aria-label="Quantity"
            placeholder="Quantity"
            value={input.quantity}
            onChange={handleChange}
          />
          <input
            id="SKU"
            type="number"
            aria-label="SKU"
            placeholder="SKU Number"
            value={input.SKU}
            onChange={handleChange}
          />
        </label>
      </form>
      <button type="submit" onClick={addProduct}>
        Submit Product
      </button>
    </div>
  );
};

export default AddProduct;
