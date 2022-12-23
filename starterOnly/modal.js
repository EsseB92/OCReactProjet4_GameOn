function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




/* DOM ELEMENTS */
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const modalValidation = document.querySelector(".modal-validation");
const modalCloseBtn = document.querySelector(".btn-close");
// Form
const form = document.getElementById('reserve');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const quantity = document.getElementById('quantity');
const tournament = document.getElementById('location1');
const conditions = document.getElementById('checkbox1');

/* EVENT */

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// Submit modal
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ne pas exécuter par défaut
  
  hide(modalBody);
  show(modalValidation);
})

// Close modal events
closeBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

/* FUNCTION */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function hide(division) {
  division.style.display = "none";
}

// launch modal form
function show(division) {
  division.style.display = "block";
}

// launch modal form
function closeModal() {
  show(modalBody);
  hide(modalValidation);
  hide(modalbg);
  form.reset();
}









