//   donateFeni

document
  .getElementById("donateFeniBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = document.getElementById("donateFeniInput").value;
    const donateNumber = parseFloat(donate);
    const donateTaka = document.getElementById("donateFeni").innerHTML;
    const donateAmount = parseFloat(donateTaka);

    if (isNaN(donateNumber, donateAmount)) {
      alert("Invalid input");
      return;
    }

    const totalBalance = donateNumber + donateAmount;

    document.getElementById("donateFeni").innerHTML = totalBalance;

    // history of donation money
    const div = document.createElement("div");
    div.innerHTML = `<p class="py-10 my-2 border-2 px-5 text-4xl font-bold rounded-xl"> ${totalBalance} Taka is Donated for famine-2024 at Feni, Bangladesh
    ${new Date()} 
    </p>
    `;
    document.getElementById("donationAllCountMoney").appendChild(div);

    const totalAllAmount = document.getElementById("MoneyAmount").innerText;
    const divideNumber = parseFloat(totalAllAmount);
    const divideMoney = divideNumber - totalBalance;
    document.getElementById("MoneyAmount").innerText = divideMoney;
  });
