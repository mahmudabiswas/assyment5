// donation for Noakhali

document
  .getElementById("donateNowaKhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = document.getElementById("donateNowaKhaliInput").value;
    const donateNumber = parseFloat(donate);
    const donateTaka = document.getElementById("donateMoney").innerHTML;
    const donateAmount = parseFloat(donateTaka);
    const totalBalance = donateNumber + donateAmount;

    document.getElementById("donateMoney").innerHTML = totalBalance;

    const totalAllAmount = document.getElementById("MoneyAmount").innerText;
    const divideNumber = parseFloat(totalAllAmount);
    const divideMoney = divideNumber - totalBalance;
    document.getElementById("MoneyAmount").innerText = divideMoney;
  });
