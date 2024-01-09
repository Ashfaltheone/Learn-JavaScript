/* Exercise: Splitting a Taxi Fare 
1. Ask the user for the total fare of the taxi ride using a prompt box. Store the entered value as in a variable. Use the parseFloat() function to parse the input string and store it as a floating point number.


2. Ask the user for the number of passengers in the taxi using another prompt box. Store the entered value in a variable. Use the parseInt() function to parse the input string and store it as an Integer. 


3. Ask the user if they would like to add a tip and if so, the percentage of the tip they want to give. Use the parseFloat() function to parse the input string and store the tip as a floating point number. You can use the confirm and prompt functions to check if the user wish add tip. 


4. Calculate the amount each passenger has to pay by dividing the total fare by the number of passengers. If a tip is added, calculate the total amount including the tip and divide it by the number of passengers. 


5. Round the amount each passenger has to pay to two decimal places using the toFixed() method. 


6. Display the amount each passenger has to pay using an alert box. 


7. Create a variable called passengerList that starts as an empty array. Experiment using pop, push, shift, unshift and splice, to add and remove items from the passengerList.


 Refer to w3schools for the required array methods: (a) JavaScript Array push() Method (w3schools.com) (b) JavaScript Array unshift() Method (w3schools.com) (c) How To Use the Spread Operator (...) in JavaScript (w3schools.com) (d) JavaScript Array pop() Method (w3schools.com) (e) JavaScript Array splice() Method (w3schools.com)
 */

// ask the user for their total fare
let totalFare = parseFloat(prompt("What is your total fare for the taxi ride?"))


let totalPass = parseInt(prompt("How many passengers are there?"))

let addTip = confirm("Would you like to tip?")
let tipPercent = 0

if (addTip){
    tipPercent = parseFloat(prompt("Tip Percentage: "))
    }
    
let totalAmount;
if (addTip){
    totalAmount = (((tipPercent + 100) / 100) * totalFare) / totalPass
}

else {
    totalAmount = totalFare / totalPass
}

let roundAmount = totalAmount.toFixed(2)

alert("Each passenger has to pay: $" + roundAmount)

let passengerList = []


passengerList.push("Pass 1")
passengerList.unshift("Pass 2")

let removePass1 = passengerList.pop()
let removePass2 = passengerList.shift()

passengerList.splice(1, 0, "Pass 3")
passengerList.splice(2, 1)

console.log(passengerList)









