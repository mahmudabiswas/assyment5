//   donateFeni

document
  .getElementById("donateFeniBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = document.getElementById("donateFeniInput").value;
    const donateNumber = parseFloat(donate);
    const donateTaka = document.getElementById("donateFeni").innerHTML;
    const donateAmount = parseFloat(donateTaka);
    const totalBalance = donateNumber + donateAmount;

    document.getElementById("donateFeni").innerHTML = totalBalance;

    const totalAllAmount = document.getElementById("MoneyAmount").innerText;
    const divideNumber = parseFloat(totalAllAmount);
    const divideMoney = divideNumber - totalBalance;
    document.getElementById("MoneyAmount").innerText = divideMoney;
  });
