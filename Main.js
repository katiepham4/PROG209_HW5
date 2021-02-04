document.getElementById("listOfMovies").style.display = "none"; // Hides the list
movieArray = []; // Array of movies!

function submitForm() {
    let myMovie = new Movie(document.getElementById("mTitle"), document.getElementById(rating))
    
    if (true) // Until the Movie.js is ready. --> myMovie.validate()
    {
        movieArray.push(myMovie)

        let myUI = document.getElementById("list");
        let myLI = document.createElement("li");
        myLI.appendChild(document.createTextNode(myMovie.toString()));
        myUI.appendChild(myLI);
        document.getElementById("theForm").reset();
    }
    else
    {
        alert("Uh oh! Data was not good.")
    }
}

function viewMovies() {
    document.getElementById("listOfMovies").style.display = "block";
}