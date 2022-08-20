// let users = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [{
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }



// function renderHTML(obj) {
//     let container = document.querySelector("#mainDiv")
//     let div = `
//         <div>
//         <h1>${obj.id} </h1>
//         <p>${obj.email}</p>
//         <p> ${obj.first_name}</p>
//         <p>${obj.last_name}</p>
//         <img src = ${obj.avatar}>
//         </div>
//         `
//     container.insertAdjacentHTML('beforeend', div)
// }



// // properties and value 
// users.data.forEach(function(el) {
//     renderHTML(el)
// })



// let divA = document.createElement('div') // <div></div>
// let hTag = document.createElement('h1') // <h1></h1>
// hTag.textContent = obj.firstName // <h1>Sanju</h1>
// divA.appendChild(hTag) //<div><h1>Sanju</h1></div>
//<div><h1>Vasudha</h1> </div>






// // let me = {
// //     myFirstName: "Vasudha",
// //     myLastName: "Wankhade",
// //     myRollNo: 24,
// //     myAge: 22,
// //     myPhoto: 'https://reqres.in/img/faces/7-image.jpg'
// // }

// // function renderHTML(obj) {
// //     let container = document.querySelector("#mainDiv")
// //     let div = `
// //     <div>
// //     <h1>${obj.myFirstName} ${obj.myLastName}</h1>
// //     <p>${obj.myRollNo}</p>
// //     <p> ${obj.myAge}</p>
// //     <img src = ${obj.myPhoto}>
// //     </div>
// //     `
// //     container.insertAdjacentHTML('beforeend', div)
// // }

// // renderHTML(me)


let obj = {
    firstName: "Vasudha",
    lastName: "Wankhade"
}

let obj1 = {
    firstName: "Sanju"
}

// function renderHTML(obj) {
//     let container = document.querySelector('#mainDiv')
//     let div = `
//         <div>
//         <h1> ${obj.firstName}</h1>  
//         </div>
//         `
//     container.insertAdjacentHTML('beforeend', div)
// }

// renderHTML(obj)
// renderHTML(obj1)

let users = {
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }
    // users.data.forEach(function(el) {
    //     for (let key in el) {
    //         console.log(key, el[key])
    //     }
    // })


// function renderHTML(obj) {
//     let container = document.querySelector('#mainDiv')
//     let div = `
//             <div>
//             <h1> ${obj.id}</h1>  
//             <h4>${obj.email}</h4>
//             <p>${obj.first_name}</p>
//             <p>${obj.last_name}</p>
//             <img src =${obj.avatar}>
//             </div>
//             `
//     container.insertAdjacentHTML('beforeend', div)
// }

// users.data.forEach(function(el) {
//     renderHTML(el)
// })