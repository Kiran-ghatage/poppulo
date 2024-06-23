import styles from '../styles/DogCard.module.css';
import Image from "next/image";
const DogCard = ({ dog }) => {
  return (
    <div className={styles.card}>
      <Image
        // src={dog.Image}
        src="dog.svg"
        alt={dog.name}
        className={styles.cardImage}
        width={100}
        height={24}
        priority
      />

      <h2>{dog.name}</h2>
      <p className={styles.description}>{dog.description}</p>
    </div>
  );
};

export default DogCard;
