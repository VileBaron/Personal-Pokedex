console.log('linked');

class Trainer {
  constructor() {
    this.pokemon = [];
 }
  addPoke(pokemon){
   this.pokemon.push(pokemon);
 }
  all(){
   return this.pokemon;
 }
 get(name){
   for (let i = 0; i < this.pokemon.length; i++) {
       console.log(this.pokemon[i]);
   }
 }
}



/* Pikachu
================================= */
class Pokemon {
  constructor(name, hp, attack, defense, abilities){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

let Joseph = new Trainer();


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      pikachu = new Pokemon (
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(pikachu);

      document.getElementById("pikachu-name").innerHTML = 'My name is ' + pikachu.name;
      document.getElementById("pikachu-hp").innerHTML = 'My health is at ' + pikachu.hp;
      document.getElementById("pikachu-attack").innerHTML = 'My attack is ' + pikachu.attack;
      document.getElementById("pikachu-defense").innerHTML = 'My defense is ' + pikachu.defense;
      document.getElementById("pikachu-ability").innerHTML = 'My ability is ' + pikachu.abilities;


    }
  }
  xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/25/", true);
  console.log(xhttp);
  xhttp.send();
}

function loadPokemon() {
  var xhttp = new XMLHttpRequest();
  console.log(xhttp); {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById('info').src = myObj.sprites.front_default;
      console.log(this.responseText);
    }yorvi
    };
    xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/25/", true);
    xhttp.send();
  }


  /* Eevee
  ================================= */




  function startDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        var eevee = new Pokemon (
          this.name = myObj.name,
          this.hp = myObj.stats[5].base_stat,
          this.attack = myObj.stats[4].base_stat,
          this.defense = myObj.stats[1].base_stat,
          this.ability = myObj.abilities[0]
        );
        console.log(eevee);

        document.getElementById("eevee-name").innerHTML = 'My name is ' + eevee.name;
        document.getElementById("eevee-hp").innerHTML = 'My health is at ' + eevee.hp;
        document.getElementById("eevee-attack").innerHTML = 'My attack is ' + eevee.attack;
        document.getElementById("eevee-defense").innerHTML = 'My defense is ' + eevee.defense;
        document.getElementById("eevee-ability").innerHTML = 'My avility is ' + eevee.ability;


      }
    }
    xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/133/", true);
    console.log(xhttp);
    xhttp.send();
  }

  function loadPokemon() {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp); {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById('info').src = myObj.sprites.front_default;
        console.log(this.responseText);
      }
      };
      xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/133/", true);
      xhttp.send();
    }

    /* Mewtwo
    ================================= */




    function openDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var myObj = JSON.parse(this.responseText);
          var mewtwo = new Pokemon (
            this.name = myObj.name,
            this.hp = myObj.stats[5].base_stat,
            this.attack = myObj.stats[4].base_stat,
            this.defense = myObj.stats[1].base_stat,
            this.ability = myObj.abilities[0]
          );
          console.log(mewtwo);

          document.getElementById("mewtwo-name").innerHTML = 'My name is ' + mewtwo.name;
          document.getElementById("mewtwo-hp").innerHTML = 'My health is at ' + mewtwo.hp;
          document.getElementById("mewtwo-attack").innerHTML = 'My attack is ' + mewtwo.attack;
          document.getElementById("mewtwo-defense").innerHTML = 'My defense is ' + mewtwo.defense;
          document.getElementById("mewtwo-ability").innerHTML = 'My avility is ' + mewtwo.ability;


        }
      }
      xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/150/", true);
      console.log(xhttp);
      xhttp.send();
    }

    function loadPokemon() {
      var xhttp = new XMLHttpRequest();
      console.log(xhttp); {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById('info').src = myObj.sprites.front_default;
          console.log(this.responseText);
        }
        };
        xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/133/", true);
        xhttp.send();
      }
