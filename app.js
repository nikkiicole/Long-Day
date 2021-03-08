async function getCocktails() {
  try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    console.log(response.data);
  }catch (err) {
      console.log(err);
    }
}
getCocktails()

