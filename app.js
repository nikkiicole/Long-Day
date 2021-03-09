// https://www.thecocktaildb.com/api/json/v1/1/random.php
// https://api.adviceslip.com/advice

//this ATTACHES MY HTML SO I CAN ACCESS TO USE FOR JAVASCRIPT 
const adviceSlip = document.querySelector("#Advice-Slip")
const adviceButton = document.querySelector("#Give-Me-Advice")

const cocktailTitle = document.querySelector("#Cocktail-Name")
const cocktailIngredients = document.querySelector("#Recipe-Card-Ingredients")
const cocktailInstructions = document.querySelector("#Recipe-Card-Instructions")
const cocktailPicture = document.getElementById("Cocktail-Image")
const cocktailButton = document.querySelector("#Give-Me-A-Drink")
// this creates the call to the api and makes the data available for me to use while implementing a method to catch errors 
console.log(cocktailPicture)

async function getCocktails() {
  try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    console.log(response.data.drinks[0]);

    displayCocktailName(response.data.drinks[0].strDrink)
    displayRecipeCardInstructions(response.data.drinks[0].strInstructions)
    displayCocktailImage(response.data.drinks[0].strDrinkThumb)
     // displayRecipeCardIngredients
  }catch (err) {
      console.log(err);
    }
}
getCocktails()

function displayCocktailName(cocktailName) {
  // console.log(cocktailName)
  cocktailTitle.innerText = cocktailName
}

function displayRecipeCardInstructions(cocktailDirections) {
  // console.log(cocktailDirections)
  cocktailInstructions.innerText =cocktailDirections
}

function  displayCocktailImage(cocktailImage) {
  console.log(cocktailImage)
  cocktailPicture.src = cocktailImage
}

cocktailButton.addEventListener("click", getCocktails)

// CALLS FUNCTION TO RUN ABOVE SO DATA IS AVAILABLE 

// this creates the call to the api and makes the data available for me to use while implementing a method to catch errors 
async function getAdviceSlips() {
  try {
    let response = await axios.get("https://api.adviceslip.com/advice");
    // console.log(response.data.slip.advice);
    //ALLOWS DISPLAYSLIP TO PULL FROM API AND PASS BELOW SO I CAN CONNECT THE HTML 
    displaySlip(response.data.slip.advice);

  }catch (err) {
      console.log(err);
    }
}
// CALLS FUNCTION TO RUN ABOVE SO DATA IS AVAILABLE 
getAdviceSlips()

//CREATES DISPLAY SLIP FUNCTION WE RUN ADVICE THROUGH WHICH IS THE PARAMETER  I SET TO USE WITHIN THIS FUNCTION 
function displaySlip(advice) {
  console.log(advice)
  adviceSlip.innerText = '"' + advice + '"'
}

adviceButton.addEventListener("click", getAdviceSlips)




// function removeOldSlip() {
//   while (div.firstChild) {
//     div.removeChild(div.firstChild);
//   }  
// }

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




