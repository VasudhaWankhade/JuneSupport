// sync ==> line by line execution

function add(x, y) {
    console.log(x + y)
}

function add1(a, b) {
    console.log(a + b)
}

// add(10, 20)
// add1(100, 20)

add1(100, 20)
add(10, 20)
    // The function which is called first will be executed first

// async ==> will get output of function which will be executed first

function sub(x, y) {
    setTimeout(function() { // setTimeout ==> async in nature 
        console.log(x - y)
    }, 2000)
}

function subA(a, b) {
    console.log(a - b)
}

// sub(100, 10) // async 
// subA(200, 100)

// subA(200, 100)
// sub(100, 10)

// api hit ==> user create -id ==> id - userInfo

// function getUserInfo() {
//     setTimeout(function() { console.log("User Create") }, 3000)
//     setTimeout(function() { console.log("Get id") }, 2000)
//     setTimeout(function() { console.log("User Info") }, 1000)
// }
// getUserInfo()

// Call back Hell ==> async code ==> sync manage

// function getInfo() {
//     //async  ===> sync
//     setTimeout(function() {
//         console.log('user created')
//         setTimeout(function() {
//             console.log('get id')
//             setTimeout(function() {
//                 console.log('get userinfo')
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// getInfo()

function getInfoOfUser() {
    setTimeout(function() {
        console.log("User Create")
        setTimeout(function() {
            console.log("UserId")
            setTimeout(function() {
                console.log("User Info")
            }, 1000)
        }, 2000)
    }, 3000)
}
getInfoOfUser()


// For solution of call back hell ==> Promises

// Promise ==> resolve  reject pending