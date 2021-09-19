import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1626735924/mountain-547363_jrh8ct.jpg"
        className={styles.image}
      />
      <h1 className={styles.tagline}> What will resonate with you?</h1>
    </div>
  );
};

export default Hero;
