let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

let statusBtn = document.querySelector(".dropbtn")
let list = document.querySelector(".content")

statusBtn.addEventListener("click", ()=>{
    list.classList.toggle("newlist")
})