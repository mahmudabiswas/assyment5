document
  .getElementById("donationAllPeople")
  .addEventListener("click", function (e) {
    e.preventDefault();
    showSectionByID("donationMoney");
  });

//   show history

document
  .getElementById("donationAllHistory")
  .addEventListener("click", function (e) {
    e.preventDefault();
    showSectionByID("donationFetures");
  });
