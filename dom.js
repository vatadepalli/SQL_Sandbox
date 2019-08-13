console.log(window);

// Single Element
const form = document.getElementById("my-form");
console.log("TCL: form", form);
const header = document.querySelector("h1");
console.log("TCL: header", header);

// Multi Element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByTagName("item"));
// console.log(document.getElementsByClassName("li"));

const items_ = document.querySelectorAll(".item");
console.log(items_);
items_.forEach(item => console.log(item));

const ul = document.querySelector(".items");

// ul.remove();
ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Banna";
ul.lastElementChild.innnerHTML = "<h4>Hello</h4>";

const btn = document.querySelector(".btn");
btn.style.background = "red";

btn.addEventListener("click", e => {
  e.preventDefault();
  console.log("click");
  console.log(e.target.className);
  document.querySelector("#myform").style.background = "#ccc";

  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innnerHTML =
    "<h1>Hello</h1>";
});

const myForm = document.getElementById("myform");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

function Submit(e) {
  e.preventDefault();
  console.log("Hi");
  console.log(nameInput.value);
}

myForm.addEventListener("submit", Submit);
