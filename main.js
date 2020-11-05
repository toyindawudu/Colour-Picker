// Logic 

// 1. When user clicks on the "click me" button 
// 2. Add an event listeners that listens out for the click, and run an anonymous function
//    - Within the anonymous function, generate a random number that equates to a colour in the variable 'const colours'
//    - Change the background colour to match the random colour that matches from the previous step 
//    - Change the text content to match the colour in the UI

const colours = ["Green", "Red", "rgba(132,45,232)", "#ffffff"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener("click", function() {
  //get random number between 0 and 3 so we can get the values in the const called colours
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  // change the background colour of the body to the colour with the constant colours
  document.body.style.backgroundColor = colours[randomNumber];
  // Also change the text content in the HTML to match this
  colour.textContent = colours[randomNumber]
});

// Create a function that generates a random number between 0-3 
function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}

