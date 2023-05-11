import React from "react";
import Form from "../components/Form";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const getCategories = async () => {
    const response = await axios(" http://localhost:3100/categories");
    setCategories(response.data);
    console.log(response);
  };
  useEffect(() => {
    getCategories();
    console.log(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    getMovies();
    console.log(selectedCategory);
  }, []);

  const getMovies = async () => {
    let url = "http://localhost:3100/movies";
    if (selectedCategory !== 0) {
      url += "?categoryId=" + selectedCategory;
    }
    const response = await axios(url);
    setMovies(response.data);
  };
  const newMovie = (movie) => {
    const response = axios.post(`http://localhost:3100/movies`, movie);
    console.log(response);
  };

  return (
    <>
      <Nav categories={categories} setSelectedCategory={setSelectedCategory} />
      <Form newMovie={newMovie} />
      <Card movies={movies} />
    </>
  );
};

export default Home;
