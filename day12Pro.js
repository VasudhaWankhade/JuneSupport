// actual difference between for loop and while loop


//Math

// console.log(Math.floor(12.3)) // 12
// console.log(Math.ceil(22.4)) // 23
// console.log(Math.round(22.4)) // 22
// console.log(Math.round(22.5))//23
// console.log(Math.random()) // 0 - 1 e.g 0.33 , 0.44
// console.log(Math.random()*6) // 0 - 5.99 e.g 5.12 ,4.33
// console.log(Math.floor(Math.random() * 6)) // 0 ,1 ,2 ,3,4,5
//console.log(Math.floor(Math.random() * 6)+1)

// guess one time 
// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6')
// if (randomNumber == userInput) {
//     console.log('your guess is correct')
// } else {
//     console.log('your guess is incorrect')
// }


// guess 5 times  (for loop)

// let randomNumber = Math.floor(Math.random()*6)+1 // 5
// console.log(randomNumber)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('Enter any number between 1 to 6') //4 , 3 // 5
//     if(randomNumber == userInput){ 
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('incorrect guess , please try again')
//     }

// }






// guess until it matches


// progrom 



// -------------------------------------------------------------------------------------------



// program 1 - only one chance to guess

// let randonRandom = Math.floor(Math.random()*6 ) + 1   // 1,2,3,4,5,6
// console.log(randonRandom)
// let userInput = prompt('please enter any number between 1 to 6') // 
// if(randonRandom == userInput){
//     console.log('your guess is correct')
// }
// else {
//     console.log('you guess is incorrect')
// }

// program 2

// let randonRandom = Math.floor(Math.random()*6 ) + 1 
// console.log(randonRandom)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('please enter any number between 1 to 6')
//     if(userInput == randonRandom){
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }
// }

// program 3

// let randonRandom = Math.floor(Math.random()*6 ) + 1  // 5
// console.log(randonRandom)
// let userInput = prompt('please enter any number between 1 to 6') // 5

// while(userInput != randonRandom){
//     userInput = prompt('please enter any number between 1 to 6') // 3 // 5
//     if(randonRandom == userInput){
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect , please try again')
//     }

// }

// program 4
// let randonRandom = Math.floor(Math.random() * 6) + 1 // 4
// console.log(randonRandom)
// let userInput
// do {

//     userInput = prompt('Please Enter any number between 1 to 6') // 4
//     if (randonRandom == userInput) {
//         console.log('your guess is correct')
//         break
//     } else {
//         console.log('your guess is incorrect please try again')
//     }


// } while (userInput != randonRandom)