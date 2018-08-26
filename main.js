document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

// for dropdown menu for trainer 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});



/////////////  appending the axios information for pokemon 1 - charmander -  /////////////////////////
  {
    let divcard1 = document.getElementById("divcd1");
     function renderPokemon(pokebeast)
      {
        let divInfo1 = document.createElement("div");
          divInfo1.setAttribute("class", "center");
          divInfo1.innerHTML =  `
              <div > 
                <li> ${pokebeast.name} </li>
                <li> Id: ${pokebeast.id} </li>
                <li> Type: ${pokebeast.type} </li>
                <li> Attack-Integer: ${pokebeast.attack} </li>
                <li> Defense-Integer: ${pokebeast.defense} </li>
                <li> Abilities: ${pokebeast.abilities} </li>
                <li> HP-Integer: ${pokebeast.hp} </li>
                <li> Speed: ${pokebeast.speed} </li>
                <li> Special-Defense-Integer: ${pokebeast.specialDefense} </li>
                <li>  Special-Attack-Integer: ${pokebeast.specialAttack} </li>
                <li>  Height: ${pokebeast.height} yards </li>
                <li>  Weight: ${pokebeast.weight} tons </li>   
              </div>
                                  `
          divcard1.appendChild(divInfo1);
        }
          axiosgetter(4, renderPokemon)
  }


  ///////////////  appending the axios information for pokemon 2 - lapras -   //////////////////////////////////
  {
    let divcard2 = document.getElementById("divcd2");
     function renderPokemon(pokebeast)
      {
        let divInfo2 = document.createElement("div");
          divInfo2.setAttribute("class", "center");
          divInfo2.innerHTML =  `
              <div > 
                <li> ${pokebeast.name} </li>
                <li> Id: ${pokebeast.id} </li>
                <li> Type: ${pokebeast.type} </li>
                <li> Attack-Integer: ${pokebeast.attack} </li>
                <li> Defense-Integer: ${pokebeast.defense} </li>
                <li> Abilities: ${pokebeast.abilities} </li>
                <li> HP-Integer: ${pokebeast.hp} </li>
                <li> Speed: ${pokebeast.speed} </li>
                <li> Special-Defense-Integer: ${pokebeast.specialDefense} </li>
                <li>  Special-Attack-Integer: ${pokebeast.specialAttack} </li>
                <li>  Height: ${pokebeast.height} yards </li>
                <li>  Weight: ${pokebeast.weight} tons </li>   
              </div>
                                  `
          divcard2.appendChild(divInfo2);
        }
          axiosgetter(131, renderPokemon)
  }





   ///////////////  appending the axios information for pokemon 2 - Mewtwo -   //////////////////////////////////
   {
    let divcard3 = document.getElementById("divcd3");
     function renderPokemon(pokebeast)
      {
        let divInfo3 = document.createElement("div");
          divInfo3.setAttribute("class", "center");
          divInfo3.innerHTML =  `
              <div > 
                <li> ${pokebeast.name} </li>
                <li> Id: ${pokebeast.id} </li>
                <li> Type: ${pokebeast.type} </li>
                <li> Attack-Integer: ${pokebeast.attack} </li>
                <li> Defense-Integer: ${pokebeast.defense} </li>
                <li> Abilities: ${pokebeast.abilities} </li>
                <li> HP-Integer: ${pokebeast.hp} </li>
                <li> Speed: ${pokebeast.speed} </li>
                <li> Special-Defense-Integer: ${pokebeast.specialDefense} </li>
                <li>  Special-Attack-Integer: ${pokebeast.specialAttack} </li>
                <li>  Height: ${pokebeast.height} yards </li>
                <li>  Weight: ${pokebeast.weight} tons </li>   
              </div>
                                  `
          divcard3.appendChild(divInfo3);
        }
          axiosgetter(150, renderPokemon)
  }




  {
    let divcard4 = document.getElementById("divcd4");
     function richardpokemon(monster)
      {
        let divInfo4 = document.createElement("div");
          divInfo4.setAttribute("class", "center");
          divInfo4.innerHTML =  `
              <div > 
              <li> ${monster.name} </li>
              <li> Id: ${monster.id} </li>
              <li> Type: ${monster.type} </li>
              <li> Attack-Integer: ${monster.attack} </li>
              <li> Defense-Integer: ${monster.defense} </li>
              <li> Abilities: ${monster.abilities} </li>
              <li> HP-Integer: ${monster.hp} </li>
              <li> Speed: ${monster.speed} </li>
              <li> Special-Defense-Integer: ${monster.specialDefense} </li>
              <li>  Special-Attack-Integer: ${monster.specialAttack} </li>
              <li>  Height: ${monster.height} yards </li>
              <li>  Weight: ${monster.weight} tons </li>   
              </div>
                                  `
          divcard4.appendChild(divInfo4);
        }
          axiosget(59,richardpokemon)
  }



  {
    let divcard5 = document.getElementById("divcd5");
     function richardpokemon( monster)
      {
        let divInfo5 = document.createElement("div");
          divInfo5.setAttribute("class", "center");
          divInfo5.innerHTML =  `
              <div > 
                 <li> ${monster.name} </li>
                 <li> Id: ${monster.id} </li>
                 <li> Type: ${monster.type} </li>
                 <li> Attack-Integer: ${monster.attack} </li>
                 <li> Defense-Integer: ${monster.defense} </li>
                 <li> Abilities: ${monster.abilities} </li>
                 <li> HP-Integer: ${monster.hp} </li>
                 <li> Speed: ${monster.speed} </li>
                 <li> Special-Defense-Integer: ${monster.specialDefense} </li>
                 <li>  Special-Attack-Integer: ${monster.specialAttack} </li>
                 <li>  Height: ${monster.height} yards </li>
                 <li>  Weight: ${monster.weight} tons </li>   
              </div>
                                  `
          divcard5.appendChild(divInfo5);
        }
          axiosget(82, richardpokemon)
  }


  {
    let divcard6 = document.getElementById("divcd6");
     function richardpokemon( monster)
      {
        let divInfo6 = document.createElement("div");
          divInfo6.setAttribute("class", "center");
          divInfo6.innerHTML =  `
              <div > 
                 <li> ${monster.name} </li>
                 <li> Id: ${monster.id} </li>
                 <li> Type: ${monster.type} </li>
                 <li> Attack-Integer: ${monster.attack} </li>
                 <li> Defense-Integer: ${monster.defense} </li>
                 <li> Abilities: ${monster.abilities} </li>
                 <li> HP-Integer: ${monster.hp} </li>
                 <li> Speed: ${monster.speed} </li>
                 <li> Special-Defense-Integer: ${monster.specialDefense} </li>
                 <li>  Special-Attack-Integer: ${monster.specialAttack} </li>
                 <li>  Height: ${monster.height} yards </li>
                 <li>  Weight: ${monster.weight} tons </li>   
              </div>
                                  `
          divcard6.appendChild(divInfo6);
        }
          axiosget(355, richardpokemon)
  }






































