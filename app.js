//movement 
const card = document.querySelector (".card");   
const container = document.querySelector(".container");
//animate
const title = document.querySelector(".title")
const purchase = document.querySelector(".purchase button")
const sizes = document.querySelector(".sizes ")
const sneaker = document.querySelector(".sneaker img")


container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter" , e => {
    card.style.transition = `none`
//PopOut
    title.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(20px)";
    sizes.style.transform = "translateZ(30px)";
    sneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";

})

//Animate Out
container.addEventListener("mouseleave" , e => {
    card.style.transform = `rotateY(0deg)  rotateX(0deg)`;
    card.style.transition = `all 0.5s ease`;
    title.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
})