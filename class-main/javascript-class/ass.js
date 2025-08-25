//Driving
var drivingAge = 35;
if (drivingAge > 18) {
  document.write("<b>Qualifies for driving</b><br>");
} else {
  document.write("Does not qualify for driving<br>");
}

//1
// var number = 5;
// if (number > 0) {
//     document.write("The number is positive<br>");
// }

//2
// var voterAge = 16;
// if (voterAge >= 18) {
//     document.write("You can vote<br>");
// } else {
//     document.write("You cannot vote<br>");
// }

//3
// var personAge = 20;
// let personAge = prompt("how old are you? ")
// if (personAge >= 0 && personAge <= 2) {
//     document.write("You are a baby<br>");
// } else if (personAge >= 3 && personAge <= 5) {
//     document.write("You are a toddler<br>");
// } else if (personAge >= 13 && personAge <= 19) {
//     document.write("You are a teenager<br>");
// } else if (personAge >= 20 && personAge <= 35) {
//     document.write("You are a youth<br>");
// } else {
//     document.write("You are an adult<br>");
// }

//4
// let i = 1;
// while (i <= 50) {
//     document.write(i + "<br>");
//     i++;
// }

// for (let j = 21; j >= 12; j--) {
//     document.write("3 x " + j + " = " + (3 * j) + "<br>");
// }

// var a = 45 + 5;
// document.write(a + "<br>");
// var b = "45" + 5
// document.write(b + "<br>");

// var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 20)
// {
//   if (x == 5){
//      break;
//   }
//   x = x + 1;
//   document.write( x + "<br />");
// }

// var x = 0;
// while (x < 10)
// {
//   x = x + 1;
//   if (x == 5){
//      break;
//   }
//   document.write( x + "<br />");
// }

// This is the label name
outerloop: for (var i = 0; i < 5; i++) {
  document.write("Outerloop: " + i + "<br />");
  innerloop: for (var j = 0; j < 5; j++) {
    if (j > 3) break; // Quit the innermost loop
    if (i == 2) break innerloop; // Do the same thing
    if (i == 4) break outerloop; // Quit the outer loop
    document.write("Innerloop: " + j + "  <br />");
  }
}
