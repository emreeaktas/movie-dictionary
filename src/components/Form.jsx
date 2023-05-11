import React from "react";
import { useState } from "react";

const Form = ({ newMovie }) => {
  const [categoryName, setCategoryName] = useState("1");
  const [movieName, setMovieName] = useState("");
  const [movieText, setMovieText] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    newMovie({
      //   id: Math.floor(Math.random() * 100),
      categoryId: categoryName,
      movieName: movieName,
      movieText: movieText,
      movieImage: movieImage,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Movie</h3>
      <select
        value={categoryName}
        id="categories"
        onChange={(e) => setCategoryName(e.target.value)}
      >
        <option value="1">Action</option>
        <option value="2">Adventure</option>
        <option value="3">Romantic</option>
      </select>
      <input
        type="text"
        value={movieName}
        placeholder="Name of Movie"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="text"
        value={movieImage}
        placeholder="Poster of Movie"
        onChange={(e) => setMovieImage(e.target.value)}
      />
      <input
        type="text"
        value={movieText}
        placeholder="Description of Movie"
        onChange={(e) => setMovieText(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
