document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

// background responsive 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});




// for dropdown menu for trainer 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});


























// // main container Trainers  
// class Trainers {
//   constructor() { 
//     this.all = []
//   }

//   //container for me as trainer 
//   add(trainer) {
//     this.all.push(trainer)
//   }

//   get(name) {
//     return this.all.find((element) => {
//       return element.name == name
//     })
//   }
// }
// // console.log(Trainers)
// // to define the trainer as individual 
// class Trainer {
//   constructor(name){
//   this.name = name;
//   this.pokemon =[];
//   }

//   //gets the pokemon in the trainer 
//   add(pokemon){
//   this.pokemon.push(pokemon)
//   } 

// //adds the pokemon to the pokemon array 
//   get(name) {
//     return this.pokemon.find((element) => {
//       return element.name == name;
//     })
//   }
// }

// //me as trainer 
// let hakuna_matata = new Trainer("Hakuna_Matata");
// console.log(hakuna_matata);


// // individual class for all pokemon 
// class Pokemon {
//   constructor(data) {
//     this.name = data.name,
//     this.attack = data.stats[4].base_stat,
//     this.defense = data.stats[3].base_stat,
//     this.abilities = [`${data.abilities[0].ability.name}`+ `\xa0\xa0\xa0\xa0`+ `${data.abilities[1].ability.name}`],
//     this.Hp = data.stats[5].base_stat
//   } 
// }


// // selecting ol from the html side
// let ol = document.querySelector("ol")

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// // retrieve data from hosted pokemon-4 json file
// axios.get("https://fizal.me/pokeapi/api/4.json")
// .then((response) => {

//   let data = response.data
  
//  let charmander = new Pokemon(data);
//  hakuna_matata.add(charmander);
//  console.log(hakuna_matata.get("charmander"));

//  let first_pokemon = document.createElement("ol")
//  first_pokemon.innerHTML =[`Name:\xa0${charmander.name}\xa0`+
//  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `` + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` +`
//  Attack Interger:\xa0${charmander.attack}`+
//  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
// Defense Integer:   ${charmander.defense}`+
// `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
// Abilities: `+``+`
//  ${charmander.abilities}`+
//  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
// HP Integer:\xa0${charmander.Hp}`]

//  ol.appendChild(first_pokemon)
 
// //  let name = document.getElementsByTagName("ol")
 
// //  let li = document.createElement('li')

// //  let uno = document.createElementById('name')
// //  name.innerHTML = li

// // console.log(uno)

// //  li.innerHTML = charmander.name
// // //  name.innerHTML = charmander.name
// // //  console.log(charmander.name)

//   }).catch((error) => {
//     console.log(error)
//   })



// //////////////////////////////////////////////////////////////////////////////////////////////////
//  let dl = document.querySelector("dl")
// // retrieve data from hosted pokemon-131 json file
// axios.get("https://fizal.me/pokeapi/api/131.json")
// .then((response) => {

//   let data = response.data
//   let lapras = new Pokemon(data)
//   console.log(lapras)
//   hakuna_matata.add(lapras)
//   console.log(hakuna_matata.get("lapras"))

// let second_pokemon = document.createElement("dl")
// second_pokemon.innerHTML = [`Name:\xa0${lapras.name}\xa0`+
// `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `` + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` +`
// Attack Interger:\xa0${lapras.attack}`+
// `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
// Defense Integer:   ${lapras.defense}`+
// `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
// Abilities: `+``+`
// ${lapras.abilities}`+
// `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ `+`
// HP Integer:\xa0${lapras.Hp}`]

//  dl.appendChild(second_pokemon)

//   // console.log(Franklin.get(lapras))  

// }).catch((error) => {
//   console.log(error)
// })

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// let dt = document.querySelector("dt")
// // retrieve data from hosted pokemon-150 json file
// axios.get("https://fizal.me/pokeapi/api/150.json")
// .then((response) => {

//   let data = response.data
//   let mewtwo = new Pokemon(data)
//   console.log(mewtwo)
//   hakuna_matata.add(mewtwo)
//   console.log(hakuna_matata.get("mewtwo"))

//   let third_pokemon = document.createElement("dt")
//   third_pokemon.innerHTML = [`Name:\xa0${mewtwo.name}\xa0`+
//   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `` + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` +`
//   Attack Interger:\xa0${mewtwo.attack}`+
//   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
//   Defense Integer:   ${mewtwo.defense}`+
//   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
//   Abilities: `+``+`
//   ${mewtwo.abilities}`+
//   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ `+`
//   HP Integer:\xa0${mewtwo.Hp}`]
  
//    dt.appendChild(third_pokemon)


// }).catch((error) => {
//   console.log(error)
// })




// function oneFunction() {
//   var x = document.getElementById("panel");
//   if (x.style.display === "block") {
//       x.style.display = "none";
//   } else {
//       x.style.display = "block";
//   }
// }

// function twoFunction() {
//   var y = document.getElementById("panel_2");
//   if (y.style.display === "block") {
//       y.style.display = "none";
//   } else {
//       y.style.display = "block";
//   }
// }

// function threeFunction() {
//   var z = document.getElementById("panel_3");
//   if (z.style.display === "block") {
//       z.style.display = "none";
//   } else {
//       z.style.display = "block";
//   }
// }



class Trainer {
  constructor(name) {
      this.name = name;
      this.pokemonArray = [];
      this.trainer = [];//our gym
      this.enemy = []; //enemy via search
  }

  //gets the pokemon in the trainer 
  add(pokemon) {
      this.pokemonArray.push(pokemon)
  }
  addEnemy(uglyMonster){
      this.enemy.push(uglyMonster);
  }
  addTR(trainer) {
      this.trainer.push(trainer);
  }
  //adds the pokemon to the pokemon array 
  get(name) {
      return this.pokemonArray.find((element) => {
          return element.name == name;
      })
  }
  gettrainerPokesData() {
      return (this.name,
          this.pokemonArray.forEach(element => {
              console.log(element)
          }))

  }
}

