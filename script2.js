const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

const span = document.querySelector(".counter");
let count = 0;
increase.addEventListener("click",(event)=>{
    event.preventDefault();
    count = count +1;
    span.textContent = count;
})
decrease.addEventListener("click",(event)=>{
    event.preventDefault();
    count = count-1;
    span.textContent = count;
})
reset.addEventListener("click",(event)=>{
    count = 0;
    span.textContent = count;
})