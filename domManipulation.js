let buttonReference = document.querySelector("#abc");
let papa = document.querySelector("p");
let decreasing = document.querySelector("#c");

let count = 0 ;
buttonReference.addEventListener('click',()=>{
    count++;
    papa.innerText = count ;
})
decreasing.addEventListener('click',()=>{
    count--;
    papa.innerText = count ;
})

let color = document.querySelector("#container");

color.addEventListener('mousemove',()=>{
    color.style.backgroundColor = "black" ;
})


color.addEventListener('mouseout',()=>{
    color.style.backgroundColor = "white" ;
})

let elements = document.querySelectorAll('*');
elements.forEach((element)=>
{
    console.log(element.children);
})