export const calculator = () => {

    // calculate tip amount
    const calculateTip = (total, percentage) => {
        const num = percentage / 100;

        // return amount with no rounding
        return Math.floor((total * num) * 100) / 100;
    }

    // calculate tip per person
    const tipPerPerson = (tipAmount, numberOfPeople) => {

        if (!tipAmount) {
            return (0).toFixed(2);
        }

        if (!numberOfPeople) {
            return (tipAmount).toFixed(2);
        }

        return Math.floor((tipAmount / numberOfPeople) * 100) / 100;
    }

    // calculate total per person
    const totalPerPerson = (total, tipAmount, numberOfPeople) => {
        const totalPlusTip = tipAmount + total;

        if (!numberOfPeople) {
            return Number(total).toFixed(2);
        }

        if (!tipAmount) {
            return (total / numberOfPeople).toFixed(2);
        }

        return (totalPlusTip / numberOfPeople).toFixed(2);
    }

    return { calculateTip, tipPerPerson, totalPerPerson };

};

// for testing with jest
// module.exports = calculator;