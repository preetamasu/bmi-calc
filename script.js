const height = document.querySelector(".height-value");
const weight = document.querySelector(".width-value");
const btn = document.getElementById("btn");
const span = document.getElementById("weight-condition");
const read = document.getElementById("readonly");


btn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(height.value && weight.value){
        const bmi = calculate(height.value,weight.value);
        read.value = bmi;
       switch (true) {
    case bmi < 18.5:
        span.textContent = "Underweight";
        break;
    case bmi < 25:
        span.textContent = "Normal weight";
        break;
    case bmi < 30:
        span.textContent = "Overweight";
        break;
    default:
        span.textContent = "Obese";
}


    }
    else{
        span.textContent = "Enter correct Height and Weight";
           

    }
    setTimeout(()=>{
       height.value= "";
    weight.value = "";
    },2000);
    // setTimeout(()=>{
    //     read.value = "";
    //     span
    // })
 
})

function calculate(height,weight){
    const height1 = height/100;
    return weight/(height1*height1);
}