// Aid for Movement

document
  .getElementById("donateMovementBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = document.getElementById("donateMovementInput").value;
    const donateNumber = parseFloat(donate);
    const donateTaka = document.getElementById("donateMovement").innerHTML;
    const donateAmount = parseFloat(donateTaka);

    if (isNaN(donateNumber, donateAmount)) {
      alert("Invalid input");
      return;
    }

    const totalBalance = donateNumber + donateAmount;

    document.getElementById("donateMovement").innerHTML = totalBalance;

    // history of donation money
    const div = document.createElement("div");
    div.innerHTML = `<p class="py-10 my-2 border-2 px-5 text-4xl font-bold rounded-xl"> ${totalBalance}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
${new Date()} 
</p>
`;
    document.getElementById("donationAllCountMoney").appendChild(div);

    const totalAllAmount = document.getElementById("MoneyAmount").innerText;
    const divideNumber = parseFloat(totalAllAmount);
    const divideMoney = divideNumber - totalBalance;
    document.getElementById("MoneyAmount").innerText = divideMoney;
  });
