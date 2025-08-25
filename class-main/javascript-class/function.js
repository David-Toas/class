function button() {
  let ask = prompt("Do you want to enter your name? (yes/no) ");
  if (ask.toLowerCase() === "yes") {
    username = prompt("Hi there! what is your name? ");
    console.log(username)
    document.write("Hi" + " " + username + " " + " welcome to my page!");
  } else {
    alert("Ok, no problem. bye!");
  }
}


// function intro(firstname, age, city) {
//   document.write("My name is " + firstname + ", I am " + age + "years old, and i live in " + city + ".") 
// }


// function sayHello() 
// { 
//    alert("Hello there"); 
// }
// sayHello();