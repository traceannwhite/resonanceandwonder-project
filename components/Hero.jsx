import styles from "../styles/Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.taglinecontainer}>
        <h1 className={styles.tagline}> What will resonate with you?</h1>
        <Link href="/shop">
          <button className={styles.button}>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
