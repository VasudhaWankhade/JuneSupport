// // // sync code ==> line by line execution ==> blocking in nature
// // // async code ==> will get the output in the order of execution of code ==> non blocking in nature
// // // promise consume ==>Code that must wait for the result
// // // user create = 3000 ==> user id =2000 ==> user info = 1000

// // // function getUserInfo() {
// // //     // user create
// // //     setTimeout(function() { console.log("User created") }, 3000)

// // //     // user id
// // //     setTimeout(function() { console.log("Got user id") }, 2000)

// // //     // user info
// // //     setTimeout(function() { console.log("We got user info") }, 1000)
// // // }

// // // getUserInfo()

// // // problem ==> code async
// // // solution ==> async code should be managed in sync manner

// // // call back hell

// // function getUserInfo() {
// //     setTimeout(function() {
// //         console.log("User created")
// //         setTimeout(function() {
// //             console.log("Got user id")
// //             setTimeout(function() {
// //                 console.log("We got user info")
// //             }, 1000)
// //         }, 2000)
// //     }, 3000)
// // }
// // // getUserInfo()

// // // call back hell ? ==> complex

// // // 2015 ==> solution ==> promises

// // // main purpose of this example ==> is to know the functionality of promises

// // // let newProm = new Promise(function(resolve, reject) {
// // //         let gotMyMoneyBack = false
// // //         if (gotMyMoneyBack) {
// // //             setTimeout(function() {
// // //                 resolve("He kept his promise")
// // //             }, 2000)
// // //         } else {
// // //             setTimeout(function() {
// // //                 reject("He did not kept his promise")
// // //             }, 2000)
// // //         }
// // //     })
// // // console.log(newProm)

// // // newProm.then(function(ret) { console.log(ret) }, function(ret) { console.log(ret) })

// // // sync and async

// // // call back hell

// // // Promises
// // // pending resolve reject
// // let newPromise = new Promise(function(resolve, reject) {
// //         let gotMyMoneyBack = true
// //         if (gotMyMoneyBack) {
// //             setTimeout(function() {
// //                 resolve("I got my money")
// //             }, 2000)
// //         } else {
// //             setTimeout(function() {
// //                 reject("I did not get my money")
// //             }, 2000)

// //         }
// //     })
// //     // console.log(newPromise) // sync
// //     // newPromise.then(function(result) {
// //     //     console.log(result)
// //     // }, function(result) {
// //     //     console.log(result)
// //     // })

// // // newPromise.then(function(result) {
// // //         console.log(result)
// // //     })
// // //     .catch(function(result) {
// // //         console.log(result)
// // //     })
// // //     .finally(function() {
// // //         console.log("Ok")
// // //     })


// // // user create ==> id ==> info 
// // // promises

// // function createUser() {
// //     let a = new Promise(function(resolve, reject) {
// //         setTimeout(function() {
// //             resolve("UserCreated")
// //         }, 3000)
// //     })
// //     return a
// // }

// // function id() {
// //     let b = new Promise(function(resolve, reject) {
// //         setTimeout(function() {
// //             resolve("Got id")
// //         }, 2000)
// //     })
// //     return b
// // }

// // function Userinfo() {
// //     let c = new Promise(function(resolve, reject) {
// //         setTimeout(function() {
// //             resolve("got info")
// //         }, 1000)
// //     })
// //     return c
// // }

// // // createUser().then(function(result) {
// // //         console.log(result)
// // //         let a = id()
// // //         return a
// // //     })
// // //     .then(function(str) {
// // //         console.log(str)
// // //         let info = Userinfo()
// // //         return info
// // //     })
// // //     .then(function(inff) {
// // //         console.log(inff)
// // //     })
// // //     .finally(function() {
// // //         console.log("Whatever")
// // //     })

// // // async await

// // let a = async function() {
// //     let user = await createUser()
// //     console.log(user)

// //     let id1 = await id()
// //     console.log(id1)

// //     let infoU = await Userinfo()
// //     console.log(infoU)
// // }
// // a()


// // sync async

// // function add(x, y) {
// //     setTimeout(function() {
// //         console.log(x + y)
// //     }, 2000)
// // }

// // function add1(a, b) {
// //     console.log(a + b)
// // }


// // add(10, 10)
// // add1(100, 200)


// // user create ==> id ==> user info


// // function getInfo() {

// //     setTimeout(function() {
// //         console.log("User created")
// //     }, 3000)

// //     setTimeout(function() {
// //         console.log("got id")
// //     }, 2000)

// //     setTimeout(function() {
// //         console.log("User info")
// //     }, 1000)
// // }
// // getInfo()


// // call back hell

// // function getInfo() {
// //     setTimeout(function() {
// //         console.log("User created")
// //         setTimeout(function() {
// //             console.log("got id")
// //             setTimeout(function() {
// //                 console.log("User info")
// //             }, 1000)
// //         }, 2000)
// //     }, 3000)
// // }
// // getInfo()

// // promises ==> pending resolve reject

// // let a = new Promise(function(resolve, reject) {

// //         let a = true
// //         if (a) {
// //             setTimeout(function() {
// //                 resolve("TRUE")
// //             }, 2000)
// //         } else {
// //             setTimeout(function() {
// //                 reject("FALSE")
// //             }, 2000)
// //         }

// //     })
// //     // console.log(a) // sync
// // a.then(function(str) {
// //         console.log(str)
// //     },
// //     function(str) {
// //         console.log(str)
// //     })

// // async code ==> sync manage


// function createUser() {
//     let a = new Promise(function(resolve) {
//         setTimeout(function() { resolve("User created") }, 3000)
//     })
//     return a
// }

// function getId() {
//     let a = new Promise(function(resolve) {
//         setTimeout(function() { resolve("got user id") }, 2000)
//     })
//     return a
// }

// function getInfo() {
//     let a = new Promise(function(resolve) {
//         setTimeout(function() { resolve("user info") }, 1000)
//     })
//     return a
// }

// // createUser().then(function(str) {
// //         console.log(str)
// //         let s = getId()
// //         return s
// //     })
// //     .then(function(str) {
// //         console.log(str)
// //         let a = getInfo()
// //         return a
// //     })
// //     .then(function(str) {
// //         console.log(str)
// //     })

// // async await
// // async ==> return promise

// async function getUserInfo() {
//     let a = await createUser()
//     console.log(a)

//     let b = await getId()
//     console.log(b)

//     let c = await getInfo()
//     return c
// }

// getUserInfo().then(function(a) {
//     console.log(a)
// })
// GET ==> data
// PUT ==> update
// POST ==> create
// DELETE ==> delete