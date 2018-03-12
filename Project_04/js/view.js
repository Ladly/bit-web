let view = (() => {

    const nodes = {
        movieHolder: document.querySelector(".movie-holder"),
        showDetailHolder: document.querySelector(".show-details"),
        seasonsHolder: document.querySelector(".show-seasons"),
        showCast: document.querySelector(".show-cast"),
    }

    const displayShowDetails = (obj) => {
        nodes.showDetailHolder.innerHTML = 
        `   <h1>${obj.name}<h1>
            <img src="${obj.image.original}" alt="show poster" class="stupid-image"/>
        `
    }

    const displayShowCast = (arr) => {
        let ul = document.createElement("ul")
        arr.forEach(element => {
            let li = document.createElement("li")
            li.textContent = element.person.name
            ul.appendChild(li)
       }); 
       let h2 = document.createElement("h2");
       h2.textContent= "Cast"
       nodes.showCast.appendChild(h2)
       nodes.showCast.appendChild(ul)
    }

    const displayShowSesons = (arr) => {
        ul = document.createElement("ul")
        arr.forEach(element => {
                let li = document.createElement("li")
                li.textContent = `${element.premiereDate}      ${element.endDate}`
                ul.appendChild(li) 
        })
        
        nodes.seasonsHolder.innerHTML = 
        `
        <h2>Seasons (${arr.length})</h2>
        `
        nodes.seasonsHolder.appendChild(ul)
    }

    const displayMovies = (arr) => {   
             arr.forEach(element => {
                let card = document.createElement("div");

                card.innerHTML=  
                `
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top" src="${element.image.medium}" alt="Card">
                        <div class="card-body">                        
                            <a href="#" data-image-id="${element.id}"><h6 class="card-title">${element.name}</h6></a>
                        </div>
                    </div>
                </div>
                `
    
                nodes.movieHolder.appendChild(card)
             });       
    }

    const expose = {
        nodes,
        displayMovies, 
        displayShowDetails,
        displayShowSesons,
        displayShowCast
    }

    return expose

})()