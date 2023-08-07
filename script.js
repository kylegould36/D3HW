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
  
  //Change title
  document.querySelector("h1").innerHTML = "Welcome to my family";

  // Part 2

  //Change background color
  document.body.style.backgroundColor = "purple";

  // Part 3

  //Get last li item in ul and delete it
  let last = document.getElementById("favorite-things");
  last.removeChild(last.lastElementChild);

  // Part 4

  //Select special titles
  var changeFont = document.querySelectorAll(".special-title");
  //Loop through each title
  for(var i = 0; i < changeFont.length; i++) {
    //Change the font size
    changeFont[i].style.fontSize = "2rem";
  }

  // Part 5

  //Select past races
  const list = document.getElementById("past-races");
  if(list.hasChildNodes()) {
    //Remove Chicago at index 3
    list.removeChild(list.children[3]);
  }

  // Part 6

  //Create list element
  const addRace = document.createElement("li");
  //Add new li to ul
  const raceNode = document.createTextNode("Flavortown");
  //Append past races
  addRace.appendChild(raceNode);
  document.getElementById("past-races").appendChild(addRace);

  // Part 7

  //Creat blog post div
  var blogPost = document.createElement("div");
  //Add classes
  blogPost.setAttribute("class", "blog-post purple");
  //Create h2 for blog post
  var blogPostH2 = document.createElement("h1");
  //Add text to blog post
  blogPostH2.textContent = "Flavortown";
  //Add everything to blog post
  blogPost.appendChild(blogPostH2);

  //Create p for blog post
  var blogPostP = document.createElement("p");
  //Add text to blog post
  blogPostP.textContent = "I ROLLED OUT WITH GUY FIERI LOOKING FOR AMERICA'S GREATEST DINERS, DRIVE INS, AND DIVES!";
  //Add to blog post
  blogPost.appendChild(blogPostP)

  //Add blog post to main div
  document.querySelector(".main").appendChild(blogPost);

  // Part 8

  //Get the quote title
  var quoteTitle = document.getElementById("quote-title");
  //Add event listner
  quoteTitle.addEventListener("click", randomQuote, false);

  // Part 9

  //Get all blog posts
  var blogposts = document.querySelectorAll(".blog-post");
  //Put blog posts in an array
  var blogArr = [];

  //Loop through each
  for(var i = 0; i < blogposts.length; i++) {
    //Add to array
    blogArr.push(blogposts[i]);
  }

  //Loop through each blog post in array
  blogArr.forEach(function (post) {
    post.addEventListener("mouseout", function (e) {
      //Change class to include purple
      post.setAttribute("class", "blog-post purple");
    }, false);

    //Add mouseenter event handler
    post.addEventListener("mouseenter", function (e) {
      //Change class to include red
      post.setAttribute("class", "blog-post red");
    }, false);

    //Create array for blog post children
    var blogChildren = [];
    //Add each child to array
    for(var i = 0; i < post.children.length; i++) {
      blogChildren.push(post.children[i]);
    }

    //forEach each child
    blogChildren.forEach(function (child) {
      //Set pointer events to none
      child.style.pointerEvents = "none";
    });
  })
});
