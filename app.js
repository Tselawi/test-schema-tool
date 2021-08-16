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
