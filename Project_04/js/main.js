let model = (() => {

    const apiUrls = {
        display50: "http://api.tvmaze.com/shows",
        details: "http://api.tvmaze.com/shows/"

    }

    class Movie {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }

    let movieList = []
    
    const createMovie = ({id, name, image}) => {
        const movie = new Movie (id, name, image)
        movieList.push(movie)
    }
        
     const getMovies = arr => {
        for(let i = 0; i < arr.length; i++) {
            if(i > 49) {
                break;
            }

            createMovie(arr[i])
        }
        return movieList
    }

    const expose = {
        apiUrls,
        getMovies, 
        movieList
    }

    return expose;  

})()

let view = (() => {

    const nodes = {
        movieHolder: document.querySelector(".movie-holder")
    }

    const displayMovies = (arr) => {        
        for(let i = 0; i < arr.length; i++) {
            const movieCard = document.createElement("div");
            const linkToMovie = document.createElement("a");
            const movieImage = document.createElement("img");
            const movieDescription = document.createElement("p")

            movieImage.setAttribute("src", arr[i].image.medium)
            movieDescription.textContent = arr[i].name
            
            movieCard.classList.add("movie-card")
            movieCard.appendChild(movieImage)
            movieCard.appendChild(movieDescription)
            linkToMovie.setAttribute("href", "./show-info.html")
            linkToMovie.appendChild(movieCard) 
            nodes.movieHolder.appendChild(linkToMovie)
        }
    }

    const expose = {
        nodes,
        displayMovies
    }

    return expose

})()

let controller = ((data, ui) => {
     
    let request = new XMLHttpRequest();
    request.open('GET', data.apiUrls.display50);
    request.send();

    request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
        let response = JSON.parse(request.responseText);
        let movieList = data.getMovies(response)
        ui.displayMovies(movieList)
    } else {
        throw new Error("Something went wrong")
        }
    };

    request.onerror = () => {
        throw new Error("Something went wrong")
    };

})(model, view)