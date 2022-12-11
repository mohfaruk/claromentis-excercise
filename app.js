// initialises variable elemens
const dropDownBtn = document.querySelectorAll(".drop-down-btn");
const dropDownMenu = document.querySelector(".dropdown-content");

// displays dropdown
function showDropDown() {
  dropDownMenu.classList.toggle("show");
}

// runs showDropDown for each button on click
for (const btn of dropDownBtn) {
  btn.addEventListener("click", e => {
    btn.nextElementSibling.classList.toggle("show"); // returns next element of button
  });
}

// closes dropdown when user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drop-down-btn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
};
