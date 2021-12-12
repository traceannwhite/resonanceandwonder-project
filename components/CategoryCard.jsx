import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryCard.module.css";

const CategoryCard = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt="category"
        height={700}
        width={1300}
      />
      <Link href={`/category/${name.toLowerCase()}`}>
        <a>
          <div className={styles.info}>
            <h3>{name}</h3>
            <p>SHOP NOW</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CategoryCard;
