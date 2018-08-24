//Arcanine
//http://fizal.me/pokeapi/api/59.json
//Magneton
//http://fizal.me/pokeapi/api/82.json
//Duskell
//http://fizal.me/pokeapi/api/355.json
//lapras
//"https://fizal.me/pokeapi/api/131.json"
//mewtwo
//"https://fizal.me/pokeapi/api/150.json"
//charmander
//"https://fizal.me/pokeapi/api/4.json"

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemonArray = [];
        this.trainer = [];
    }

    //gets the pokemon in the trainer 
    add(pokemon) {
        this.pokemonArray.push(pokemon)
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
let gym = new Trainer("poke_monster_gym")

// setTimeout(function () {
//     for (let r = 0, f = 1; r < gym.length; r + 2, f + 2) {
//         console.log(gym.pokemonArray[r]);
//         console.log(gym.pokemonArray[f]);
//         r.add(gym.pokemonArray[r]);
//         f.add(gym.pokemonArray[f]);
//     }
// }, 3000);
setTimeout(function () {


}, 3000);
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
            //console.log(result[i].data)
            monster = new Pokemon(result[i].data, getItem());




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
            // function getMoves() {
            //     makingMoves = result[i].data.moves;
            //     let move = [];
            //     let ctr = makingMoves.length;
            //     for (let i = 0; i < 4; i++) {
            //         let randMoves = Math.floor(Math.random() * ctr);
            //         axios.get(makingMoves[randMoves].move.url)
            //             .then(function (resBonus) {
            //                 let bong = resBonus.data;
            //                 //console.log(bong);
            //                 // console.log(
            //                 //     `Moves${i}: ${makingMoves[randMoves].move.name}
            //                 //  Accruacy: ${bong.accuracy}
            //                 //  Power: ${bong.power}
            //                 //  Priority: ${bong.priority}`);

            //                 move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
            //                                     Accuracy: ${bong.accuracy}\u00A0\u00A0
            //                                     Power: ${bong.power}\u00A0\u00A0
            //                                     Priority: ${bong.priority}`);

            //             }).catch(function (response) {
            //                 console.error(response);
            //             })
            //     }
            //     return move

            // }

            gym.add(monster);
            //doitLater(monster);

        }
        // for (let r =0,f=1;r<gym.length;r+2,f+2){
        //     console.log(gym.pokemonArray[r]);
        //     console.log(gym.pokemonArray[f]);
        //     r.add(gym.pokemonArray[r]);
        //     f.add(gym.pokemonArray[f]);
        // }

    }).catch((error) => {
        console.log(error)
    })


//}





//   axios.get("https://fizal.me/pokeapi/api/4.json")
//   .then((response) => {

//     let data = response.data

//    let charmander = new Pokemon(data);
//    hakuna_matata.add(charmander);
//    console.log(hakuna_matata.get("charmander"));

//    let first_pokemon = document.createElement("ol")
//    first_pokemon.innerHTML =[`Name:\xa0${charmander.name}\xa0`+
//    `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `` + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` +`
//    Attack Interger:\xa0${charmander.attack}`+
//    `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
//   Defense Integer:   ${charmander.defense}`+
//   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
//   Abilities: `+``+`
//    ${charmander.abilities}`+
//    `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
//   HP Integer:\xa0${charmander.Hp}`]

//    ol.appendChild(first_pokemon)``


// }).catch((error) => {
//   console.log(error)
// })








// function getThePokemans(trainername, response) {
//     axios.get(`http://fizal.me/pokeapi/api/${response}.json`)
//         .then(function (res) {
//             let bing = res.data;
//             // console.log(bing);

//             // I used return console log and pushed data to my to obj for testing. I used functions and some variables for data.
//             function getId() {
//                 console.log(`ID: ${bing.id}`);
//                 obj.id = bing.id;
//                 return bing.id;
//             }

//             function getName() {
//                 console.log(bing.name);
//                 obj.name = bing.name;
//                 return bing.name;
//             }

//             function getType() {
//                 console.log(`Type: ${bing.types[0].type.name}`);
//                 obj.type = bing.types[0].type.name;
//                 return bing.types[0].type.name;
//             }


//             function getItem() {
//                 let stuff = bing.held_items[0];
//                 if (stuff === undefined) {
//                     console.log(`Item: none`);
//                     obj.item = "None";
//                     return `None`;
//                 } else {
//                     console.log(`Item: ${bing.held_items[0].item.name}`);
//                     obj.item = `${bing.held_items[0].item.name}`;
//                     return `${bing.held_items[0].item.name}`;
//                 }
//             }


//             function getAbility() {
//                 abil = bing.abilities.length;
//                 let randAbil = Math.floor(Math.random() * abil);
//                 console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
//                 obj.ability = `${bing.abilities[randAbil].ability.name}`;
//                 return `${bing.abilities[randAbil].ability.name}`;
//             }


