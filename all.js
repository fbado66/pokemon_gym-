// store the ul in the ul variable
let ul = document.querySelector("ul")

// this is a function that renders
//  the person object information to the html
function renderPokemon(pokebeast){
  let ol = document.createElement("ol")
  ol.innerHTML = `
    <strong>${pokebeast.name} ${pokebeast.attack}</strong>
    <em>${pokebeast.defense} ${pokebeast.abilities}  ${pokebeast.Hp}</em>
  `
  ul.appendChild(ol)
}

// when we run this delayAxios function 3 times and it provides
//  us with the object person as a argument and we can use this
//  argument to render all person information to the html

// the numbers 1, 2 and 3 correspond to what will be replaced
//  in the string within the delayAxios function call
//  defined in the person.js file
//  https://raw.githubusercontent.com/orlandocaraballo/sei/master/outlines/18-working-with-ajax/json/person-${id}.json
axiosgetter(4, renderPokemon)
// axiosgetter(131, renderPokemon)
// axiosgetter(150, renderPokemon)