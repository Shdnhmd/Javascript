const cardNumberInputs = document.getElementById("card-number").children;

const cardNumberChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 4 && cardNumberInputs[index + 1]) {
        cardNumberInputs[index + 1].focus();
    }
    else if (value.length === 4) {
        document.getElementById("name").focus();
    }
};

Array.from(cardNumberInputs).forEach((input, index) => {
    input.addEventListener("input", (e) => cardNumberChange(e, index));
});
