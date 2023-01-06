import { calculator } from "./calculator";
import { displayAmount } from "./dom";

const myCalculator = calculator();


// total amount input - to get total
const billTotal = document.querySelector("#total");
// percentage div selected or custom number input - to get percentage
const percentageSelect = document.querySelectorAll(".select-tip-section div");
const customPercentage = document.querySelector("#custom-percentage");
// number of people input
const numberOfPeople = document.querySelector("#people");