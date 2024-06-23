"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import DogCard from '../app/components/DogCard';
import Pagination from '../app/components/Pagination';
import Search from '../app/components/Search';
import styles from '../app/styles/Home.module.css';
// import getDogBreeds from "./api/route";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    const response = await axios.get('/api/dogs');
    setDogs(response.data);
  };

  const filteredDogs = dogs.filter(dog => dog.name.toLowerCase().includes(search.toLowerCase()));
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div className={styles.container}>
    <div className={styles.searchContainer}>
      <Search setSearch={setSearch} />
    </div>
    <div className={styles.cardContainer}>
      <div className={styles.grid}>
        {currentDogs.map(dog => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <Pagination
        totalDogs={filteredDogs.length}
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
    </div>
  );
}