//   let hakuna_matata = new Trainer("Hakuna_Matata");
//   let Richardo_AI = new Trainer("Richardo_AI");
let f = new Trainer("Hakuna_Matata");
let r = new Trainer("Richardo_AI");
let e = new Trainer("Time_for_a_beat_down");
let gym = new Trainer("poke_monster_gym");

// setTimeout(function () {
//     for (let r = 0, f = 1; r < gym.length; r + 2, f + 2) {
//         console.log(gym.pokemonArray[r]);
//         console.log(gym.pokemonArray[f]);
//         r.add(gym.pokemonArray[r]);
//         f.add(gym.pokemonArray[f]);
//     }
// }, 3000);
setTimeout(function () {
  r.add(gym.pokemonArray[0]);
  f.add(gym.pokemonArray[1]);
  r.add(gym.pokemonArray[2]);
  f.add(gym.pokemonArray[3]);
  r.add(gym.pokemonArray[4]);
  f.add(gym.pokemonArray[5]);
}, 9000);

class Pokemon {
  constructor(data, getItem, getMoves) {
      this.id = data.id;
      this.name = data.name,
          this.type = data.types[0].type.name;
      this.attack = data.stats[4].base_stat,
          this.defense = data.stats[3].base_stat,
          this.abilities = [`${data.abilities[0].ability.name}` + `\xa0\xa0\xa0\xa0` + `${data.abilities[1].ability.name}`],
          this.hp = data.stats[5].base_stat
      this.speed = data.stats[0].base_stat;
      this.specialDefense = data.stats[1].base_stat;
      this.specialAttack = data.stats[2].base_stat
      this.height = data.height;
      this.weight = data.weight;
      this.image = data.sprites.front_shiny;
      this.getItem = getItem;
      this.getMoves = getMoves;
  }

}



let urlArr = ["http://fizal.me/pokeapi/api/59.json",
  "https://fizal.me/pokeapi/api/131.json",
  "http://fizal.me/pokeapi/api/82.json",
  "https://fizal.me/pokeapi/api/150.json",
  "http://fizal.me/pokeapi/api/355.json",
  "https://fizal.me/pokeapi/api/4.json"
]

//function getDelayAxios(doitLater){

let getUrl = urlArr.map(url => axios.get(url));

axios.all(getUrl)
  .then(function (result) {


      for (let i = 0, k = 1; i < result.length; i++) {
          console.log(result[i].data)

          monster = new Pokemon(result[i].data, getItem(),getMoves());




          function getItem() {
              let stuff = result[i].data.held_items[0];
              if (stuff === undefined) {
                  //console.log(`Item: none`);
                  return `None`;
              } else {
                  //console.log(`Item: ${result[i].data.held_items[0].item.name}`);
                  return `${result[i].data.held_items[0].item.name}`;
              }
          }
          //four moves only. Call new axios for moves and accruacy, power and priority
          function getMoves() {
              makingMoves = result[i].data.moves;
              let move = [];
              let ctr = makingMoves.length;
              for (let i = 0; i < 4; i++) {
                  let randMoves = Math.floor(Math.random() * ctr);
                  axios.get(makingMoves[randMoves].move.url)
                      .then(function (resBonus) {
                          let bong = resBonus.data;
                          //console.log(bong);
                          // console.log(
                          //     `Moves${i}: ${makingMoves[randMoves].move.name}
                          //  Accruacy: ${bong.accuracy}
                          //  Power: ${bong.power}
                          //  Priority: ${bong.priority}`);

                          move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                              Accuracy: ${bong.accuracy}\u00A0\u00A0
                                              Power: ${bong.power}\u00A0\u00A0
                                              Priority: ${bong.priority}`);

                      }).catch(function (response) {
                          console.error(response);
                      })
              }
              return move

          }

          gym.add(monster);
          

      }
      

  }).catch((error) => {
      console.log(error)
  })


//}

//search feature
function getThePokemans(response) {
  axios.get(`http://fizal.me/pokeapi/api/${response}.json`)
      .then(function (result) {
          console.log(result.data);
          monster = new Pokemon(result.data, getItem(),getMoves());
          

          function getItem() {
              let stuff = result.data.held_items[0];
              if (stuff === undefined) {
                  //console.log(`Item: none`);
                  return `None`;
              } else {
                  //console.log(`Item: ${result[i].data.held_items[0].item.name}`);
                  return `${result.data.held_items[0].item.name}`;
              }
          }
          //four moves only. Call new axios for moves and accruacy, power and priority
          function getMoves() {
              makingMoves = result.data.moves;
              let move = [];
              let ctr = makingMoves.length;
              for (let i = 0; i < 4; i++) {
                  let randMoves = Math.floor(Math.random() * ctr);
                  axios.get(makingMoves[randMoves].move.url)
                      .then(function (resBonus) {
                          let bong = resBonus.data;
                          //console.log(bong);
                          // console.log(
                          //     `Moves${i}: ${makingMoves[randMoves].move.name}
                          //  Accruacy: ${bong.accuracy}
                          //  Power: ${bong.power}
                          //  Priority: ${bong.priority}`);

                          move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                              Accuracy: ${bong.accuracy}\u00A0\u00A0
                                              Power: ${bong.power}\u00A0\u00A0
                                              Priority: ${bong.priority}`);

                      }).catch(function (response) {
                          console.error(response);
                      })
              }
              return move

          }

          e.addEnemy(monster);
        

        }).catch(function (response) {
            console.error(response);
        })

}