//             function getHeight() {
//                 console.log(`Height: ${bing.height}`);
//                 obj.height = bing.height;
//                 return bing.height;
//             }


//             function getWeight() {
//                 console.log(`Weight: ${bing.weight}`);
//                 obj.weight = bing.weight;
//                 return bing.weight;
//             }


//             function getStats() {
//                 for (let k = 0; k < bing.stats.length; k++) {
//                     console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);



//                 }


//             }
//                 obj.speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
//                 let speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
//                 obj.hp = `${bing.stats[5].base_stat}`;
//                 let hp = `${bing.stats[5].base_stat}`;
//                 obj.specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
//                 let specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
//                 obj.specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
//                 let specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
//                 obj.defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
//                 let defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
//                 obj.attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;
//                 let attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;

//             //four moves only. Call new axios for moves and accruacy, power and priority
//             function getMoves() {
//                 makingMoves = bing.moves;
//                 let move = [];
//                 let ctr = makingMoves.length;
//                 for (let i = 0; i < 4; i++) {
//                     let randMoves = Math.floor(Math.random() * ctr);
//                     axios.get(makingMoves[randMoves].move.url)
//                         .then(function (resBonus) {
//                             let bong = resBonus.data;
//                             //console.log(bong);
//                             console.log(
//                                 `Moves${i}: ${makingMoves[randMoves].move.name}
//                              Accruacy: ${bong.accuracy}
//                              Power: ${bong.power}
//                              Priority: ${bong.priority}`);

//                             move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
//                                                     Accuracy: ${bong.accuracy}\u00A0\u00A0
//                                                     Power: ${bong.power}\u00A0\u00A0
//                                                     Priority: ${bong.priority}`);

//                         }).catch(function (response) {
//                             console.error(response);
//                         })
//                 }
//                 return obj.moves = move;//for testing purpoese

//             }

//             function getImage() {
//                 console.log(`Image: ${bing.sprites.front_shiny}`);
//                 obj.image = `${bing.sprites.front_shiny}`
//                 return bing.sprites.front_shiny;
//             }

//             //below is constructor information
//             // id, name, type, item, ability,
//             // height, weight, speed, attack, hp, defense,
//             // specialAttack, specialDefense, moves,
//             // image) 


//             let nameofPOke = bing.name;

//             nameofPOke = new Pokeman(getId(),
//                 getName(), getType(), getItem(),
//                 getAbility(), getHeight(), getWeight(),
//                 bing.stats[0].base_stat, bing.stats[4].base_stat,
//                 bing.stats[5].base_stat, bing.stats[3].base_stat, bing.stats[2].base_stat,
//                 bing.stats[1].base_stat, getMoves(), bing.sprites.front_shiny);

//             let divcardSearch = document.getElementById("getSearchPoke");
//             let divInfo = document.createElement("div");
//             divInfo.setAttribute("class", "center");
//             divInfo.innerHTML = `
//             <h2 class="center teal">Trainer Name: ${trainername.trainername}</h2>
//             <h4 class="center teal">Height: ${trainername.height}\u00A0\u00A0\ Weight: ${trainername.weight}\u00A0\u00A0\ Gender: ${trainername.gender}\u00A0\u00A0\ 
//             HP: ${trainername.hp}\u00A0\u00A0\ Type: ${trainername.type}</h4>
//             <h3 class="header myListName">${getName()}</h3>
//             <div class="card horizontal">
//             <div class="card-image">
//                  <img class="pokeList" src="${bing.sprites.front_shiny}" alt="Arcanine" width="200">
//             </div>
//             <div class="card-stacked">
//                 <div class="card-content myListContent">
//                     <p>ID: ${getId()}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${getItem() }\u00A0\u00A0\u00A0\u00A0\  Type: ${getType()}</p>
//                     <p>Height: ${getHeight() }\u00A0\u00A0\u00A0\u00A0\ Weight: ${getWeight()}\u00A0\u00A0\u00A0\u00A0\ Ability: ${getAbility()}</p>
//                     <p>Attack: ${attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${defense  }\u00A0\u00A0\u00A0\u00A0\ HP:${hp} </p>
//                     <p>Special Attack: ${specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${specialDefense}\u00A0\u00A0\u00A0\u00A0\  ${speed}</p>

//             </div>

//             </div>
//             </div> `


//             divcardSearch.appendChild(divInfo);

//             console.log( trainername);//name does get passed and printed to console.


//             trainer = new Trainer(trainername.trainername,trainername.height,trainername.weight,trainername.gender,trainername.hp,trainername.type)
//             trainer.addPokemon(nameofPOke);


//         }).catch(function (response) {
//             console.error(response);
//         })

// }