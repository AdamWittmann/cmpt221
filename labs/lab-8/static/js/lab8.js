/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = [];
fruits = ["Strawberry", "Raspberry", "Apple"];

console.log(fruits)
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
fruits.push("Banana", "DragonFruit");

console.log(fruits)
/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
console.log(fruits.sort());
/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit() {
    let i = 0;
    let fruit = null;
    for (i = 0; i < fruits.length; i++) {
        fruit = fruits[i];
        console.log(fruit);
    }
}
printFruit();
/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method      */
// add code here
class fruit {
    constructor(name, color, season) {
        this.fruitName = name,
            this.fruitColor = color,
            this.fruitSeason = season
    }
    printFruit() {
        return this.fruitName + " " + this.fruitColor + " " + this.fruitSeason
    }
}
const mango = new fruit("Mango", "Orange/Yellow", "Summer");
const grape = new fruit("Grape", "Purple", "Spring");
const peach = new fruit("Peach", "Peach", "Spring");

console.log(mango.printFruit())
console.log(grape.printFruit())
console.log(peach.printFruit())
/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    let text = "Do you want to say hi?";
    if (confirm(text) == true) {
        text = "Weclome to Lab 8!";
    }
    else {
        text = "Rude.";
    }
    document.getElementById("welcome").innerHTML = text;
}

/* 2. Write a function to change 3 styles on the webpage                                                        */
function changeStyle() {
    document.getElementById("button2").innerHTML = "WHY??";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("welcome").innerHTML = ">:(";
}
