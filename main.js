const requestURL = '../json/documentaries.json';

async function fetchMoviesjson() {
    const response = await fetch (requestURL);
    const movies = await response.
    json();
    return movies;
}

fetchMoviesjson().then(movies => {
    for (let index = 0; index < movies.documentaries.length; index++) {
        const moviesSection = document.getElementById('movieSection');
        
        let id = movies.documentaries[index].id;
        let poster = movies.documentaries[index].poster;
        let title = movies.documentaries[index].title;
        let year = movies.documentaries[index].year;
        let length = movies.documentaries[index].length;
        let director = movies.documentaries[index].director;
        let sypnosis = movies.documentaries[index].sypnosis;

        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
    <img src="${poster}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${sypnosis}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
        `
    }
})