// class Trainer {
//   constructor(name) {
//       this.name = name;
//       this.pokemonArray = [];
//       this.trainer = []; //our gym
//       this.enemy = []; //enemy via search
//   }

//   //gets the pokemon in the trainer 
//   add(pokemon) {
//       this.pokemonArray.push(pokemon)
//   }
//   addEnemy(uglyMonster) {
//       this.enemy.push(uglyMonster);
//   }
//   addTR(trainer) {
//       this.trainer.push(trainer);
//   }
//   //adds the pokemon to the pokemon array 
//   get(name) {//needs work
//       return this.pokemonArray.find((element) => {
//           return element.name == name;
//       })
//   }
//   gettrainerPokesData() {//needs work
//       return (this.name,
//           this.pokemonArray.forEach(element => {
//               console.log(element)
//           }))
//   }
//   //example of putting all the data on the screen////
//   getAllPokemon() {
//       let div = document.getElementById("myList1");
//       let divCard = document.createElement("div");
//       divCard.setAttribute("id", "attriblist");
//       this.pokemonArray.forEach(element => { //use element.whatever to get data
//           let divCard = document.createElement("div");

//           divCard.innerHTML = `
       
//        <div class="card horizontal">
//        <p class="header myListName">${element.name}</p> 
//        <div class="card-image">
//             <img class="pokeList" src="${element.image}" alt="Arcanine" width="200">
//        </div>
//        <div class="card-stacked">
//            <div class="card-content myListContent">
//                <p>ID: ${element.id}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${element.item }\u00A0\u00A0\u00A0\u00A0\  Type: ${element.type}</p>
//                <p>Height: ${element.height  }\u00A0\u00A0\u00A0\u00A0\ Weight: ${element.weight}\u00A0\u00A0\u00A0\u00A0\ Ability: ${element.ability}</p>
//                <p>Attack: ${element.attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${element.defense}\u00A0\u00A0\u00A0\u00A0\ Speed: ${element.speed} </p>
//                <p>Special Attack: ${element.specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${element.specialDefense}</p>
//                <p>Making Moves with Accuracy, Power and Priority</p>
               
//                <p>${this.pokemonArray[0].getMoves[0]}</p>
//                <p>${this.pokemonArray[0].getMoves[1]}</p>
//                <p>${this.pokemonArray[0].getMoves[2]}</p>
//                <p>${this.pokemonArray[0].getMoves[3]}</p>
//        </div>
           
//        </div>
//        </div>
//        `
//        //r.pokemonArray[0].getMoves[0]
//           div.appendChild(divCard);
//       });
      
//   }
// }

// //   let hakuna_matata = new Trainer("Hakuna_Matata");
// //   let Richardo_AI = new Trainer("Richardo_AI");
// let f = new Trainer("Hakuna_Matata");
// let r = new Trainer("Richardo_AI");
// let e = new Trainer("Time_for_a_beat_down");
// let gym = new Trainer("poke_monster_gym");

// setTimeout(function () {
//   r.add(gym.pokemonArray[0]);
//   f.add(gym.pokemonArray[1]);
//   r.add(gym.pokemonArray[2]);
//   f.add(gym.pokemonArray[3]);
//   r.add(gym.pokemonArray[4]);
//   f.add(gym.pokemonArray[5]);
// }, 9000);

