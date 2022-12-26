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
const firstVerif = document.getElementById('first-verif');
const lastname = document.getElementById('last');
const lastVerif = document.getElementById('last-verif');
const email = document.getElementById('email');
const emailVerif = document.getElementById('email-verif');
const birthdateTemp = document.getElementById('birthdate');
const birthdateVerif = document.getElementById('birthdate-verif');
const quantity = document.getElementById('quantity');
const quantityVerif = document.getElementById('quantity-verif');
const locationVerif = document.getElementById('location-verif');
const conditions = document.getElementById('checkbox1');
const conditionsVerif = document.getElementById('conditions-verif');

/* EVENT */

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Submit modal event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ne pas exécuter par défaut
  if( isFirstnameValid() == true &&
      isLastnameValid() == true &&
      isEmailValid() == true &&
      isBirthdateValid() == true &&
      isquantityValid() == true &&
      isLocationValid() == true &&
      isConditionsValid() == true){

    hide(modalBody);
    show(modalValidation);
  } else {

    isFirstnameValid();
    isLastnameValid();
    isEmailValid();
    isBirthdateValid();
    isquantityValid();
    isLocationValid();
    isConditionsValid();
  }
})

// Close modal events
closeBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);



/* FUNCTION */

function isFirstnameValid() {
  if (firstname.value == "") {
    firstVerif.innerHTML = "Vous devez entrer votre prénom."
    return false;

  } else if (firstname.value.length < 2) {
    firstVerif.innerHTML = "Veuillez entrer 2 caractères ou plus pour le prénom."
    return false;

  } else if (!(/^[A-Za-z ]+$/.test(firstname.value))) {
    firstVerif.innerHTML = "Seuls les caractères alphabétiques sont acceptés pour le prénom."
    return false;

  } else {
    firstVerif.innerHTML = ""
    return true;
  }
}

function isLastnameValid() {
  if (lastname.value == "") {
    lastVerif.innerHTML = "Vous devez entrer votre nom."
    return false;

  } else if (lastname.value.length < 2) {
    lastVerif.innerHTML = "Veuillez entrer 2 caractères ou plus pour le nom."
    return false;

  } else if (!(/^[A-Za-z\s]+$/.test(lastname.value))) {
    lastVerif.innerHTML = "Seuls les caractères alphabétiques sont acceptés pour le nom."
    return false;

  } else {
    lastVerif.innerHTML = ""
    return true;
  }
}

function isEmailValid() {
  if (email.value == "") {
    emailVerif.innerHTML = "Vous devez entrer votre adresse mail."
    return false;

  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
    emailVerif.innerHTML = "Veuillez entrer une adresse mail valide (example@gmail.com)."
    return false;

  } else {
    emailVerif.innerHTML = ""
    return true;
  }
}

function isBirthdateValid() {
  const currentDate = new Date();
  const birthdate = new Date(Date.parse(birthdateTemp.value));
  const days = difference(birthdate, currentDate);
  
  if (!birthdateTemp.value) {
    birthdateVerif.innerHTML = "Vous devez entrer votre date de naissance."
    return false;

  } else if (days < 0) {
    birthdateVerif.innerHTML = "Votre date de naissance est incorrecte."
    return false;

  } else if (days < 1825) { // 1825 = 5ans
    birthdateVerif.innerHTML = "Vous devez avoir au moins 5 ans pour vous inscrire."
    return false;

  } else if (days > 45625) { // 45625 = 125ans
    birthdateVerif.innerHTML = "Vous ne pouvez pas avoir plus de 125 ans."
    return false;

  } else {
    birthdateVerif.innerHTML = ""
    return true;
  }
}

function isquantityValid() {
  if (quantity.value == "") {
    quantityVerif.innerHTML = "Vous devez entrer le nombre de tournois effectués."
    return false;

  } else if (quantity.value < 0) {
    quantityVerif.innerHTML = "Le nombre de tournois effectués ne peut pas être inférieur à 0."
    return false;

  } else if (quantity.value > 99) {
    quantityVerif.innerHTML = "Le nombre de tournois effectués ne peut pas être supérieur à 99."
    return false;

  } else {
    quantityVerif.innerHTML = ""
    return true;
  }
}

function isLocationValid() {
  var radio = document.querySelector('input[name = "location"]:checked');
  if (radio == null) {
    locationVerif.innerHTML = "Vous devez sélectionner une ville où vous souhaiteriez participer à un tournoi."
    return false;

  } else {
    locationVerif.innerHTML = ""
    return true;
  }
}

function isConditionsValid() {
  if (!conditions.checked) {
    conditionsVerif.innerHTML = "Vous devez accepter les conditions pour soumettre ce formulaire."
    return false;

  } else {
    conditionsVerif.innerHTML = ""
    return true;
  }
}



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide a division
function hide(division) {
  division.style.display = "none";
}

// show a division
function show(division) {
  division.style.display = "block";
}

// close modal form
function closeModal() {
  show(modalBody);
  hide(modalValidation);
  hide(modalbg);
  form.reset();
}

// get age
function difference(date1, date2){
  const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const day = 1000*60*60*24;
  return(date2utc - date1utc)/day
}









