// 1. Grab the DOM elemeent for when the user clicks on the button
// 2. Create an event listeners for the click and create an anon function that
// 3. generates a character, and pushes it into a new variable until we have 6 characters
// 4. Use the 6 characters for a colour and change the background colour
// 5. Also grab the 6 characters and change the text in the HTML 

const hex = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener("click", function() {
  // Store the result of the for loop in a new variable 
  let hexNumber = "#";
  // Create a for loop that randomly selects from const hex and push it into hexNumber until we have 6 characters
  for (let i = 0; i < 6; i++) {
    hexNumber = hexNumber + hex[getRandomNumber()];
  }

  // Sending the result from the for loop into the UI & into the code 
  colour.textContent = hexNumber; // goes into HTML UI
  document.body.style.backgroundColor = hexNumber; // changes the background colour

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}