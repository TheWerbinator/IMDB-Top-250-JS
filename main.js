let apiArray = [];
let actualArray = [];

const AZ = document.getElementById('AZ');
const ZA = document.getElementById('ZA');

const movieDisplay = document.getElementById('movie-display');
const favSortBtn = document.querySelector('.favs-filter');
let counter = 0;
let increment = 5;
let trigger = 0;

let showMoreCounter = 6;
let sortClicked = 0;

const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')

function sortByRank(){
  const list = document.querySelector("#movie-display");
  [...list.children]
    .sort((a, b) => (a.children[0].children[0].innerText - b.children[0].children[0].innerText))
    .forEach((node) => list.appendChild(node));
}

function sortAlphabetically(direction) {
  const list = document.querySelector("#movie-display");

  if(direction == 0) {
    [...list.children]
      .sort((a, b) => (a.children[0].children[1].innerText > b.children[0].children[1].innerText ? 1 : -1))
      .forEach((node) => list.appendChild(node));
  } else {
    [...list.children]
      .sort((a, b) => (a.children[0].children[1].innerText < b.children[0].children[1].innerText ? 1 : -1))
      .forEach((node) => list.appendChild(node));
  }
}

const createArrayFromFetch = async () => {
  try {
    const movies = await fetch("https://imdb-api.com/en/API/Top250Movies/k_hza8743z");
    const data = await movies.json();
    data.items.forEach((element) => {
      apiArray.push(element);
    });
    pushToArray(actualArray, apiArray);
    buildMovies(actualArray, movieDisplay);
  } catch(err) {
    console.log(err);
  }
  addEventListeners();
}

function pushToArray(object, pusher) {
  object.length = 0;
  for (let i = 0; i < 30; i++) {
    object.push(pusher[i]);
  }
}

const invisible = 'invisible';

const buildMovies = (arr, list) => {
  for (let i = 0; i < arr.length; i++) {
    let movie = arr[i];
    const newListItem = document.createElement("li");
    newListItem.setAttribute('id', 'listItem');
    newListItem.innerHTML = 
      `<div class="movie" id="movie">
        <h3 class="rank">${movie.rank}</h3>
        <h3 class="title">${movie.fullTitle}</h3>
        <div class="movie-cover">
          <img src="${movie.image}" alt="Movie Cover Art">
        </div>
        <div class="fav-icon"><i class="fa-solid fa-star"></i></div>
      </div>`;
      list.appendChild(newListItem);
      if(trigger>4) {
        newListItem.classList.add(invisible);
      }
      trigger++;
  }
}

createArrayFromFetch();

function showMoreListener() {
  const showMore = document.getElementById('show-more');
  showMore.addEventListener('click', function() {
    show5MoreMovies();
    if (showMoreCounter > 30) {
      showMore.classList.add(invisible);
    }
  });
}

function show5MoreMovies() {
  for (let i = 0; i < 5; i++) {
    const hiddenMovieLI = document.querySelector(`#movie-display :nth-child(${showMoreCounter})`);
    hiddenMovieLI.classList.remove(invisible);
    showMoreCounter++;
  }
}

const isFav = 'is-fav';

function favIconListener() {
  const favIcon = document.querySelectorAll('.fav-icon');
  for (const icon of favIcon) {
    icon.addEventListener('click', function() {
      this.parentElement.parentElement.classList.add('favHidden');
      this.parentElement.classList.contains(isFav) && favSortBtn.classList.contains(active) ? this.parentElement.classList.remove(isFav) : this.parentElement.classList.add(isFav);     
    })
  }
}

const active = 'active';

function favSortActive(item) {
  item.classList.contains(active) ? item.classList.remove(active) : item.classList.add(active);
}

function favSortListener() {
  const allMovies = document.querySelectorAll('.movie');
  
  favSortBtn.addEventListener('click', function() {
    favSortActive(favSortBtn);
    allMovies.forEach((item) => {
      if (!item.classList.contains(isFav) && favSortBtn.classList.contains(active)) {
        item.parentElement.classList.add('favHidden');
        item.classList.remove('margin-adjust');
      } else if (item.classList.contains(isFav) && favSortBtn.classList.contains(active)){
        item.parentElement.classList.remove('favHidden');
        item.classList.add('margin-adjust');
      } else if (!item.classList.contains(isFav) && !favSortBtn.classList.contains(active)){
        item.parentElement.classList.remove('favHidden');
        item.classList.remove('margin-adjust');
      } else {
        item.parentElement.classList.add('favHidden');
        item.classList.remove('margin-adjust');
      }
    });
  })
}

function sortListeners() {
  const sortBtn = [AZ, ZA];
  for (let i = 0; i < 2; i++) {
    let opposite = i === 0 ? 1 : 0;
    sortBtn[i].addEventListener('click', function() {
      if (sortBtn[i].classList.contains(active)) {
        sortBtn[i].classList.remove(active);
        sortByRank();
      } else {
        sortBtn[i].classList.remove(active);
        sortBtn[opposite].classList.remove(active);
        sortBtn[i].classList.add(active);
        sortAlphabetically(i);
      }
    })
  }
}

function addEventListeners() {
  favIconListener();
  favSortListener();
  sortListeners();
  showMoreListener();
}