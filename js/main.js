const slectedButtons = document.querySelectorAll(".slectedButton");
const slectedItem = document.querySelector(".slectedItem");

const playersNames = [
  "Lionel Messi",
  "David Villa",
  "Fara Williams",
  "Miroslav Klose",
  "Nadine Angerer",
  "Hope Solo",
];

const perPlayer = document.getElementById("perPlayer");
const expenses = document.getElementById("expenses");
const manager = document.getElementById("manager");
const coach = document.getElementById("coach");
const totalCost = document.getElementById("totalCost");
const expensesCal = document.querySelector(".expensesCal");
const totalBtn = document.querySelector(".totalBtn");

const playerNameList = [];
const totalPlayerExpenses = [];

console.log(totalPlayerExpenses);

const perPlayerValues = parseInt(perPlayer.value);
const playerExpensess = perPlayerValues * playerNameList.length;

console.log(playerExpensess);

function hello() {
  const perPlayerValue = parseInt(perPlayer.value);
  const playerExpenses = perPlayerValue * playerNameList.length;
  totalPlayerExpenses.push(playerExpenses);
  expenses.innerText = "$" + playerExpenses;
}

expensesCal.addEventListener("click", hello);

totalBtn.addEventListener("click", function () {
  const managerValue = parseInt(manager.value);
  const coachValue = parseInt(coach.value);

  const managerCoachExpense = managerValue + coachValue;

  const tpeIn = totalPlayerExpenses.length - 1;
  const totalExpenses =
    parseInt(totalPlayerExpenses[tpeIn]) + managerCoachExpense;

  totalCost.innerText = "$" + totalExpenses;
  console.log(totalExpenses);
});

slectedButtons.forEach((slectedButton) => {
  function selctedUl(liIndex) {
    const li = document.createElement("li");
    li.textContent = playersNames[liIndex];

    playerNameList.push(li.textContent);

    slectedItem.appendChild(li);

    const slectedItemLis = document.querySelectorAll(".slectedItem li");

    if (slectedItemLis.length > 5) {
      slectedItem.removeChild(li);
      alert("You cannot add more than 5 player!");
    } else {
      slectedButton.setAttribute("disabled", "");
      slectedButton.style.background = "gray";
    }
  }

  slectedButton.addEventListener("click", function (e) {
    if (e.target.classList[2] == "selectBtn-1") {
      selctedUl(0);
    } else if (e.target.classList[2] == "selectBtn-2") {
      selctedUl(1);
    } else if (e.target.classList[2] == "selectBtn-3") {
      selctedUl(2);
    } else if (e.target.classList[2] == "selectBtn-4") {
      selctedUl(3);
    } else if (e.target.classList[2] == "selectBtn-5") {
      selctedUl(4);
    } else if (e.target.classList[2] == "selectBtn-6") {
      selctedUl(5);
    }
  });
});
