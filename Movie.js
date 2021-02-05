function Movie (movietitle, rating) 
{
    this.movietitle = movietitle;
    this.rating = rating;

    this.validate = function ()
    {
        let user_rating = parseInt(this.rating);

        //making sure the user didn't leave the title field blank and rating is an integer between 1 and 5 
        if(movietitle == "")
        {
            return false;
        }
        else if (rating < 1 || rating > 5)
        {
            return false;
        }
        else 
        {
            return true;
        }

        this.toString = function ()
         {
             return "Movie:" +  this.movietitle + "Rating:" + user_rating
        }

    }
}