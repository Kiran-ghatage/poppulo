"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../app/components/Header';
import BreedCard from '../app/components/BreedCard';
import Pagination from '../app/components/Pagination';
import Search from '../app/components/Search';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBreeds, setFilteredBreeds] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 9;

  useEffect(() => {
    fetchBreeds();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm === '') {
        fetchBreeds();
      } else {
        const filtered = Object.keys(filteredBreeds).reduce((result, breed) => {
          if (breed.includes(searchTerm.toLowerCase())) {
            result[breed] = filteredBreeds[breed];
          }
          return result;
        }, {});
        setFilteredBreeds(filtered);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchBreeds = async () => {
    const response = await axios.get('/api/breeds');
    setFilteredBreeds(response.data);
  };

  const paginatedBreeds = Object.keys(filteredBreeds)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .reduce((result, key) => {
      result[key] = filteredBreeds[key];
      return result;
    }, {});

  return (
    <div>
      <Header />
      <div className={styles.container}>

        <div className={styles.searchContainer}>
          <Search setSearch={setSearchTerm} />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.grid}>
            {Object.keys(paginatedBreeds).map((breed) => (
              <BreedCard key={breed} breed={breed} subBreeds={paginatedBreeds[breed]} />
            ))}
          </div>
          <Pagination
            totalBreeds={Object.keys(filteredBreeds).length}
            breedsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
