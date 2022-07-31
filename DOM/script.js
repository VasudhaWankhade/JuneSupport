// element get methods ==> by id,by class , by tagName and by common fomula
// create a ul list
// create a textbox to take input from user
// create a button 'changeColor'
// on click ==> 'changecolor' ==> change color of list elements according to color entered in the box

// Find all elements

// ul list
let ulList = document.querySelector('ul') // by tag name
console.log(ulList)

// input box
let inputTextColor = document.querySelector('#textColor') // tag name
let inputBackColor = document.querySelector('#backColor')

// button 
let button = document.querySelector('button') // tag name

// on click action on button
button.addEventListener('click', () => {
    ulList.style.color = inputTextColor.value
    ulList.style.backgroundColor = inputBackColor.value
    inputTextColor.value = ""
    inputBackColor.value = ""

})