// class Pokemon {
//   constructor(data, getItem, getMoves) {
//       this.id = data.id;
//       this.name = data.name,
//           this.type = data.types[0].type.name;
//       this.attack = data.stats[4].base_stat,
//           this.defense = data.stats[3].base_stat,
//           this.abilities = [`${data.abilities[0].ability.name}` + `\xa0\xa0\xa0\xa0` + `${data.abilities[1].ability.name}`],
//           this.hp = data.stats[5].base_stat
//       this.speed = data.stats[0].base_stat;
//       this.specialDefense = data.stats[1].base_stat;
//       this.specialAttack = data.stats[2].base_stat
//       this.height = data.height;
//       this.weight = data.weight;
//       this.image = data.sprites.front_shiny;
//       this.getItem = getItem;
//       this.getMoves = getMoves;
//   }

// }



// let urlArr = ["http://fizal.me/pokeapi/api/59.json",
//   "https://fizal.me/pokeapi/api/131.json",
//   "http://fizal.me/pokeapi/api/82.json",
//   "https://fizal.me/pokeapi/api/150.json",
//   "http://fizal.me/pokeapi/api/355.json",
//   "https://fizal.me/pokeapi/api/4.json"
// ]

// //function getDelayAxios(doitLater){

// let getUrl = urlArr.map(url => axios.get(url));

// axios.all(getUrl)
//   .then(function (result) {


//       for (let i = 0, k = 1; i < result.length; i++) {
//           console.log(result[i].data)

//           monster = new Pokemon(result[i].data, getItem(), getMoves());




//           function getItem() {
//               let stuff = result[i].data.held_items[0];
//               if (stuff === undefined) {
//                   //console.log(`Item: none`);
//                   return `None`;
//               } else {
//                   //console.log(`Item: ${result[i].data.held_items[0].item.name}`);
//                   return `${result[i].data.held_items[0].item.name}`;
//               }
//           }
//           //four moves only. Call new axios for moves and accruacy, power and priority
//           function getMoves() {
//               makingMoves = result[i].data.moves;
//               let move = [];
//               let ctr = makingMoves.length;
//               for (let i = 0; i < 4; i++) {
//                   let randMoves = Math.floor(Math.random() * ctr);
//                   axios.get(makingMoves[randMoves].move.url)
//                       .then(function (resBonus) {
//                           let bong = resBonus.data;
//                           //console.log(bong);
//                           //console.log(
//                           // `Moves${i}: ${makingMoves[randMoves].move.name}
//                           //  Accruacy: ${bong.accuracy}
//                           //  Power: ${bong.power}
//                           //  Priority: ${bong.priority}`);

//                           move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
//                                               Accuracy: ${bong.accuracy}\u00A0\u00A0
//                                               Power: ${bong.power}\u00A0\u00A0
//                                               Priority: ${bong.priority}`);

//                       }).catch(function (response) {
//                           console.error(response);
//                       })
//               }
//               return move

//           }

//           gym.add(monster);


//       }


//   }).catch((error) => {
//       console.log(error)
//   })


// //}

// //search feature
// function getThePokemans(response) {
//   axios.get(`http://fizal.me/pokeapi/api/${response}.json`)
//       .then(function (result) {
//           console.log(result.data);
//           monster = new Pokemon(result.data, getItem(), getMoves());


//           function getItem() {
//               let stuff = result.data.held_items[0];
//               if (stuff === undefined) {
//                   //console.log(`Item: none`);
//                   return `None`;
//               } else {
//                   //console.log(`Item: ${result[i].data.held_items[0].item.name}`);
//                   return `${result.data.held_items[0].item.name}`;
//               }
//           }
//           //four moves only. Call new axios for moves and accruacy, power and priority
//           function getMoves() {
//               makingMoves = result.data.moves;
//               let move = [];
//               let ctr = makingMoves.length;
//               for (let i = 0; i < 4; i++) {
//                   let randMoves = Math.floor(Math.random() * ctr);
//                   axios.get(makingMoves[randMoves].move.url)
//                       .then(function (resBonus) {
//                           let bong = resBonus.data;
//                           //console.log(bong);
//                           // console.log(
//                           //     `Moves${i}: ${makingMoves[randMoves].move.name}
//                           //  Accruacy: ${bong.accuracy}
//                           //  Power: ${bong.power}
//                           //  Priority: ${bong.priority}`);

//                           move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
//                                               Accuracy: ${bong.accuracy}\u00A0\u00A0
//                                               Power: ${bong.power}\u00A0\u00A0
//                                               Priority: ${bong.priority}`);

//                       }).catch(function (response) {
//                           console.error(response);
//                       })
//               }
//               return move

//           }


//           e.addEnemy(monster);


//       }).catch(function (response) {
//           console.error(response);
//       })

// }

// document.getElementById("myBtn").addEventListener("click", displayPokeList);

// function displayPokeList() {
//   r.getAllPokemon();
//   f.getAllPokemon();
// }