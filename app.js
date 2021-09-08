import { flag, code, name, countries } from "/country-emoji";
const allBtn = document.querySelectorAll(".contLignes");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hello");
    btn.classList.toggle("active");
  });
});
$(document).ready(function () {
  $(".contLignes").click(function () {
    $(".menuDefi").toggleClass("isOpen");
  });
});

console.log(flag("CL"));
console.log(code("UAE"));

console.log(name("AE"));
console.log(Object.keys(countries).join(", "));
