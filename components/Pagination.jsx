import styles from "../styles/ProductCard.module.css";
const Pagination = () => {
  return (
    <div className={styles.buttonscontainer}>
      <div clasName={styles.buttons}>
        <a href="#" className={styles.button}>
          <span>Previous</span>
        </a>
        <a href="#" className={styles.button}>
          <span>1</span>
        </a>
        <a href="#" className={styles.button}>
          <span>2</span>
        </a>
        <a href="#" className={styles.button}>
          <span>3</span>
        </a>
        <a href="#" className={styles.button}>
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
