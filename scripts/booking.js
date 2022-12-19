/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var costPerDay = 35;
var numDaysSelected = 0;

const btnMon = document.getElementById("monday");
const btnTue = document.getElementById("tuesday");
const btnWed = document.getElementById("wednesday");
const btnThu = document.getElementById("thursday");
const btnFri = document.getElementById("friday");

const btnFullDay = document.getElementById("full");
const btnHalfDay = document.getElementById("half");

const btnClearDays = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayClick(dayButton) {
  if (!dayButton.classList.contains("clicked")) {
    dayButton.classList.add("clicked");
    numDaysSelected += 1;
    updateCost();
  }
}

btnMon.onclick = () => {
  dayClick(btnMon);
};
btnTue.onclick = () => {
  dayClick(btnTue);
};
btnWed.onclick = () => {
  dayClick(btnWed);
};
btnThu.onclick = () => {
  dayClick(btnThu);
};
btnFri.onclick = () => {
  dayClick(btnFri);
};

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearSelections() {
  var selected = document.getElementsByClassName("clicked");
  for (var x = 0; x < selected.length; x++) {
    selected[x].classList.remove("clicked");
  }
  numDaysSelected = 0;
  btnFullDay.classList.add("clicked");
  updateCost();
}

btnClearDays.onclick = () => {
  clearSelections();
  clearSelections();
  clearSelections();
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayClick() {
  costPerDay = 20;
  btnHalfDay.classList.add("clicked");
  btnFullDay.classList.remove("clicked");
  updateCost();
}

btnHalfDay.onclick = () => {
  halfDayClick();
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayClick() {
  costPerDay = 35;
  btnFullDay.classList.add("clicked");
  btnHalfDay.classList.remove("clicked");
  updateCost();
}

btnFullDay.onclick = () => {
  fullDayClick();
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
  var weeklyCost = costPerDay * numDaysSelected;
  return (document.getElementById(
    "calculated-cost"
  ).innerHTML = `${weeklyCost}`);
}


