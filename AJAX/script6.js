function greet() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Welcome")
        }, 3000)
    })
}

function greetBye() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Bye")
        }, 2000)
    })
}

// race ==> compulsory ==> resolve 
// reject ==> error

async function ParallelEab() {
    let data = await Promise.race([
        greet(), greetBye()
    ])
    console.log(data)

}
ParallelEab()




// async function ParallelEad() {
//     let data = await Promise.all([
//         greetBye(),
//         greet(),
//         Promise.reject('bye')
//     ])
//     console.log(data)

// }
// ParallelEad()


// reject ==> error ==> race,all , any
// reject ==> allSettled


async function ParallelEad() {
    let data = await Promise.any([
        greetBye(), // reject ==> error
        greet() // resolve ==> output
    ])
    console.log(data)

}
ParallelEad()

async function ParallelEad() {
    let data = await Promise.any([
        greetBye(), // reject ==> error
        greet() // resolve ==> output
    ])
    console.log(data)

}
ParallelEad()










// Promise.all()  ==> require all resolve promises ==> give error for reject

// Promise.race() ==>require all resolve promises ==> give error for reject

// Promise.any() ==> give error for reject but also give output for resolve promise

//