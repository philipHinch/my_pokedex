# myPokedex

This project is for a 3SC Web Developer Test. 

### Quick description:

**myPokedex** is an app that will allow you to view all the pokemons of the pokemon universe. Opening the app will display a grid of pokemon cards split into multiple pages. A fetch request is sent to the [Poke API](https://pokeapi.co/) which will then respond with all the pokemon data. **Pagination** feature has been implemented for better user experience. The **Search** input will allow you to search any pokemon in the database. Save or remove pokemon to/from your **Favourites** just by clicking on the **Heart** icon on the pokemon card. Saved pokemon will save the **ID** of each pokemon in the **local storage**. View your favourite pokemons by clicking on the **Favourites** button. Activate the "compare mode" which will allow you to start comparing pokemon to one another. Clicking on the **Compare** button will add extra buttons on the pokemon card which will allow you to selecct pokemon 1 or pokemon 2 for comparing. 

[View Project](https://my-pokedex-nu.vercel.app/)

![This is an image](https://raw.githubusercontent.com/philipHinch/underline/main/underline.png)

### Get started:

#### Install Dependencies

```
npm install
```

#### Run

```
npm start
```

![This is an image](https://raw.githubusercontent.com/philipHinch/underline/main/underline.png)

### Technologies used:

- React
- React Hooks
- useContext/useReducer/useState (state management)
- High Order Functions (map, filter)
- Fetch API
- Async/Await (asyncronous programming)
- CSS Animations

Note: 
I chose to use **React** rather than **Vanilla JavaScript** because of how smooth **React** applications are and how easy it is to insert HTML elements with JSX instead of the long process of creating elements an appending text and classes to them with plain JS. Also with this project it was important to manage state and keep things syncronised. React does a great job with that with hoooks such as useContext, useReducer and useState.

![This is an image](https://raw.githubusercontent.com/philipHinch/underline/main/underline.png)

### Challenges:

- The pagination implementation was quite tricky and I had to format the data in a way that it was easier to work with. 

### What extra features can be added:

- Clicking on the card will show the details of that specific pokemon. Clicking on it again will revert to showing the name and type.
- Toast notifications when adding/removing pokemon to/from favourites.
- Button that can allow users to view only the classic pokemon, the new generation of pokemon or all of them together.

![This is an image](https://raw.githubusercontent.com/philipHinch/underline/main/underline.png)

Desktop Previews:
&nbsp;
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview.png?raw=true)
---
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview_2.png?raw=true)
---
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview_3.png?raw=true)
Mobile Previews:
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview.jpg?raw=true)
---
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview_2.jpg?raw=true)
---
![This is an image](https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview_3.jpg?raw=true)
&nbsp;
[View Project](https://my-pokedex-nu.vercel.app/)





