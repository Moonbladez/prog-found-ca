//Question 1 
for (let i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is an even number`)
    }
}

//Question 2
const innerFunction = () => {
    console.log("I am a function")
}

const outerFunction = (param) => {
    param()
}

outerFunction(innerFunction)