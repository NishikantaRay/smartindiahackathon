let nameid=document.getElementById("name").value;
console.log(nameid.value);
let age=document.getElementById("age");
let med1=document.getElementById("med1");
let pot1=document.getElementById("pot1");
let dos1=document.getElementById("dos1");
let dur1=document.getElementById("dur1");
let med2=document.getElementById("med2");
let pot2=document.getElementById("pot2");
let dos2=document.getElementById("dos2");
let dur2=document.getElementById("dur2");
let med3=document.getElementById("med3");
let pot3=document.getElementById("pot3");
let dos3=document.getElementById("dos3");
let dur3=document.getElementById("dur3");
let med4=document.getElementById("med4");
let pot4=document.getElementById("pot4");
let dos4=document.getElementById("dos4");
let dur4=document.getElementById("dur4");
const element = document.getElementById("myBtn");

element.addEventListener("click", myFunction);

function myFunction() {
    console.log(nameid.value,age,med1,pot1,dos1,dur1,med2,pot2,dos2,dur2,med3,pot3,dos3,dur3,med4,pot4,dos4,dur4);
}