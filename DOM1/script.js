// elements find

// ulList

let ulList = document.querySelector('ul') // tag name
console.log(ulList)

// button

let chgColorBtn = document.querySelector('button')
console.log(chgColorBtn)

// input box

let textInput = document.querySelector('#textColor')
console.log(textInput)

let backInput = document.querySelector('#backColor')
console.log(backInput)

// button click

chgColorBtn.addEventListener('click', function() {
    // user input box value
    ulList.style.color = textInput.value
    ulList.style.backgroundColor = backInput.value
    textInput.value = ""
    backInput.value = ""
})

let body = document.querySelector('body')
console.log(body)

body.addEventListener('click', function(event) {
    console.log(event.target.tagName)
})