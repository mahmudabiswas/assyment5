function showSectionByID(id) {
  document.getElementById("donationMoney").classList.add("hidden");
  document.getElementById("donationFetures").classList.add("hidden");
  // remove class list
  document.getElementById(id).classList.remove("hidden");
}
