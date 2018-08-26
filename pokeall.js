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

class RTrainer {
    constructor(name) {
        this.name = name;
        this.pokemonArray = [];
        this.trainer = []; //our gym
        this.enemy = []; //enemy via search
    }


    add(pokemon) { //adds pokemon to array
        this.pokemonArray.push(pokemon)
    }
    addEnemy(uglyMonster) { //adds enemy to array
        this.enemy.push(uglyMonster);
    }
    addTR(trainer) { //adds pokemon and trainer to the gym
        this.trainer.push(trainer);
    }
    getIndividual(id) {
        for (let i = 0; i < this.pokemonArray.length; i++) {
            if (this.pokemonArray[i].id === id) {
                console.log(this.pokemonArray[i])
            
            }else{console.log("Not trained yet!");}
        }
        

    }
   
    getEnemyPokemonList(){
        let div = document.getElementById("myList2");
        let divCardEnemy = document.createElement("div");
        divCardEnemy.setAttribute("id", "attriblist2");
        this.enemy.forEach(element => { //use element.whatever to get data
       

            divCardEnemy.innerHTML = `
                <h2 class="center teal">Enemy Pokemon List</h2>
                <h3 class="header myListName">${element.name}</h3>
                <div class="card horizontal">
                <div class="card-image">
                <img class="pokeList" src="${element.image}" alt="Arcanine" width="200">
                </div>
                 <div class="card-stacked">
                <div class="card-content myListContent">
                 <p>ID: ${element.id}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${element.item }\u00A0\u00A0\u00A0\u00A0\  Type: ${element.type}</p>
                 <p>Height: ${element.height  }\u00A0\u00A0\u00A0\u00A0\ Weight: ${element.weight}\u00A0\u00A0\u00A0\u00A0\ Ability: ${element.ability}</p>
                 <p>Attack: ${element.attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${element.defense}\u00A0\u00A0\u00A0\u00A0\ Speed: ${element.speed} </p>
                 <p>Special Attack: ${element.specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${element.specialDefense}</p>
                 <h3>Making Moves with Accuracy, Power and Priority</h3>
                 
                 <p>${this.enemy[0].getMoves[0]}</p>
                 <p>${this.enemy[0].getMoves[1]}</p>
                 <p>${this.enemy[0].getMoves[2]}</p>
                 <p>${this.enemy[0].getMoves[3]}</p>
                </div>
             
                </div>
                </div>
                `

            div.appendChild(divCardEnemy);
        });
    }
    //example of putting all the data on the screen////
    getAllPokemon() {
        let div = document.getElementById("myList1");
        let divCard = document.createElement("div");
        divCard.setAttribute("id", "attriblist");
        this.pokemonArray.forEach(element => { //use element.whatever to get data
            

            divCard.innerHTML = `
         <h2 class="center teal">${this.name}</h2>
         <h3 class="header myListName">${element.name}</h3>
         <div class="card horizontal">
         <div class="card-image">
              <img class="pokeList" src="${element.image}" alt="Arcanine" width="200">
         </div>
         <div class="card-stacked">
             <div class="card-content myListContent">
                 <p>ID: ${element.id}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${element.item }\u00A0\u00A0\u00A0\u00A0\  Type: ${element.type}</p>
                 <p>Height: ${element.height  }\u00A0\u00A0\u00A0\u00A0\ Weight: ${element.weight}\u00A0\u00A0\u00A0\u00A0\ Ability: ${element.ability}</p>
                 <p>Attack: ${element.attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${element.defense}\u00A0\u00A0\u00A0\u00A0\ Speed: ${element.speed} </p>
                 <p>Special Attack: ${element.specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${element.specialDefense}</p>
                 <h3>Making Moves with Accuracy, Power and Priority</h3>
                 
                 <p>${this.pokemonArray[0].getMoves[0]}</p>
                 <p>${this.pokemonArray[0].getMoves[1]}</p>
                 <p>${this.pokemonArray[0].getMoves[2]}</p>
                 <p>${this.pokemonArray[0].getMoves[3]}</p>
         </div>
             
         </div>
         </div>
         `

            div.appendChild(divCard);
        });

    }
}

//   let hakuna_matata = new Trainer("Hakuna_Matata");
//   let Richardo_AI = new Trainer("Richardo_AI");
//let f = new Trainer("Hakuna_Matata");
let r = new RTrainer("Richardo_AI");
let e = new RTrainer("Time_for_a_beat_down");
// let gym = new RTrainer("poke_monster_gym");

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

            monster = new Pokemon(result[i].data, getItem(), getMoves());




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
                            //console.log(
                            // `Moves${i}: ${makingMoves[randMoves].move.name}
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
            monster = new Pokemon(result.data, getItem(), getMoves());


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

// document.getElementById("myBtn").addEventListener("click", displayPokeList);

// function displayPokeList() {
//     r.getAllPokemon();
//     f.getAllPokemon();
//     //r.pokemonArray[0];
// }
/////////////////////////////////////////////////////////////////////////////////
let count = 0;
document.getElementById("myBtn1").addEventListener("click", displayAddEnemyPokemon)
function displayAddEnemyPokemon() {
    
    let id = gettheNumber();
    if (count  < 6){
        getThePokemans(id)//the search adds the monster to the enemy's array 
        count ++;
    }else{alert( "That is enough, 6 enemy pokemon is enough!")}
       
}

document.getElementById("myBtn2").addEventListener("click", displayAllEnemyPokemon)
function displayAllEnemyPokemon() { 
    
    e.enemy.forEach(function(element) {
        console.log(element);
      });
    e.getEnemyPokemonList()
       let div = document.getElementById("myList3");
         let divCard = document.createElement("div");
         divCard.setAttribute("id", "attriblist");
         e.enemy.forEach(element => { //use element.whatever to get data
            

             divCard.innerHTML = `
          <h2 class="center teal">Enemy Pokemon List</h2>
          <h3 class="header myListName">${element.name}</h3>
          <div class="card horizontal">
          <div class="card-image">
               <img class="pokeList" src="${element.image}" alt="Arcanine" width="200">
          </div>
          <div class="card-stacked">
              <div class="card-content myListContent">
                  <p>ID: ${element.id}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${element.item }\u00A0\u00A0\u00A0\u00A0\  Type: ${element.type}</p>
                  <p>Height: ${element.height  }\u00A0\u00A0\u00A0\u00A0\ Weight: ${element.weight}\u00A0\u00A0\u00A0\u00A0\ Ability: ${element.ability}</p>
                  <p>Attack: ${element.attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${element.defense}\u00A0\u00A0\u00A0\u00A0\ Speed: ${element.speed} </p>
                  <p>Special Attack: ${element.specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${element.specialDefense}</p>
                  <h3>Making Moves with Accuracy, Power and Priority</h3>
                 
                  <p>${e.enemy[0].getMoves[0]}</p>
                  <p>${e.enemy[0].getMoves[1]}</p>
                  <p>${e.enemy[0].getMoves[2]}</p>
                  <p>${e.enemy[0].getMoves[3]}</p>
          </div>
             
          </div>
          </div>
          `

             div.appendChild(divCard);
         });  
}
function gettheNumber(){
    let getNum= document.getElementById("inputNumber").value;
    let num = parseInt(getNum);
    return num;
}

/////////////////////////////////////////////////////////////////////////////////