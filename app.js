const dropDownBtn = document.querySelectorAll(".drop-down-btn");
const dropDownMenu = document.querySelector(".dropdown-content");

function showDropDown() {
  dropDownMenu.classList.toggle("show");
}

function removeDropDown(event) {
  if (!event.target.matches(dropDownBtn)) {
    dropDownMenu.classList.remove("show");
  }
}

for (const btn of dropDownBtn) {
  btn.addEventListener("click", showDropDown);
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", removeDropDown);

// window.onclick = function (event) {
//   if (!event.target.matches(dropDownBtn)) {
//     for (let i = 0; i < dropDownMenu.clientHeight; i++) {
//       if (dropDownMenu[i].classList.contains("show")) {
//         dropDownMenu[i].classList.remove("show");
//       }
//     }
//   }
// };
