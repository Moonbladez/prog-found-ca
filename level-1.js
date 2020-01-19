//Question 1
const str = "mystring";

//Question 2
const person = {
    name: "Jim",
    age: 25,
};

//Question 3
let outOfStock = true;
if (outOfStock === true) {
    console.log("out of stock")
} else {
    console.log("in stock")
}
//Question 4.
const numbers = [0, 1, 2, 3, 4];
numbers.forEach(i => {
    console.log(numbers[i]);
});

//Question 5
for (let i = 15; i <= 25; i++) {
    console.log(i);
}

//Question 6
for (let i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(`the magic number is ${i}`)
    }
}

//Question 7
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

//Question 8. 
const whatIDontLike = thingIHate => {
    console.log(`I don't like ${thingIHate}`);
};

whatIDontLike("animal crueltly");

//question 9.
const subtract = (a, b) => {
    console.log(`${a} minus ${b} equals ${a - b}`);
};

subtract(20, 10);

//question 10. 
const shoppingList = [];
const addShopping = item => {
    shoppingList.push(item);
    console.log(shoppingList)
};

addShopping("chocolate");