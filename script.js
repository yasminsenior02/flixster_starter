const api_key = `916fb2c9d3604c4ccfa4dcdfe747b582`;
const searchterm = document.querySelector("#searchmovie");
const searchsub = document.querySelector("#searchform");
const moviesresultsEl = document.querySelector("#movies-grid");
const loadmorebutEl = document.querySelector("#loadmorebut");
const reset = document.querySelector("#close-search-btn");

const searchurl = `https://api.themoviedb.org/3/search/movie`;
var more = false;
var currentSearchTerm = " ";
var pageSize = 1;
var length = " ";
var mainpage = true;
var currentApiPage = 0;
const url = `https://api.themoviedb.org/3/search/movie`;
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing`;
const movieImgUrl = `https://api.themoviedb.org/3/movie`;
//`https://api.themoviedb.org/3/movie/now_playing?api_key=916fb2c9d3604c4ccfa4dcdfe747b582&language=en-US&page=1`

async function Nowplay() {
  const offset = currentApiPage * pageSize;
  let response = await fetch(nowPlayingUrl + "?api_key=" + api_key);
  //const response = await fetch(nowPlayingUrl  + "?api_key=" + api_key);
  var data3 = await response.json();
  var movies = data3.results;
  console.log(movies);
  gerenateNamemovie(movies);
}
async function GettingData(searchTerm) {
  //searchurl += "?" + searchterm;
  const offset = currentApiPage * pageSize;
  let response = await fetch(
    searchurl + "?api_key=" + api_key + "&query=" + searchTerm
  );
  var data = await response.json();
  var movies3 = data.results;
  console.log(movies3);
  gerenateNamemovie(movies3);
}

async function gerenateNamemovie(movies) {
  if (more != true) {
    moviesresultsEl.innerHTML = "";
  }
  for (let i = 0; i < movies.length; i++) {
    moviesresultsEl.innerHTML += `<div class= "movie-card">
    <img class="movie-poster" src="https://images.tmdb.org/t/p/w500${movies[i].poster_path}">
    <h1 class="movie-title"> ${movies[i].title} <br/> 🌟 ${movies[i].vote_average} </h1>
<div>`;
  }
  searchterm = "";
}

/*function getMoremovies(movie){

    return
     `<img src=”${movieimgEL}
    <span> ${movietitleEl} </span>`

}*/

searchsub.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop page from reloading
  moviesresultsEl.innerHTML = "";
  pageSize = 1;
  mainpage = false;
  let searchterm = event.target.searching.value;
  let currentSearchTerm = searchterm.replace(/ /g, "+");
  GettingData(currentSearchTerm);

  currentApiPage++;
  loadmorebutEl.classList.remove("hidden");
});

//searchsub.addEventListener('submit', FormSubmit => {
//console.log(event.target.searchingEl.value);
// GettingData(event.target.searchingEl.value);

async function LoaderClick(event) {
  const results = await GettingData(currentSearchTerm);
  gerenateNamemovie(movies);
  currentApiPage++;
  more = true;
}
reset.addEventListener("click", async (event) => {
  event.preventDefault();
  moviesresultsEl.innerHTML = "";
  pageSize = 1;
  Nowplay();
  mainpage = true;
});

loadmorebutEl.addEventListener("click", (LoaderClick) => {
  LoaderClick.preventDefault();
  pageSize++;
});
window.onload = () => {
  Nowplay();
};
