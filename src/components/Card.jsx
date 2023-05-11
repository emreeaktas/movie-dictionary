import React from "react";
import "../scss/card.scss";

const Card = ({ movies }) => {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <button className="">X</button>
          <img src={movie.moviePoster} alt="matrix-poster" />
          <div className="card-body">
            <p>
              <b>{movie.movieName}</b>
            </p>
            <p>{movie.movieDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
