// JavaScript Exercise 1
// let n = parseInt(prompt("Enter a number: "));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//     console.log("The sum of numbers from 1 to " + n + " that are multiples of 3 or 5 is: " + sum);
// }



// JavaScript Exercise 2
// let numberOfBottles = 99;

// for (let i = 0; i < numberOfBottles; numberOfBottles--) {
//     if (numberOfBottles > 1)
//     {
//         console.log(`${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.`)
//         newNumberOfBottles = numberOfBottles -= 1;
//         console.log(`Take one down and pass it around, ${numberOfBottles - 1} bottles of beer on the wall.`);
//     }
//     else if (numberOfBottles == 1)
//     {
//         console.log(`${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} bottle of beer.`)
//         newNumberOfBottles = numberOfBottles -= 1;
//         console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
//     }
//     else if (numberOfBottles == 0)
//     {
//         console.log("No more bottles of beer on the wall, no more bottles of beer.");
//         console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
//     }
// }


// JavaScript Exercise 3
// function factorial(n)
// {
//     if (n === 0 || n === 1)
//     {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(9));



// JavaScript Exercise 4
// let pets = [
//     { name: "Bilbo", type: "dog" },
//     { name: "Lucy", type: "cat" },
//     { name: "Aragon", type: "fighterdog" },
//     { name: "Gimli", type: "fatdog" }
// ];

// function findPet(pets, petName) {
//     for (let i = 0; i < pets.length; i++) {
//         if (pets[i].name === petName) {
//             return pets[i].type;
//         }
//     }
//     return "Pet not found";
// }

// console.log(findPet(pets, "Aragon"));
// console.log(findPet(pets, "Legolas"));



// JavaScript Exercise 5
// function calculate(num1, num2, callback) {
//     const result = callback(num1, num2);
//     return result;
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multi(num1, num2) {
//     return num1 * num2;
// }

// function division(num1, num2) {
//     return num1 / num2;
// }

// const sum = calculate(15, 5, add);
// console.log(sum);

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, division));
// console.log(calculate(10, 5, multi));



// JavaScript Exercise 6
// class Car {
//     constructor(marke, model, year) {
//         this.marke = marke;
//         this.model = model;
//         this.year = year;
//     }
//     getCarInfo() {
//         return `Car Info: \n Märke: ${this.marke} \n Model: ${this.model} \n År: ${this.year} `;
//     }
// }

// const myCar = new Car("Volvo", "XC60", 2016);
// const carInfo = myCar.getCarInfo();
// console.log(carInfo);



// JavaScript Exercise 7
const knapp = document.getElementById("minKnapp");
const paragraf = document.getElementById("minParagraf");
let ClickCounter = 0;

knapp.addEventListener("click", () => {
    ClickCounter++;
    paragraf.innerHTML = `Kapp tryckt <span class="counter">${ClickCounter} </span> gånger `;
});

const reset = document.getElementById("resetKnapp");
reset.addEventListener("click", () => {
    ClickCounter = 0;
    paragraf.textContent = `Räknare är nollad`;
});



// JavaScript Exercise 8
document.addEventListener("DOMContentLoaded", () => {
    const redButton = document.getElementById("red");
    const greenButton = document.getElementById("green");
    const blueButton = document.getElementById("blue");
    const colorInfo = document.getElementById("color-info");

    redButton.addEventListener("click", () => {
        colorInfo.textContent = "Du klickade på röd färg";
        colorInfo.style.color = "red";
    });

    greenButton.addEventListener("click", () => {
        colorInfo.textContent = "Du klickade på grön färg";
        colorInfo.style.color = "green";
    });

    blueButton.addEventListener("click", () => {
        colorInfo.textContent = "Du klickade på blå färg";
        colorInfo.style.color = "blue";
    })
})

