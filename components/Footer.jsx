import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright by Trace White </p>
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
