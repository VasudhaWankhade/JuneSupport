// elements get

let ulList = document.querySelector('ul')
console.log(ulList)

let inputBox = document.querySelector('input')
console.log(inputBox)

let addLiBtn = document.querySelector('#add')
console.log(addLiBtn)

// add button click

addLiBtn.addEventListener('click', () => {
    let newCity = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = newCity // <li>newCity</li>
    ulList.appendChild(newLi)
    createButton(newLi)
})


function createButton(li) { //<li>newCity</li>

    // remove
    let removeBtn = document.createElement('button') //<button></button>
    removeBtn.textContent = "Remove" //<button>Remove</button>
    removeBtn.className = 'remove' //<button class = "remove">Remove</button>
    li.appendChild(removeBtn) //<li>newCity <button class = "remove">Remove</button> </li>

    // up

    let upBtn = document.createElement('button') //<button></button>
    upBtn.textContent = "Up" //<button>Remove</button>
    upBtn.className = 'up' //<button class = "remove">Remove</button>
    li.appendChild(upBtn) //<li>newCity <button class = "remove">Remove</button> </li>

    // down
    let downBtn = document.createElement('button') //<button></button>
    downBtn.textContent = "Down" //<button>Remove</button>
    downBtn.className = 'down' //<button class = "remove">Remove</button>
    li.appendChild(downBtn) //<li>newCity <button class = "remove">Remove</button> </li>


}


// All buttons should work

ulList.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {

        if (event.target.className == 'remove') {
            let li = event.target.parentElement
            ulList.removeChild(li)
        } else if (event.target.className == 'up') {
            let li = event.target.parentElement
            let prev = li.previousElementSibling
            ulList.insertBefore(li, prev)
        } else if (event.target.className == 'down') {
            let li = event.target.parentElement
            let next = li.nextElementSibling
            ulList.insertBefore(next, li)
        }
    }
})