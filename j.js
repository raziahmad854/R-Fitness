const form = document.getElementById("gym-membership-form");
const button = document.getElementById("open-form-button");

button.addEventListener("click", function() {
  form.style.display === "block" ? form.style.display = "none" : form.style.display = "block";
});