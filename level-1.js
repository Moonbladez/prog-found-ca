//Question1.Declare and initialise a variable with a string value.
const string = "mystring";

//Question 2. Create an object variable called person and give it two properties (a key and a value) of your choice.
const person = {
    name: "Jim",
    age: 25,
};

//Question 3. Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock.If it is true, console log "Out of stock".Otherwise log "In stock".
let outOfStock = false;
if ((outOfStock = true)) {
    console.log("out of stock");
}

//Question 4.Create an array of five numbers. Loop through the array and console log each value.
const numbers = [0, 1, 2, 3, 4];
numbers.forEach(i => {
    console.log(numbers[i]);
});

//Question 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop

for (let i = 15; i <= 25; i++) {
    console.log(i);
}

//Question 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
for (let i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(`the magic number is ${i}`)
    }
}




//Question 7. Create an array of two objects. Each object must have the same three properties (with different values): one property with a string value, one property with a number value, one property with a boolean value. Loop through the array and console log the number value and the boolean value.
const musicians = [{
        name: "Freddie Mercury",
        age: 45,
        alive: false,
    },
    {
        name: "Bob Dylan",
        age: 78,
        alive: true,
    },
];

const iterate = item => {
    console.log(item.age);
    console.log(item.alive);
};

musicians.forEach(iterate);

//Question 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument. Inside the function, log the string "I don't like " together with the argument. Call the function and pass in a value of your choice.
const whatIDontLike = thingIHate => {
    console.log(`I don't like ${thingIHate}`);
};

whatIDontLike("animal crueltly");

//question 9. Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.
const subtract = (a, b) => {
    console.log(`${a} minus ${b} equals ${a - b}`);
};

subtract(20, 10);

//question 10. Create an empty array.Create a function that accepts one argument.Inside the function, add the argument to the array.Call the function and pass in a value of any type.
const shoppingList = [];
const addShopping = item => {
    shoppingList.push(item);
};

addShopping("chocolate");