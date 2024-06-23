import styles from '../styles/Pagination.module.css';

const Pagination = ({ totalDogs, dogsPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
      {/* {pageNumbers.map(number => (
        <button key={number} onClick={() => setCurrentPage(number)} className={currentPage === number ? styles.active : ''}>
          {number}
        </button>
      ))} */}
      <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))} disabled={currentPage === pageNumbers.length}>Next</button>
      <button onClick={() => setCurrentPage(pageNumbers.length)} disabled={currentPage === pageNumbers.length}>Last</button>
    </nav>
  );
};

export default Pagination;
