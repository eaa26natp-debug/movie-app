"use strict";
console.log("Movie App starter...");

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

let allMovies = [];
const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);
  console.log("Alle film:", allMovies);

  populateGenreSelect();
  showMovies(allMovies);

  genreSelect.addEventListener("change", applyGenreFilter);
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  console.log("Valgt genre:", selectedGenre);

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }

  const filteresMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  showMovies(filteresMovies);
}


function showMovies(movies) {

  movieCount.textContent = `Viser ${movies.length} film`;
}

function showMovies(movies) {
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
        <h3>${formatMovieTitle(movie.title, movie.year)}</h3>
        <p>Rating: ${movie.rating}</p>
        <p>Genre: ${movie.genre}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

function formatMovieTitle(title, year) {
  return `${title} (${year})`;
}
