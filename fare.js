/* 
Exercise: Ticket Price Calculation System (Using prompt and alert built-in functions) In this exercise, you will create a program that calculates the ticket price based on the age of the person. 

Remember to use console.log to check that the functionality and accuracy of your program while writing the program. 

Instructions: 1. Ask the user to enter their age. 

2. Based on the age, determine the ticket price according to the following rules: a. Children (age 0-5) get free admission. b. Students (age 6-18) get a discounted price of $5. c. Adults (age 19-64) pay the regular price of $10. d. Seniors (age 65 and above) get a discounted price of $7.

3. Display the ticket price to the user. HINT: • Use of Conditional Statements. (https://www.w3schools.com/js/js_if_else.asp)
*/


// Asking user for their age.
let age = parseInt(prompt("What is your age?"))

// Created a variable for the ticket price.
let ticketPrice;

// Using if else statements to categorise each age group for each of their ticket prices.
if(age >= 0 && age <= 5){
    ticketPrice = 0
}

else if(age >= 6 && age <= 18){
    ticketPrice = 5
}

else if(age >= 19 && age <= 64){
    ticketPrice = 10
}

else if(age >= 65){
   ticketPrice = 7
}

// Using alert function to display ticket price corresponding to their age that was given.
alert("You have to pay: $" + ticketPrice)









































