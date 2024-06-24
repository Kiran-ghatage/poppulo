// components/Search.js
import styles from '../styles/Search.module.scss';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={e => setSearch(e.target.value)}
      className={styles.search}
    />
  );
};

export default Search;
