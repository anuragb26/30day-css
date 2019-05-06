// Get modal elements
var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementsByClassName("btn-modal")[0];
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Listen for click

console.log("modalBtn", modalBtn);
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  console.log("openModal", this);
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
