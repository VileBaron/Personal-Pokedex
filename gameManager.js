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
allPokemon = [] 

let Joseph = new Trainer();


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




function pikachuDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      pikachu = new Pokemon (
        myObj.name,
        myObj.stats[5].base_stat,
        myObj.stats[4].base_stat,
        myObj.stats[1].base_stat,
        myObj.abilities[0].ability.name,
      );
      allPokemon.push(pikachu)
      console.log(pikachu);

      document.getElementById("pikachu-name").innerHTML = 'My name is ' + pikachu.name;
      document.getElementById("pikachu-hp").innerHTML = 'My health is at ' + pikachu.hp;
      document.getElementById("pikachu-attack").innerHTML = 'My attack is ' + pikachu.attack;
      document.getElementById("pikachu-defense").innerHTML = 'My defense is ' + pikachu.defense;
      document.getElementById("pikachu-ability").innerHTML = 'My ability is ' + pikachu.abilities;


    }
  }
  xhttp.open("GET","25", true);
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
    xhttp.open("GET","25", true);
    xhttp.send();
  }


  /* Eevee
  ================================= */




  function eeveeDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        var eevee = new Pokemon (
          myObj.name,
          myObj.stats[5].base_stat,
          myObj.stats[4].base_stat,
          myObj.stats[1].base_stat,
          myObj.abilities[0].ability.name,
        );
        allPokemon.push(eevee)
        console.log(eevee);

        document.getElementById("eevee-name").innerHTML = 'My name is ' + eevee.name;
        document.getElementById("eevee-hp").innerHTML = 'My health is at ' + eevee.hp;
        document.getElementById("eevee-attack").innerHTML = 'My attack is ' + eevee.attack;
        document.getElementById("eevee-defense").innerHTML = 'My defense is ' + eevee.defense;
        document.getElementById("eevee-ability").innerHTML = 'My ability is ' + eevee.abilities;


      }
    }
    xhttp.open("GET","133", true);
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
      xhttp.open("GET","133", true);
      xhttp.send();
    }

    /* Mewtwo
    ================================= */




    function mewDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var myObj = JSON.parse(this.responseText);
          var mewtwo = new Pokemon (
            myObj.name,
            myObj.stats[5].base_stat,
            myObj.stats[4].base_stat,
            myObj.stats[1].base_stat,
            myObj.abilities[0].ability.name,
          );
          allPokemon.push(mewtwo)
          console.log(mewtwo);

          document.getElementById("mewtwo-name").innerHTML = 'My name is ' + mewtwo.name;
          document.getElementById("mewtwo-hp").innerHTML = 'My health is at ' + mewtwo.hp;
          document.getElementById("mewtwo-attack").innerHTML = 'My attack is ' + mewtwo.attack;
          document.getElementById("mewtwo-defense").innerHTML = 'My defense is ' + mewtwo.defense;
          document.getElementById("mewtwo-ability").innerHTML = 'My ability is ' + mewtwo.abilities;


        }
      }
      xhttp.open("GET","150", true);
      console.log(xhttp);
      xhttp.send();
    }

    function mewPokemon() {
      var xhttp = new XMLHttpRequest();
      console.log(xhttp); {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById('info').src = myObj.sprites.front_default;
          console.log(this.responseText);
        }
        };
        xhttp.open("GET","150", true);
        xhttp.send();
      }

      /* Charmander
      ================================= */




      function charmDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            var charmander = new Pokemon (
              myObj.name,
              myObj.stats[5].base_stat,
              myObj.stats[4].base_stat,
              myObj.stats[1].base_stat,
              myObj.abilities[0].ability.name,
            );
            allPokemon.push(charmander)
            console.log(charmander);

            document.getElementById("charmander-name").innerHTML = 'My name is ' + charmander.name;
            document.getElementById("charmander-hp").innerHTML = 'My health is at ' + charmander.hp;
            document.getElementById("charmander-attack").innerHTML = 'My attack is ' + charmander.attack;
            document.getElementById("charmander-defense").innerHTML = 'My defense is ' + charmander.defense;
            document.getElementById("charmander-ability").innerHTML = 'My ability is ' + charmander.abilities;


          }
        }
        xhttp.open("GET","4", true);
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
          xhttp.open("GET","4", true);
          xhttp.send();
        }