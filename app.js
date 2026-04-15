"use strict";

console.log("Movie App - DAG 2 starter...");

const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

const movieList = document.querySelector("#movie-list");
console.log(movieList);

// console.log("Alle film:", movies);


// console.log("Første film:", movies[0]);
// console.log("Anden film:", movies[1]);
// console.log("Sideste film:", movies[3]);
// console.log("tinde film:", movies[10]);
// console.log("Antal film:", movies.length)

for(const movie of movies) {
  const html = /* html */ `
  <article class="movie-card">
    <div class="movie-card">  
      <h3>${movie}</h3>
    </div>
  </article> 
  `;
  movieList.insertAdjacentHTML("beforeend", html);
}



