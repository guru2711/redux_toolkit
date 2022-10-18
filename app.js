
const increment = document.querySelector(".inc")
const decrement = document.querySelector(".dec")
console.log(increment);
let count = 0
let content = document.querySelector(".content")
increment.addEventListener('click',function () {
    console.log(content);
    count++
    content.textContent = count

})
decrement.addEventListener('click',function () {
    console.log(content);
    count--
    content.textContent = count

})