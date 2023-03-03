const secondHand = document.querySelector('.second-hand'); // select the second hand element and store it in a variable called secondHand
const minHand = document.querySelector('.min-hand'); // select the minute hand element and store it in a variable called min-hand
const hourHand = document.querySelector('.hour-hand'); // select the hour hand element and store it in a variable called hour-hand

function setDate() {

    
    const now = new Date(); // Date object constructor method to get the current date and time in the browser
    const seconds = now.getSeconds(); // getSeconds() method to get the seconds from the Date object constructor method  and store it in a variable called seconds 
    const secondsDegrees = ((seconds / 60) * 360) + 90; // convert the seconds to degrees by dividing it by 60 and multiplying it by 360 and store it in a variable called secondsDegrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // set the transform property of the secondHand variable to rotate the second hand by the secondsDegrees variable
   

    const mins = now.getMinutes(); // getMinutes() method to get the minutes from the Date object constructor method  and store it in a variable called mins
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6)  + 90; // convert the minutes to degrees by dividing it by 60 and multiplying it by 360 and store it in a variable called minsDegrees
    minHand.style.transform = `rotate(${minsDegrees}deg)`; // set the transform property of the minHand variable to rotate the minute hand by the minsDegrees variable

    const hours = now.getHours(); // getHours() method to get the hours from the Date object constructor method  and store it in a variable called hours
    const hoursDegrees = ((hours / 12) * 360) + 90; // convert the hours to degrees by dividing it by 12 and multiplying it by 360 and store it in a variable called hoursDegrees
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // set the transform property of the hourHand variable to rotate the hour hand by the hoursDegrees variable
   



}

setInterval(setDate, 1000);
