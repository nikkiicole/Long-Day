async function getCocktails() {
  try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    console.log(response.data);
  }catch (err) {
      console.log(err);
    }
}
getCocktails()


//Connect all API's 

// connect random search data to give me a drink button
// connect random advice data to give me advice button
// link search by cocktail to search. html

//create element for Cocktail name 
//name element 
// append cocktail name element to dom inside of black card 
//connect to give me drink button 

//create element for Cocktail ingredients
//name element
// append cocktail name element to dom inside of black card 
//connect to give me drink button 

//create element for Cocktail Recipe 
//name element
// append cocktail name element to dom inside of black card
//connect to give me drink button 

// append cocktail name element to dom inside of black card 
//name element
//create image element for cocktail photo 
//connect to give me drink button 

// remove sample card and replace with real recipe card when give me a drink is pressed
// create function to remove each time the button is pressed 


//create advice h1 when give me advice is pressed 
//name and apphend to dom 
// remove sample advice and replace with real advice card when give me advice is pressed
// create function to remove old advice each time the button is pressed 




