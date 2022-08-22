// let arrayOfUsers = [{
//         id: 2,
//         firstName: "Vasudha",
//         lastName: "Wankhade",
//         email: 'abcd@gmail.com',
//         myPhoto: 'https://reqres.in/img/faces/12-image.jpg'
//     },
//     {
//         id: 4,
//         firstName: "Sanju",
//         lastName: "Dadhe",
//         email: 'efgh@gmail.com',
//         myPhoto: "https://reqres.in/img/faces/10-image.jpg"
//     }

// ]


function addHTMLElement(obj) {
    let box = document.querySelector('#container')
    let html = `<div>
    <h1> ${obj.id}</h1>
    <p>${obj.first_name}</p>
    <p>${obj.last_name}</p>
    <p>${obj.email}</p>
    <img src = ${obj.avatar}>
    </div>` // <div><h1>2</h1></div>
    box.insertAdjacentHTML('beforeend', html)

}

// arrayOfUsers.forEach(function(el) {
//     addHTMLElement(el)
// })


// // parallel execution


function getSingleUser(userId) {
    return fetch(`https://reqres.in/api/users/${userId}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(str) {
            addHTMLElement(str.data)
                // return str.data
            console.log(str.data)
        })

}

// getSingleUser(4)
// getSingleUser(3) // independent

// async function displayUserInfo(id1, id2, id3) {
//     let a = await Promise.all([getSingleUser(id1), getSingleUser(id2), getSingleUser(id3)])
//     console.log(a)
// }
// displayUserInfo(2, 6, 4)

// async function displayUserInfo(id1, id2, id3) {
//     let a = await Promise.race([getSingleUser(id1), getSingleUser(id2), getSingleUser(id3)])
//     console.log(a)
// }
// displayUserInfo(2, 5, 7)

async function ParallelR(userOne, userTwo, userThree) {

    let data = await Promise.race([
        getSingleUser(userOne),
        getSingleUser(userTwo),
        getSingleUser(userThree)
    ])
    console.log(data)

}
ParallelR(2, 3, 4)

// user list ==> id