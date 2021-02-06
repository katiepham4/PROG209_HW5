//constructor function 
function Movie (title, rating) {
    //property to hold the movie title
    this.title = title;
    //property to hold the rating
    this.rating = rating;

    //validation method to confirm user did not leave title or rating fields blank and the rating is an integer between 1 and 5
    this.validate = function ()
    {
        let movie_rating = this.rating;
        
        if (title == "")
        {
            return false;
        }
        else if (movie_rating == "" || movie_rating < 1 ||movie_rating > 5)
        {
            return false;
        }
        else{
            return true;
        }


    }

    //toString method

    this.toString = function ()
    {
        return "Movie: "+this.title+", Rating: "+this.rating;
    }
}