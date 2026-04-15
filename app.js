"use strict";
console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Action, Adventure, Sci-Fi",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Action, Sci-Fi",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Adventure, Drama, Sci-Fi",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action, Crime, Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Unknown Identity",
    year: 2011,
    rating: 6.8,
    genre: "Action, Mystery, Thriller",
    image: "https://filmogtro.dk/uploads/pics/Unknown-Identity.jpg",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.2,
    genre: "Biography, Drama, History",
    image:
      "https://theempiretheatre.com/uploads/2023/09/Empire-Movie-site-Oppenheimer.jpg",
  },
  {
    title: "Safe",
    year: 2012,
    rating: 6.5,
    genre: "Action, Thriller",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcxNDI0NzUxMF5BMl5BanBnXkFtZTcwOTIzMjkyNw@@._V1_FMjpg_UX1000_.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const highlightClass = movie.rating >= 8.5 ? "movie-card--highlight" : "";
  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
        <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Genre: ${movie.genre}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  genre: "Crime, Drama",
  image:
    "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
});

showMovies();

function addMovie(movie) {
  movies.push(movie);
  showMovies();
}

addMovie({
  title: "Blade Runner 2049",
  year: 2017,
  rating: 8.0,
  image:
    "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  genre: "Sci-fi",
});


