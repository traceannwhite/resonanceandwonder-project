import styles from "../../../styles/AddProductForm.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.box}>
          Photos
          <input
            id="image"
            type="file"
            aria-label="image"
            placeholder="Add Photo of Your Product"
            accept="image/png, image/jpeg, image/heic"
          />
        </label>
        <label className={styles.box}>
          Listing Details
          <input
            id="product"
            type="text"
            aria-label="Product Name"
            placeholder="Add a Name for your Product"
          />
          <input
            id="description"
            type="text"
            aria-label="Description"
            placeholder="Add a description for your product."
          />
          <input
            id="category"
            type="text"
            aria-label="Category"
            placeholder="Category"
          />
        </label>
        <label className={styles.box}>
          Inventory and Pricing
          <input
            id="price"
            type="number"
            aria-label="price"
            placeholder="Price"
          />
          <input
            id="quantity"
            type="number"
            aria-label="Quantity"
            placeholder="Quantity"
          />
          <input
            id="SKU"
            type="number"
            aria-label="SKU"
            placeholder="SKU Number"
          />
        </label>
      </form>
      <button
        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
        type="submit"
      >
        Submit Product
      </button>
    </div>
  );
};

export default index;
