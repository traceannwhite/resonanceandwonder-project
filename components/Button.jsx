import styles from "../styles/Button.module.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={styles.btn} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
