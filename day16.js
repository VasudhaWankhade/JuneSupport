// browser ==> html
// javascript =>
// css ==> 

// Vasudha 

// h1  ==> red
// h1==> blue
// h1==> red

{ /* <p class="black" id="white" name="greet">Hello Good morning</p> */ }

// class 

let a = document.querySelector('#white')
console.log(a)
a.textContent = "Vasudha"

a.addEventListener('mouseover', function() {
    a.textContent = "Vasudha Wankhade"
    a.style.color = "red"
})