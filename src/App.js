import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie/Movie";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [query, setQuery] = useState("");

  const onSearchFieldChange = (newQuery) => {
    setQuery(newQuery);
  };

  const onSubmitClick = () => {
    setIsSubmitClicked(true);
  };

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/k_bcc5wqvp/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => setIsLoading(false));
  }, [isSubmitClicked]);

  const mapMovieList = () => {
    return movies.map((movie) => (
      <Movie
        description={movie.description}
        image={movie.image}
        title={movie.title}
        key={movie.id}
      />
    ));
  };

  return (
    <div>
      {!isSubmitClicked ? (
        <SearchForm
          onTextFieldChange={onSearchFieldChange}
          onSubmitClick={onSubmitClick}
        />
      ) : isLoading ? (
        <div className="loader" />
      ) : (
        mapMovieList()
      )}
    </div>
  );
}

export default App;
