let model = (() => {

    const urls = {
        display50: "http://api.tvmaze.com/shows",
        details: "http://api.tvmaze.com/shows/",
        showDetailsPage: "./show-info.html"

    }

    class Movie {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }

    
    const createMovie = ({id, name, image}) => {
      
        return new Movie (id, name, image)
    }
    
    const getMovies = arr => {
        let firstFifty = arr.slice(0, 49)
        let movieList  = firstFifty.map(element => {
            
            return createMovie(element)        
        });

        return movieList
    }

    const expose = {
        urls,
        getMovies, 
    }

    return expose;  

})()