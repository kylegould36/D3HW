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
  var blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-post purple");
  var blogPostH2 = document.createElement("h1");
  blogPostH2.textContent = "Flavortown";
  blogPost.appendChild(blogPostH2);

  var blogPostP = document.createElement("p");
  blogPostP.textContent = "I ROLLED OUT WITH GUY FIERI LOOKING FOR AMERICA'S GREATEST DINERS, DRIVE INS, AND DIVES!";
  blogPost.appendChild(blogPostP)

  document.querySelector(".main").appendChild(blogPost);

  // Part 8
  var quoteTitle = document.getElementById("quote-title");
  quoteTitle.addEventListener("click", randomQuote, false);

  // Part 9
  var blogposts = document.querySelectorAll(".blog-post");
  var blogArr = [];

  for(var i = 0; i < blogposts.length; i++) {
    blogArr.push(blogposts[i]);
  }

  blogArr.forEach(function (post) {
    post.addEventListener("mouseout", function (e) {
      post.setAttribute("class", "blog-post purple");
    }, false);

    post.addEventListener("mouseenter", function (e) {
      post.setAttribute("class", "blog-post red");
    }, false);

    var blogChildren = [];
    for(var i = 0; i < post.children.length; i++) {
      blogChildren.push(post.children[i]);
    }

    blogChildren.forEach(function (child) {
      child.style.pointerEvents = "none";
    });
  })
});
