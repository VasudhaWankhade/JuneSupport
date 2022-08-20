// users list ==> firstUser id ==> display using renderHTML function

function renderHTML(obj) {
    let container = document.querySelector("#mainDiv")
    let newDiv = `
    <div>
    <h1>${obj.id}</h1>
    <h4>${obj.first_name}</h4>
    <h4>${obj.last_name}</h4>
    <img src = ${obj.avatar}></img>
    </div>
    `
    container.insertAdjacentHTML('beforeend', newDiv)
}

// function getUsersPageWise(pageNo) {
//     fetch(`https://reqres.in/api/users?page=${pageNo}`)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(pro) {
//             pro.data.forEach(function(el) {
//                 renderHTML(el)
//             })
//         })
// }
// getUsersPageWise(2)

// get users pagewise

// function getUsersPageWise(pageNo) {
//     fetch(`https://reqres.in/api/users?page=${pageNo}`)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(usersInfo) {
//             console.log(usersInfo.data)
//             usersInfo.data.forEach(function(el) {
//                 renderHTML(el)
//             })
//         })
// }
// getUsersPageWise(2)


// pageNo ==> users ==> user 1st == id ==> request send ==> same user info display

// function getUsersPageWise(pageNo) {
//     fetch(`https://reqres.in/api/users?page=${pageNo}`)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(info) {
//             let userId = info.data[0].id
//             return userId
//         })
//         .then(function(id) {
//             fetch(`https://reqres.in/api/users/${id}`)
//                 .then(function(userInfo) {
//                     return userInfo.json()
//                 })
//                 .then(function(information) {
//                     console.log(information.data)
//                     renderHTML(information.data)
//                 })
//         })
// }

// getUsersPageWise(1)

// async await


async function getSingleUserInfo(pageNo) {
    let page = await fetch(`https://reqres.in/api/users?page=${pageNo}`)
    let read = await page.json()
    let userId = read.data[0].id
    let idInfo = await fetch(`https://reqres.in/api/users/${userId}`)
    let readOne = await idInfo.json()
    console.log(readOne.data)
    renderHTML(readOne.data)
}

getSingleUserInfo(1)