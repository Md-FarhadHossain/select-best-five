const slectedButtons = document.querySelectorAll(".slectedButton");
const slectedItem = document.querySelector(".slectedItem");
const noPlayer = document.querySelector(".noPlayer");

const playersNames = [
  "Lionel Messi",
  "David Villa",
  "Fara Williams",
  "Miroslav Klose",
  "Nadine Angerer",
  "Hope Solo",
  "Iker Casillas",
  "Gianluigi Buffon",
  "Andrea Pirlo",
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

// console.log(totalPlayerExpenses);

const perPlayerValues = parseInt(perPlayer.value);
const playerExpensess = perPlayerValues * playerNameList.length;
console.log(playerExpensess);

expensesCal.addEventListener("click", function () {
  const perPlayerValue = parseInt(perPlayer.value);
  // if (perPlayer.value == ''){
  //   alert('Please prvide a valid cost!💸')
  // }
  const playerExpenses = perPlayerValue * playerNameList.length;
  totalPlayerExpenses.push(playerExpenses);
  expenses.innerText = "$" + playerExpenses;

  // if (isNaN(expenses)) {
  //   expenses.innerText = "$0";
  // }
});

totalBtn.addEventListener("click", function () {
  const managerValue = parseInt(manager.value);
  const coachValue = parseInt(coach.value);

  const managerCoachExpense = managerValue + coachValue;

  const tpeIn = totalPlayerExpenses.length - 1;
  const totalExpenses =
    parseInt(totalPlayerExpenses[tpeIn]) + managerCoachExpense;

  totalCost.innerText = "$" + totalExpenses;
  console.log(totalExpenses);

  // if (isNaN(totalCost)){
  //   totalCost.innerText = "$0"
  // }
  // if (manager.value == '' || coach.value == ''){
  //   alert('Please prvide a valid cost!💸')
  // }
});

let itemListOfPlayer = [];
console.log(itemListOfPlayer);

if (itemListOfPlayer.length > 5) {
  itemListOfPlayer.length - 1;
}

slectedButtons.forEach((slectedButton) => {
  function selctedUl(liIndex) {
    // const listItem = document.createElement("li");
    // listItem.textContent = playersNames[liIndex];

    // playerNameList.push(listItem.textContent);

    // slectedItem.appendChild(listItem);

    const slectedItemLis = document.querySelectorAll(".slectedItem li");
    console.log(slectedItemLis);
    itemListOfPlayer.push(slectedItemLis);

    if (slectedItemLis.length >= 5) {
      alert("You cannot add more than 5 player!");
    } else {
      slectedButton.setAttribute("disabled", "");
      slectedButton.style.background = "gray";
      slectedButton.style.cursor = "no-drop";
      noPlayer.style.display = "none";
      const listItem = document.createElement("li");
      listItem.textContent = playersNames[liIndex];

      playerNameList.push(listItem.textContent);

      slectedItem.appendChild(listItem);
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
    } else if (e.target.classList[2] == "selectBtn-7") {
      selctedUl(6);
    } else if (e.target.classList[2] == "selectBtn-8") {
      selctedUl(7);
    } else if (e.target.classList[2] == "selectBtn-9") {
      selctedUl(8);
    }
  });
});
