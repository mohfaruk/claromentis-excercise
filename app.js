const dropDownBtn = document.querySelectorAll(".drop-down-btn");

function myFunc() {
  console.log("it works");
}

for (const btn of dropDownBtn) {
  btn.addEventListener("click", myFunc);
}
