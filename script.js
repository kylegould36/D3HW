let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector("h1").innerHTML = "Welcome to my family";

  // Part 2
  document.body.style.backgroundColor = "purple";

  // Part 3
  let last = document.getElementById("favorite-things");
  last.removeChild(last.lastElementChild);

  // Part 4
  var changeFont = document.querySelectorAll(".special-title");
  for(var i = 0; i < changeFont.length; i++) {
    changeFont[i].style.fontSize = "2rem";
  }

  // Part 5
  const list = document.getElementById("past-races");
  if(list.hasChildNodes()) {
    list.removeChild(list.children[3]);
  }

  // Part 6
  const addRace = document.createElement("li");
  const raceNode = document.createTextNode("Flavortown");
  addRace.appendChild(raceNode);
  document.getElementById("past-races").appendChild(addRace);

  // Part 7

  // Part 8


  // Part 9




});
