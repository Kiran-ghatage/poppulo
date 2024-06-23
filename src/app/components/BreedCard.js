import styles from '../styles/BreedCard.module.css';
import Image from "next/image";
import { capitalizeFirstLetter } from '../utils/utils';
const BreedCard = ({ breed, subBreeds }) => {
  return (
    <div className={styles.card}>
      <Image
        src="dog.svg"
        alt={breed || "breed"}
        className={styles.cardImage}
        width={100}
        height={24}
        priority
      />
      <h3>{capitalizeFirstLetter(breed || "")}</h3>
     
      {subBreeds.length > 0 && (
        <>
          {subBreeds.map((subBreed, i) => <span key={subBreed}>
            {i > 0 && ", "}
            {capitalizeFirstLetter(subBreed)}
          </span>)}

        </>
      )}
    </div>
  );
};

export default BreedCard;
