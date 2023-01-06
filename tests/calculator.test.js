const calculator = require("../src/calculator");
const myCalculator = calculator();

test('calculate tip amount', () => {
    expect(myCalculator.calculateTip(142.55, 15)).toBe(21.38);
});

test('calculate tip per person', () => {
    expect(myCalculator.tipPerPerson(myCalculator.calculateTip(142.55, 15), 5)).toBe(4.27);
});

test('calulate total per person', () => {
    expect(myCalculator.totalPerPerson(142.55, 15, 5)).toBe(32.79);
});
