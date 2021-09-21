import styles from "../../../styles/NewProductPage.module.css";
import ProductInfoForm from "../../../components/ProductInfoForm";

const NewProductPage = () => {
  return (
    <div className={styles.container}>
      <ProductInfoForm />
    </div>
  );
};

export default NewProductPage;
