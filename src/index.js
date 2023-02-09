// Your code here

// You will need to make a GET request to the following endpoint to retrieve the film data:

const moviesUrl = 'http://localhost:3000/films';
const moviesList = document.querySelector('#films');
const showingInfo = document.querySelector('#card');


fetch(moviesUrl)
.then(response => response.json())
.then(movies => renderMovies(movies))


function renderMovies(movies) {
    movies.forEach(movieList)
    movieDetails(movies[0])
};

function movieList(movie) {
let movieTitle = document.createElement('li');
movieTitle.innerText = movie.title;
// console.log(movieTitle);
moviesList.append(movieTitle);
movieTitle.addEventListener('click', () => movieDetails(movie));
};

// See the first movie's details, including its 
// poster, 
// title, 
// runtime, 
// showtime, and 
// available tickets 
// when the page loads. 
// The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. 
function movieDetails(movie) {
    console.log(movie);
    let movieTitle = document.getElementById('title');
    let movieRuntime = document.getElementById('runtime');
    let movieShowtime = document.getElementById('showtime');
    let movieDesc = document.getElementById('film-info');
    let ticketsLeft = document.getElementById('ticket-num');
    let moviePoster = document.getElementById('poster');
    let buyButton = document.querySelector('#buy-ticket');
    console.log(buyButton);

    movieTitle.textContent = movie.title;
    movieRuntime.textContent = movie.runtime + ' minutes';
    movieShowtime.textContent = movie.showtime;
    movieDesc.textContent = movie.description;
    ticketsLeft.textContent = (movie.capacity - movie.tickets_sold);
    moviePoster.src = movie.poster;
    moviePoster.alt = movie.title;

    buyButton.addEventListener('click', () => {
    
        if ((movie.capacity - movie.tickets_sold) > 1) {
            movie.tickets_sold += 1;
            ticketsLeft.textContent = (movie.capacity - movie.tickets_sold);
        } else {
            ticketsLeft.textContent =('Sorry, no more tickets!');
        }}
        );
    
    // movie.innerHTML = `
    // <div id="title" class="title">${movie.title}div>
    // <div id="runtime" class="meta">${movie.runtime} minutes</div>
    // <div class="content">
    //   <div class="description">
    //     <div id="film-info">${movie.description}</div>
    //     <span id="showtime" class="ui label">${movie.showtime}</span>`;
};




// still to-do//
// Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). No persistence is needed for this feature.