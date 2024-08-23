let api = "http://www.omdbapi.com/?apikey=20186a12&t=";

// Cache DOM elements
let title = document.getElementById('title');
let director = document.getElementById('director');
let writer = document.getElementById('writer');
let actors = document.getElementById('actors');
let language = document.getElementById('language');
let awards = document.getElementById('awards');
let country = document.getElementById('country');
let genre = document.getElementById('genre');
let plot = document.getElementById('plot');
let released = document.getElementById('released');
let ratings = document.getElementById('ratings');
let collection = document.getElementById('collection');
let runtime = document.getElementById('runtime');
let poster = document.getElementById('poster-img');

function searchMovie() {
    // Hide the introductory text
    const displayContent = document.querySelector('.display-content');
    displayContent.style.display = 'none';

    // Show the content section
    const content = document.querySelector('.content');
    content.style.display = 'block';

    // Show the poster image
    const poster = document.querySelector('.poster');
    poster.style.display = 'block';

    // Get the movie name from the input field
    const movieName = document.getElementById('movieName').value.trim();

    // Build the query URL
    const query = api + encodeURIComponent(movieName);

    // Fetch movie data from the API
    fetch(query)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                // Populate content with movie details
                title.innerText = data.Title || 'N/A';
                director.innerText = data.Director || 'N/A';
                writer.innerText = data.Writer || 'N/A';
                actors.innerText = data.Actors || 'N/A';
                language.innerText = data.Language || 'N/A';
                awards.innerText = data.Awards || 'N/A';
                genre.innerText = data.Genre || 'N/A';
                plot.innerText = data.Plot || 'N/A';
                released.innerText = data.Released || 'N/A';
                ratings.innerText = data.imdbRating || 'N/A';
                collection.innerText = data.BoxOffice || 'N/A';
                country.innerText = data.Country || 'N/A';
                runtime.innerText = data.Runtime || 'N/A';
                poster.src = data.Poster || '';
            } else {
                // Handle the case where the movie is not found
                alert('Movie not found. Please check the title and try again.');
                content.style.display = 'none'; // Hide content if movie not found
                displayContent.style.display = 'block'; // Show introductory text again

                // Hide the poster image
                poster.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
            alert('Error fetching movie details. Please try again later.');

            // Handle error case
            content.style.display = 'none'; // Hide content in case of error
            displayContent.style.display = 'block'; // Show introductory text again

            // Hide the poster image
            poster.style.display = 'none';
        });
}
