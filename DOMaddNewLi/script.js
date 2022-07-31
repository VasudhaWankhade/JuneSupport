// button ==> input box value ==> ul list new li element add

// element get

let ulList = document.querySelector('ul')
console.log(ulList)

let inputBox = document.querySelector('input')
console.log(inputBox)

let addLiBtn = document.querySelector('button')
console.log(addLiBtn)

// button addEvn..

addLiBtn.addEventListener('click', () => {

    let newCity = inputBox.value
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = newCity // <li>newCity</li>
    ulList.appendChild(newLi)

})

// remove button

remo