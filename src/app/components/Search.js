// components/Search.js
import styles from '../styles/Search.module.css';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by breed name..."
      onChange={e => setSearch(e.target.value)}
      className={styles.search}
    />
  );
};

export default Search;
