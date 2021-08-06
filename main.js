const btn = document.querySelector("toggle-btn");
const body = document.querySelector("body");

const gray = document.querySelector(".bg-gray");
const red = document.querySelector(".bg-red");
const orange = document.querySelector(".bg-orange");
const purple = document.querySelector(".bg-purple");
const green = document.querySelector(".bg-green");

const slideBtn = document.querySelector(".toggle-btn");
const unslideBtn = document.querySelector(".sidebar");
const changeBtn = document.querySelectorAll("li");
let message = document.querySelector(".text ");


// de slide weergeven

slideBtn.addEventListener("mouseover", function () {
  showLink();
});

function showLink() {
  document.querySelector(".sidebar").classList.add("active");
}

// de background veranderen van de body

gray.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-gray", "sidebar");
 message.innerText = "GRAY"
 
});
red.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-red", "sidebar");
  message.innerText = "RED";
});
orange.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-orange", "sidebar");
  message.innerText = "ORANGE";
});
purple.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-purple", "sidebar");
  message.innerText = "PURPLE";
});
green.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-green", "sidebar");
 message.innerText = "GREEN";
});

document.addEventListener("keydown",chooseColor);

function chooseColor(e){
  if(e.keyCode == 49 ){
   body.className= 'bg-gray';
  message.innerText = "gray"
  } else if
  (e.keyCode == 50){
    body.className="bg-red";
    message.innerText = "red"
  }
   else if
  (e.keyCode == 51){
    body.className="bg-orange";
    message.innerText = "orange"
  }
   else if
  (e.keyCode == 52){
    body.className="bg-purple";
    message.innerText = "purple"
  }
   else if
  (e.keyCode == 53){
    body.className="bg-green";
    message.innerText = "green"
  }
}
