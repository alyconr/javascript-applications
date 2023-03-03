function audioSound(e) {
 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]
  `); // Select audio element with data-key attribute that matches the key code of the key that was pressed
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // If no audio element is found, exit the function
  audio.currentTime = 0; //rewind to the start
  audio.play(); // Play the audio element
  key.classList.add("playing"); // Add the playing class to the key element
}

const keys = document.querySelectorAll(".key"); // Select all elements with the key class
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // Listen for transitionend event on each key element and pass event object to callback function removeTransition(e) { // Log the property name of the transition that ended }

function removeTransition(e) {
  if (e.propertyName == "transform") return; // if it's a transform, skip it
  this.classList.remove("playing"); // Remove the playing class from the key element
}

window.addEventListener("keydown", audioSound); // Listen for keydown event on window object and pass event object to callback function audioSound(e) { // Log the key code of the key that was pressed }
