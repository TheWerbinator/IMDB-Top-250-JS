// let apiArray = [];
let actualArray = [];
const testArray = [
  {crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
  fullTitle: "The Shawshank Redemption (1994)",
  id: "tt0111161",
  imDbRating: "9.2",
  imDbRatingCount: "2592922",
  image: "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
  rank: "1",
  title: "The Shawshank Redemption",
  year: "1994"},
  {crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
  fullTitle: "The Godfather (1972)",
  id: "tt0068646",
  imDbRating: "9.2",
  imDbRatingCount: "1788210",
  image: "https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
  rank: "2",
  title: "The Godfather",
  year: "1972"},
  {crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
  fullTitle: "The Dark Knight (2008)",
  id: "tt0468569",
  imDbRating: "9.0",
  imDbRatingCount: "2563816",
  image: "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
  rank: "3",
  title: "The Dark Knight",
  year: "2008"},
  {crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
  fullTitle: "The Godfather: Part II (1974)",
  id: "tt0071562",
  imDbRating: "9.0",
  imDbRatingCount: "1233786",
  image: "https://imdb-api.com/images/original/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
  rank: "4",
  title: "The Godfather: Part II",
  year: "1974"},
  {crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
  fullTitle: "12 Angry Men (1957)",
  id: "tt0050083",
  imDbRating: "8.9",
  imDbRatingCount: "765980",
  image: "https://imdb-api.com/images/original/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg",
  rank: "5",
  title: "12 Angry Men",
  year: "1957"},
  {crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
  fullTitle: "Schindler's List (1993)",
  id: "tt0108052",
  imDbRating: "8.9",
  imDbRatingCount: "1319237",
  image: "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
  rank: "6",
  title: "Schindler's List",
  year: "1993"},
  {crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
  fullTitle: "The Lord of the Rings: The Return of the King (2003)",
  id: "tt0167260",
  imDbRating: "8.9",
  imDbRatingCount: "1781370",
  image: "https://imdb-api.com/images/original/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
  rank: "7",
  title: "The Lord of the Rings: The Return of the King",
  year: "2003"},
  {crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
  fullTitle: "Pulp Fiction (1994)",
  id: "tt0110912",
  imDbRating: "8.9",
  imDbRatingCount: "1988127",
  image: "https://imdb-api.com/images/original/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
  rank: "8",
  title: "Pulp Fiction",
  year: "1994"},
  {crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
  fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
  id: "tt0120737",
  imDbRating: "8.8",
  imDbRatingCount: "1802560",
  image: "https://imdb-api.com/images/original/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg",
  rank: "9",
  title: "The Lord of the Rings: The Fellowship of the Ring",
  year: "2001"},
  {crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
  fullTitle: "The Good, the Bad and the Ugly (1966)",
  id: "tt0060196",
  imDbRating: "8.8",
  imDbRatingCount: "744107",
  image: "https://imdb-api.com/images/original/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
  rank: "10",
  title: "The Good, the Bad and the Ugly",
  year: "1966"},
  {crew: "Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
  fullTitle: "Forrest Gump (1994)",
  id: "tt0109830",
  imDbRating: "8.8",
  imDbRatingCount: "2001674",
  image: "https://imdb-api.com/images/original/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
  rank: "11",
  title: "Forrest Gump",
  year: "1994"},
  {crew: "David Fincher (dir.), Brad Pitt, Edward Norton",
  fullTitle: "Fight Club (1999)",
  id: "tt0137523",
  imDbRating: "8.8",
  imDbRatingCount: "2041486",
  image: "https://imdb-api.com/images/original/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
  rank: "12",
  title: "Fight Club",
  year: "1999"}
];

let arrayAZ = [];
let arrayZA = [];

const AZ = document.getElementById('AZ');
const ZA = document.getElementById('ZA');

let sortClicked = 0;

const sort = async () => {
  try {
    arrayAZ.sort((a, b) => a.title.localeCompare(b.title));
    console.log(arrayAZ);
    arrayZA.sort((a, b) => b.title.localeCompare(a.title));
    console.log(arrayZA);
  } catch(err) {
    console.log(err);
  }
}

