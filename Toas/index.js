// This is a simple counter application
// It increments a count each time a button is clicked

// tasks
// initializing the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  console.log(count);
  countEl.textContent = count;
  console.log(countEl.textContent);
}

// 1. create a function, save() which logs out the count when called
function save() {
  console.log(count);
}





// let welcomeEl = document.getElementById("welcome_el");
// let visitor = "toas";
// let greeting = "Welcome back, ";


// function welcomeUser() {
//   welcomeEl.textContent = greeting + visitor;
// }
// welcomeUser();
// welcomeEl.textContent += " 👋";

let SaveEl = document.getElementById("save-el");

function save() {
  let count_str =count + " - ";
  SaveEl.textContent += count_str;
  
  // reset the count to 0
  count = 0;
  countEl.textContent = count;
}
let count_str = count + " - ";





// string
// let username = "toas"
// // console.log(username)

// let message = "You have three new notifications";
// // string concatenation
// // console.log(message + ", " + username + "!");

// // let messageToUser = message + ", " + username + "!";
// // console.log(messageToUser);

// let name = "toas";
// let greetings = "Hi, my name is "

// let myGreeting = greetings + name + "!";
// console.log(myGreeting)



// console.log(4 + 5)
// console.log ("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")


// let firstname = "toas";
// let lastname = "thegreat";

// let fullname = firstname + " " + lastname;
// console.log(fullname);


// let username = "linda";
// let greeting = "Hi there";

// function greetLinda() {
//   console.log(greeting + ", " + username + "!");
// }
// greetLinda();  


// let myPoint = 3
// function add3Points(){
//   myPoint += 3;
// }
// add3Points();
// function remove1Point() {
//   myPoint -= 1;
// }


// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoint); 


// console.log("2" + 2); //
// console.log(11 + 7); //
// console.log(6 + "5"); //
// console.log("My points: " + 2 + 9); //
// console.log(2 + 2); //
// console.log("11" + "14"); //


// when the user clicks the purchase button, render out

// "Something went wrong, please try again" in the paragraph with id="error"

let Error = document.getElementById("error");

function purchase() {
  Error.textContent = "Something went wrong, please try again";
  console.log(Error.textContent);
}