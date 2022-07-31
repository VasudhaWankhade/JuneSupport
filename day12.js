// for loop
// when number of iterations are known  ==> limited chances
// iterations ==> number of times loop is executed

// coin toss ==> 5 times
// user is getting chance to toss the coin 5 times

// let tossCoin = prompt("Is it head or tail?")
// for (let i = 1; i <= 10; i++) {
//     if (tossCoin == "Head") {
//         console.log("You got Head! ")
//     } else {
//         console.log("You got Tail! ")
//     }
//     tossCoin = prompt("Is it head or tail?")
// }


// while ==> when number of iterations are not known
// User should get chance till he get required output ==> Head

// let tossCoin = prompt("Is it head or tail?")

// while (tossCoin == "Tail") {
//     console.log('Oh! You got Tail! ')
//     tossCoin = prompt("Is it head or tail?")
// }

// if else ==> single input two output ==> one chance ==> one iteration

let tell = true
if (tell) {
    console.log("She is telling truth")
} else {
    console.log("She is lying")
}

// if else if ==> single input multiple output

let city = "Pune"

if (city == "Pune") {
    console.log("Maharashtra")
} else if (city == "Patna") {
    console.log("Bihar")
} else if (city == "Panji") {
    console.log("Panji")
} else if (city == "Lucknow") {
    console.log("UP")
}

// switch case ==> single input multiple output

let letter = "a"

switch (letter) {
    case 'a':
        console.log("A")
        break
    case 'b':
        console.log("B")
        break
    case 'c':
        console.log("C")
        break
}

// do while

let randomNumber = Math.floor(Math.random() * 6) + 1 // 4
console.log(randomNumber)
let userInput
    // do {

//     userInput = prompt('Please Enter any number between 1 to 6') // 4
//     if (randomNumber == userInput) {
//         console.log('your guess is correct')
//         break
//     } else {
//         console.log('your guess is incorrect please try again')
//     }


// } while (userInput != randomNumber)



// Math ==> 

let floor = Math.floor(21.7)
console.log(floor)

let ceil = Math.ceil(12.1)
console.log(ceil)

let round = Math.round(12.467)
console.log(round)

// Math.random() ==> 0 to 0.999
let random = Math.random() * 6 // ==> 0 to 5.99999
console.log(random)