const createArrayFromFetch = async () => {
  try {
    // const movies = await fetch("https://imdb-api.com/en/API/Top250Movies/k_hza8743z");
    // const data = await movies.json();
    // data.items.forEach((element) => {
    //   apiArray.push(element);
    // });
    pushToArray(actualArray, testArray);
    await buildMovies(actualArray);
  } catch(err) {
    console.log(err);
  }
}

const movieDisplay = document.getElementById('movie-display');
let counter = 0;
let increment = 5;

function pushToArray(object, pusher) {
  // console.log(increment);
  object.length = 0;
  arrayAZ.length = 0;
  arrayZA.length = 0;
  for (let i = 0; i < increment; i++) {
    object.push(pusher[i]);
    arrayAZ.push(pusher[i]);
    arrayZA.push(pusher[i]);
  }
  sort();
}

function clearHTML() {
  for (let i = 0; i < actualArray.length; i++) {
    const movieCode = document.getElementById('listItem');
    movieCode.remove();
  }
}

const buildMovies = async (arr) => {
  try {
    for (let i = 0; i < arr.length; i++) {
      let movie = arr[i];
      const newListItem = document.createElement("li");
      newListItem.setAttribute('id', 'listItem');
      newListItem.innerHTML = 
        `<div class="movie" id="movie">
          <h3>#${movie.rank}</h3>
          <h3 class="title">${movie.fullTitle}</h3>
          <div class="movie-cover">
            <img src="${movie.image}" alt="Movie Cover Art">
          </div>
          <div class="fav-icon"><i class="fa-solid fa-star"></i></div>
        </div>`;
        movieDisplay.appendChild(newListItem);
    }
  } catch(err) {
    console.log(err);
  }
  addEventListeners();
}

createArrayFromFetch();

function showMoreListener() {
  const showMore = document.getElementById('show-more');
  showMore.addEventListener('click', function() { 
    clearHTML();
    increment += 5;
    pushToArray(actualArray, testArray);
    buildMovies(actualArray);
    
    const favBtn = document.querySelector('.favs-filter');
    favBtn.classList.remove(active);
    favBtn.removeEventListener('click', function(){
    });
    favListener();
  });
}

const isFav = 'is-fav';

function favIconListener() {
  const favIcon = document.querySelectorAll('.fav-icon');
  
  for (const icon of favIcon) {
    icon.addEventListener('click', function() {
      if (this.parentElement.classList.contains(isFav)) {
        this.parentElement.classList.remove(isFav);
      } else {
        this.parentElement.classList.add(isFav);
      }
    })
  }
}

const active = 'active';
  
function favActive(item) {
  if (item.classList.contains(active)){
    item.classList.remove(active);
  } else {
    item.classList.add(active);
  }
}

function favListener() {
  const favBtn = document.querySelector('.favs-filter');
  const allMovies = document.querySelectorAll('.movie');
  
  favBtn.addEventListener('click', function() {
    favActive(favBtn);
    allMovies.forEach((item) => {
      if (!item.classList.contains(isFav) && favBtn.classList.contains(active)) {
        item.parentElement.classList.add('invisible');
        item.classList.remove('margin-adjust');
      } else if (item.classList.contains(isFav) && favBtn.classList.contains(active)){
        item.parentElement.classList.remove('invisible');
        item.classList.add('margin-adjust');
      } else {
        item.parentElement.classList.remove('invisible');
        item.classList.remove('margin-adjust');
      }
    });
  })
}

function sortListeners() {
  const sortBtn = [AZ, ZA]; //these are the button objects, not the arrays
  let opposite;
  let arrayInQuestion;
  for(let i = 0; i < 2; i++){
    if(i == 0) {
      opposite = 1;
      arrayInQuestion = arrayAZ;
    } else {
      opposite = 0;
      arrayInQuestion = arrayZA;
    }
    sortBtn[i].addEventListener('click', function() {
      if (sortBtn[i].classList.contains(active)) {
        sortBtn[i].classList.remove(active);
        clearHTML();
        buildMovies(actualArray);
      } else {
        sortBtn[opposite].classList.remove(active);
        sortBtn[i].classList.add(active);
        clearHTML();
        buildMovies(arrayInQuestion);
      }
    })
  }
}

function addEventListeners() {
  favIconListener();
  favListener();
  sortListeners();
  showMoreListener();
}