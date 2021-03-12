
//THIS ATTACHES MY HTML TO THE DOM SO I CAN ACCESS TO USE FOR JAVASCRIPT 

const adviceSlip = document.querySelector("#Advice-Slip")
const adviceButton = document.querySelector("#Give-Me-Advice")

const cocktailTitle = document.querySelector("#Cocktail-Name")
const cocktailIngredients = document.querySelector("#Recipe-Ingredients-Container")
const cocktailInstructions = document.querySelector("#Recipe-Card-Instructions")
const cocktailPicture = document.getElementById("Cocktail-Image")


const cocktailButton = document.querySelector("#Give-Me-A-Drink")
const bothButton = document.querySelector("#Give-Me-Both")
// this creates the call to the api and makes the data available for me to use while implementing a method to catch errors 

async function getCocktails() {
  try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    //ALLOWS ME TO PULL ALL KEYS THAT INCLUDE STRMEASURE AND CREATES A NEW ARRAY OF THOSE VALUES
    let arr = []
    let obj = (response.data.drinks[0])
    for (let x in obj) {
      if (x.includes('strMeasure')) {
        arr.push(obj[x])
      } 
    }
//THIS FILTERS NULL RESULTS FROM MY MEASURES ARRAY
    const filteredMeasures = arr.filter(function (a) {
      return a != null;
    })

    //SAME AS ABOVE BUT FOR MY INGREDIENTS
    let arr1 = []
    let obj1 = (response.data.drinks[0])
    for (let x in obj1) {
      if (x.includes('strIngredient')) {
        arr1.push(obj1[x])
      }
    }
  
    //SAME AS ABOVE WILL FILTER NULL RESULTS
    const filteredIngredients = arr1.filter(function (b) {
      return b != null;
    })

//THIS ALLOWS FOR US TO REMOVE OLD INGREDIENTS FROM OUR PAGE
    while (cocktailIngredients.firstChild) {
    cocktailIngredients.removeChild(cocktailIngredients.firstChild)
    }
//THIS FUNCTION SAYS THAT WE ARE GOING TO LOOP FOR THE AMOUNT OF TIMES EQUAL TO LENGTH OF OUR MEASURES
    for (let i = 0; i < filteredMeasures.length; i++){
      //CREATES OUR INGREDIENT ROW SO WE CAN PLACE OUR MEASURE VALUES AND INGREDIENT VALUES 
      const row = document.createElement("div")
      row.classList.add("Ingredient-Row")
//CREATES DIV TO HOLD MEASURE & INDGREDIENT VALUES FROM API
      const measure = document.createElement("div")
      const ingredient = document.createElement("div")
//APPENDS MEASURE AND INGREDIENT DIV TO ROW 
      row.appendChild(measure)
      row.appendChild(ingredient)
      //ALLOWS THE INNERTEXT OF MEASURE & INGREDIENT TO RELECT WHAT WE HAVE IN API
      measure.innerText = filteredMeasures[i]
      ingredient.innerText = filteredIngredients[i]
//APPHENDS OUR CREATED ROW WITH OUR MEASURE VALUES AND INGREDIENT VALUES TO OUT HTML CREATED COCKTAIL INGREDIENT ELEMENT
      cocktailIngredients.appendChild(row)
//CREATES IDS SEPERATELY FOR MEASURE AND INGREDIENTS TO MAKE CSS MORE DYNAMIC! 
      measure.classList.add("Measure-ID")
      ingredient.classList.add("Ingredient")
    }
//ALLOWS US TO PASS API INFO TO EACH RESPECTIVE FUNCTION ALLOWING US TO DISPLAY VALUES AND POST TO OUR HTML ELEMENTS
    displayCocktailName(response.data.drinks[0].strDrink)
    displayRecipeCardInstructions(response.data.drinks[0].strInstructions)
    displayCocktailImage(response.data.drinks[0].strDrinkThumb)
  }catch (err) {
      console.log(err);
    }
}
getCocktails()

//CHANGES INNER TEXT  OF EACH RESPECTIVE ELEMENTS
function displayCocktailName(cocktailName) {
  cocktailTitle.innerText = cocktailName
}

function displayRecipeCardInstructions(cocktailDirections) {
  cocktailInstructions.innerText =cocktailDirections
}

function  displayCocktailImage(cocktailImage) {
  cocktailPicture.src = cocktailImage
}


cocktailButton.addEventListener("click", getCocktails)

async function getAdviceSlips() {
  try {
    let response = await axios.get("https://api.adviceslip.com/advice");
    //ALLOWS DISPLAYSLIP TO PULL FROM API AND PASS BELOW SO I CAN CONNECT THE HTML 
    console.log(response.data)
    displaySlip(response.data.slip.advice);

  }catch (err) {
      console.log(err);
    }
}
// CALLS FUNCTION TO RUN ABOVE SO DATA IS AVAILABLE 
getAdviceSlips()


//CREATES DISPLAY SLIP FUNCTION WE RUN ADVICE THROUGH WHICH IS THE PARAMETER  I SET TO USE WITHIN THIS FUNCTION 
function displaySlip(advice) {
  adviceSlip.innerText = '"' + advice + '"'
}

adviceButton.addEventListener("click", getAdviceSlips)

bothButton.addEventListener("click",() => {
getAdviceSlips();
getCocktails();
});