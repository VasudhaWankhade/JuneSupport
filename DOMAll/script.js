// // elements

// // ul list
// let ulList = document.querySelector('ul')
// console.log(ulList)

// // add button
// let addBtn = document.querySelector('#addButton')
// console.log(addBtn)

// // input box
// let input = document.querySelector('input')
// console.log(input)


// // addEventListener

// addBtn.addEventListener('click', () => {
//     // read value in text box
//     let text = input.value
//     console.log(text)

//     // create new li element
//     let newLi = document.createElement('li') // <li></li>

//     // add text in the new li element
//     newLi.textContent = text
//     console.log(newLi)

//     // add this li in ul list 
//     ulList.appendChild(newLi)
//     createButton(newLi)

// })

// function createButton(newLi) {
//     //==> add remove button

//     //create blank button
//     let btnRemove = document.createElement('button')
//         // Add textContent Remove
//     btnRemove.textContent = "Remove"
//         //Give class = "remove"
//     btnRemove.className = 'remove'
//         // Add this button in new li element
//     newLi.appendChild(btnRemove)

//     // ==> add up button

//     //create blank button
//     let btnUp = document.createElement('button')
//         // Add textContent Up
//     btnUp.textContent = "Up"
//         //Give class = "up"
//     btnUp.className = 'up'
//         // Add this button in new li element
//     newLi.appendChild(btnUp)


//     // ==> add down button

//     //create blank button
//     let btnDown = document.createElement('button')
//         // Add textContent down
//     btnDown.textContent = "Down"
//         // Give class = "down"
//     btnDown.className = "down"
//         //add this button to new li
//     newLi.appendChild(btnDown)
// }