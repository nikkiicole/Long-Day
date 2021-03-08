
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito

async function getCocktailSearch() {
  try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito");
    console.log(response.data);
  }catch (err) {
      console.log(err);
    }
}
getCocktailSearch()


//Connect all API's 
//link pages 

// connect data to enter key press on input form
// via event listener when enter is pressed fire submit
//producing replacement cocktail card

//create element for Cocktail name 
//name element
// append cocktail name element to dom inside of black card
//connect to give me search enter press 

//create element for Cocktail ingredients
//name element
// append cocktail name element to dom inside of black card 
//connect to input search enter press

//create element for Cocktail Recipe 
//name element
// append cocktail name element to dom inside of black card
//connect to input search enter press

 // remove sample card and replace with real recipe card when submit by enter is pressed
// create function to remove each time the button is pressed 