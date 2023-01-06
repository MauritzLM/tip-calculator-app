export const calculator = () => {

    const calculateTip = (total, percentage) => {
        const num = percentage / 100;

        return Math.floor((total * num) * 100) / 100;
    }

    const tipPerPerson = (tipAmount, numberOfPeople) => {
        return Math.floor((tipAmount / numberOfPeople) * 100) / 100;
    }

    const totalPerPerson = (total, percentage, numberOfPeople) => {
        const totalPlusTip = calculateTip(total, percentage) + total;

        return Number((totalPlusTip / numberOfPeople).toFixed(2));
    }

    return { calculateTip, tipPerPerson, totalPerPerson };

};

// for testing with jest
// module.exports = calculator;