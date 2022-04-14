import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Hope Zucco";
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline
const mainTL = gsap.timeline();


//Part 1
mainTL
.from("#red", {x: 0, duration: 1 })
.from("#blue", {x: 350, duration: 1})
.to("#red", {y: 0, duration: 2})
.to("#blue", {y: 300, duration: 2})


//Part 2
//.from
;