import styles from "./Movie.module.css";
const Movie = ({ image, title, description }) => {
  return (
    <div className={styles.movieWrapper}>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <img className={styles.movieImage} src={image} alt={title + "poster"} />
    </div>
  );
};

export default Movie;
