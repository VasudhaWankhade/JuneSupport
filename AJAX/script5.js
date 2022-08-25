// Display on UI

function renderHTML(obj) {
    let box = document.querySelector('#box')
    let html = `<div>
    <h1> ${obj.id}</h1>
    <p>${obj.first_name}</p>
    <p>${obj.last_name}</p>
    <p>${obj.email}</p>
    <img src = ${obj.avatar}>
    </div>` // <div><h1>2</h1></div>
    box.insertAdjacentHTML('beforeend', html)

}





// function to get userinfo id wise

function getSingleUser(id) {

    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setTimeout(function() {
                renderHTML(data.data)
            }, 2000)
        })

}

// getSingleUser(4)
// getSingleUser(6)


// async function displayParallel(id1, id2, id3, id4) {
//     let a = await getSingleUser(id1)
//     let b = await getSingleUser(id2)
//     let c = await getSingleUser(id3)
//     let d = await getSingleUser(id4)
// }
// displayParallel(2, 3, 4, 5)

// async function displayParallel(id1, id2, id3, id4) {
//     let a = await Promise.all([getSingleUser(id1), getSingleUser(id2), getSingleUser(id3), getSingleUser(id4)])
//     console.log(a)
// }
// displayParallel(2, 3, 4, 5)