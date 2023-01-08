import { calculator } from "./calculator";
import { displayAmount, getTipPercentage } from "./dom";

const myCalculator = calculator();


// total amount input - to get total
const billTotal = document.querySelector("#total");
// percentage div selected or custom number input - to get percentage
const percentageSelect = document.querySelectorAll(".select-tip-section div");
const customPercentage = document.querySelector("#custom-percentage");
// number of people input
const numberOfPeople = document.querySelector("#people");

// display totals
const displayTip = document.querySelector(".display-tip-amount");
const displayTotal = document.querySelector(".display-total-amount");

// event listener to calculate amount when number inputs are used
document.addEventListener("input", (e) => {
    if (e.target.matches("input[type='number']")) {
        // calulate tip pp 
        let tip = getTipPercentage(percentageSelect, customPercentage.value, "selected");

        let tipAmount = myCalculator.calculateTip(billTotal.value, tip);
        let calculatedTip = myCalculator.tipPerPerson(tipAmount, numberOfPeople.value);

        // calculate total pp
        let calculatedTotal = myCalculator.totalPerPerson(Number(billTotal.value), tipAmount, numberOfPeople.value);

        // update display
        displayAmount(displayTip, calculatedTip);
        displayAmount(displayTotal, calculatedTotal);
    }
});

// select percentage add class on click
document.addEventListener("click", (e) => {
    if (e.target.matches(".select-tip-section div")) {
        percentageSelect.forEach(div => {
            div.className = "";
        });
        customPercentage.value = '';
        e.target.className = "selected";

        // calculate totals*
    };

    if (e.target.matches("#custom-percentage")) {
        percentageSelect.forEach(div => {
            div.className = "";
        });
    };
});

// reset button*

