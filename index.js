// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


// let error = document.getElementById("error")
// let btn = document.getElementById("btn")


// btn.addEventListener("click", function(){
    
//     error.textContent = "Something went wrong, please try again";
//     error.style.color="#666666"
//     error.style.backgroundColor="#f1f1f1"
// })


// let number1 = 5
// let number2 = 7

// let num1 = document.getElementById("num1-el") 
// let num2 = document.getElementById("num2-el")
// let sumEl = document.getElementById("sum-el")

// num1.textContent = number1
// num2.textContent = number2
// // Create four functions: add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // Perform the given calculation using num1 and num2
// // Render the result of the calculation in the paragraph with id="sum-el"

// // E.g. if the user clicks on the "Plus" button, you should render
// // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// function add(){
    
//     let result = number1 + number2
//     sumEl.textContent = "Sun: " + result
// }
// function subtract(){
//     let result = number1 - number2
//     sumEl.textContent = "Sun: " + result
// }
// function divide(){
//     let result = number1 / number2
//     sumEl.textContent = "Sun: " + result
// }
// function multiply(){
//     let result = number1 * number2
//     sumEl.textContent = "Sun: " + result
// }


// let firstCard  = 11
// let secondCard = 11

// let Sum = firstCard + secondCard
// console.log(Sum); 


// if(Sum < 21){
//   console.log("Do you want to draw a new card? 🙂");
// }else if(Sum === 21){
//   console.log("Wohoo! You've got Blackjack! 🥳");
// }else if(Sum > 21){
//     console.log("You're out of the game! 😭");
//   }

//heck if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases


// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
  let Content = document.getElementById("content")
  let age = 22

  if(age < 21){
   console.log("You can not enter the club!");
   Content.textContent =  "You can not enter the club!"
  }else{
    console.log("Welcome!");
    Content.textContent = "Welcome!"
  }