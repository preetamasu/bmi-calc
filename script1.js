const colors = [
    "#FF6B6B",  // Coral Red
    "#4ECDC4",  // Teal
    "#45B7D1",  // Sky Blue
    "#96CEB4",  // Sage Green
    "#FFEAA7",  // Soft Yellow
    "#DDA0DD",  // Plum
    "#98D8C8",  // Mint
    "#F7DC6F",  // Sunflower
    "#BB8FCE",  // Lavender
    "#85C1E9"   // Light Blue
]
const btn = document.querySelector(".special-btn");
const color = document.getElementById("span");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const randomNumber = random();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent =  `${colors[randomNumber]}`;
})

function random(){
    return Math.floor(Math.random()*colors.length);
}