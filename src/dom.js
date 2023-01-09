
// display amount function
export const displayAmount = (element, amount) => {
    element.textContent = `$${amount.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`;
}

export const getTipPercentage = (arr, value, style) => {
    let percentage;
    if (!value) {
        arr.forEach(element => {
            if (element.classList.contains(style)) {
                // get only the number
                percentage = element.textContent.slice(0, -1);
            }

        });

        return percentage;
    }

    return value;
}
