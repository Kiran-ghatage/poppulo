import styles from '../styles/Pagination.module.scss';

const Pagination = ({ totalBreeds, breedsPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
    
      <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))} disabled={currentPage === pageNumbers.length}>Next</button>
      <button onClick={() => setCurrentPage(pageNumbers.length)} disabled={currentPage === pageNumbers.length}>Last</button>
    </nav>
  );
};

export default Pagination;
