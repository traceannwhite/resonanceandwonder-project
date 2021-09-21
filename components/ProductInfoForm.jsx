import styles from "../styles/NewProductPage.module.css";
import { useState } from "react";
import { server } from "../congif";
import { useRouter } from "next/router";

const NewProductPage = () => {
  //create and set the state to grab the value the seller enters
  const [newProduct, setNewProduct] = useState("");
  const router = useRouter();

  const addNewProduct = async (e) => {
    e.preventDefault(); // prevents page reload
    try {
      const res = await fetch(`${server}/api/products/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      if (res.status === 200) {
        alert("Your product has been added to the products page!");
        router.push("/sellerprofile");
      } else {
        alert("Sorry, something went wrong.");
      }
    } catch (err) {
      alert("Sorry, something went wrong.");
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.box}>
          Photos
          <input
            className={styles.inputbox}
            id="image"
            type="file"
            aria-label="image"
            placeholder="Add Photo of Your Product"
            accept="image/png, image/jpeg, image/heic"
            value={newProduct.image}
            onChange={handleChange}
          />
        </label>
        <label className={styles.box}>
          Listing Details
          <input
            className={styles.inputbox}
            id="product"
            type="text"
            aria-label="Product Name"
            placeholder="Add a Name for your Product"
            value={newProduct.title}
            onChange={handleChange}
          />
          <input
            className={styles.inputbox}
            id="description"
            type="text"
            aria-label="Description"
            placeholder="Add a description for your product."
            value={newProduct.description}
            onChange={handleChange}
          />
          <input
            className={styles.inputbox}
            id="category"
            type="text"
            aria-label="Category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
          />
        </label>
        <label className={styles.box}>
          Inventory and Pricing
          <input
            className={styles.inputbox}
            id="price"
            type="number"
            aria-label="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <input
            className={styles.inputbox}
            id="quantity"
            type="number"
            aria-label="Quantity"
            placeholder="Quantity"
            value={newProduct.quantity}
            onChange={handleChange}
          />
          <input
            className={styles.inputbox}
            id="SKU"
            type="number"
            aria-label="SKU"
            placeholder="SKU Number"
            value={newProduct.SKU}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className={styles.btncontainer}>
        <button type="submit" onClick={addNewProduct} className={styles.button}>
          Submit Product
        </button>
      </div>
    </div>
  );
};

export default NewProductPage;
