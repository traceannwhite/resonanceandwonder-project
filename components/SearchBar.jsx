import styles from "../styles/SearchBar.module.css";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = () => {
  return (
    <form className={styles.searchbarform}>
      <div className={styles.searchbar}>
        <label className={styles["visually-hidden"]}>
          Search for anything.
        </label>
        <input
          type="text"
          placeholder="Search for anything."
          id="search"
          name="search"
          className={styles.searchinput}
        />
      </div>
      <button type="submit" className={styles.searchbtn}>
        <SearchIcon className={styles.searchicon} />
      </button>
    </form>
  );
};

export default SearchBar;
