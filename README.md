# Project Overview

## Project Name

LongDay

## Project Description

My idea is to create an app that generates a random cocktail and random advice. The user can either select to get a random cocktail recipe and random advice. There will also be functionality to search cocktails by name if the user doesn't like the random option.

## API and Data Sample

Get Request for a random cocktail

https://www.thecocktaildb.com/api.php

```JSON
drinks: Array(1)
0: {idDrink: "11121", strDrink: "Bobby Burns Cocktail", strDrinkAlternate: null, strTags: null, strVideo: null, …}
length: 1
__proto__: Array(0)
__proto__: Object

```

Get Request for search for cocktail by name

https://www.thecocktaildb.com/api.php

```JSON
drinks: Array(3)
0: {idDrink: "11000", strDrink: "Mojito", strDrinkAlternate: null, strTags: "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild", strVideo: null, …}
1: {idDrink: "15841", strDrink: "Mojito Extra", strDrinkAlternate: null, strTags: null, strVideo: null, …}
2: {idDrink: "178336", strDrink: "Blueberry Mojito", strDrinkAlternate: null, strTags: null, strVideo: null, …}
length: 3
__proto__: Array(0)
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

```

Get Request for a random advice slip

https://api.adviceslip.com/

```JSON
slip:
advice: "Don't be afraid to ask questions."
id: 89
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

```

## Wireframes

Home Page:

I will create a site with two buttons in the header to generate each option for user. It will also have a third button in the corner to go the the page that will allow them to search by cocktail. In the header my email will be linked to a create email prompt and it will have a link to my github account.

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1615226141/Screen_Shot_2021-03-08_at_12.54.16_PM_akg6tp.png "Home Page Wireframe")

Search Page:

This page will allow the user to search by cocktail.

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1615226140/Screen_Shot_2021-03-08_at_12.52.28_PM_opbm2i.png "Search Page Wireframe")

### MVP/PostMVP

#### MVP

- Build with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid.
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
- Deploy site to Github Pages.
- Commit daily until completion.
- Link to second HTML page

#### PostMVP

- Add second API
- Add search by cocktail function

## Priority Matrix

Inline-style:
![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1615192762/64B34E06-7283-4A93-A2FC-3B1517AB0DC6_1_105_c_kt9zfw.jpg "Logo Title Text 1")

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form             |    H     |      3hrs      |               |             |
| Working with API        |    H     |      5hrs      |               |             |
| Working with HTML       |    H     |      4hrs      |               |             |
| Working with Javascript |    H     |     20hrs      |               |             |
| Working with CSS        |    H     |      8hrs      |               |             |
| Debugging               |    H     |      3hrs      |               |             |
| Editing                 |    H     |      4hrs      |               |             |
| Testing                 |    H     |      3hrs      |               |             |
| Total                   |    H     |     50hrs      |               |             |

## Code Snippet

## Change Log

1.  Project Started: March 3rd, 2021.
