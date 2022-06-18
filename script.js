const api_key = "916fb2c9d3604c4ccfa4dcdfe747b582"
const searchformEl = document.querySelector("#searchform");
const searchterm = document.querySelector("#searchmovie");
const loaderEl = document.querySelector(".loader");
const moviesresultsEl = document.querySelector("#moviesresults");
const searchbutEl = document.querySelector(".searchbut");
const loadmorebutEl = document.querySelector("#loadmorebut");
const moviedetEl = document.querySelector(".moviedet")

var movieimgEl = document.querySelector("#movieimg");
var movietitleEl = document.querySelector("#movietitle");
/*var movienameEl = document.querySelector("#moviename");*/

var searchurl =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchterm}`
var q = ' ';
var pageSize = 10;
var currentApiPage = 0;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
var movieimgurl =`https://api.themoviedb.org/3/search/movie/${moviesresultsEl}/images?api_key=${api_key}`



async function GettingData(searchterm){
   
    searchurl += "?" + searchterm;
    const offset = currentApiPage * pageSize;
    var response = await fetch(searchurl);
    var data = await response.json();
    
    gerenateNamemovie(data.movies);
    console.log(data);
}


async function gerenateNamemovie(moviesresultsEl){
   

    data.forEach(data => {
   ` <img src="${movieimgEl}">
   <span> ${movietitleEl} </span>`})
   moviesresultsEl.append(movieimgEl)
   moviesresultsEl.append(movietitleEl)
   var response2 = await fetch(movieimgurl);
   var data2 = await response.json();
   console.log(data2);
}



/*function getMoremovies(movie){

    return
     `<img src=”${movieimgEL}
    <span> ${movietitleEl} </span>`

}*/

async function FormSubmit(event) {
    event.preventDefault();
    /*moviesresultsEl.innerHTML = '';*/
    q = searchterm.value;
    const results = await GettingData(q);
  gerenateNamemovie(moviesresultsEl);
    searchingEl.value = '';
    currentApiPage++;
    loadmorebutEl.classList.remove('hidden');
}

searchformEl.addEventListener('submit', FormSubmit); /*=> {
    console.log(event.target.searchingEl.value);
    GettingData(event.target.searchingEl.value);
} )*/

async function LoaderClick(event) {
    const results = await GettingData(q);
    gerenateNamemovie(movies);
    currentApiPage++;
}

loadmorebutEl.addEventListener('click', LoaderClick);