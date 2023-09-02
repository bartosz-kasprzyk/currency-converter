{
    const calculateResult = (from, to, amount) => {
        const EURtoPLN = 4.47;
        const EURtoUSD = 1.08;
        const EURtoEUR = 1;

        const USDtoPLN = 4.14;
        const USDtoEUR = 0.93;
        const USDtoUSD = 1;

        const PLNtoEUR = 0.22;
        const PLNtoUSD = 0.24;
        const PLNtoPLN = 1;

        if (from === "EUR") {
            if (to === "PLN") {
                return amount * EURtoPLN;
            } else if (to === "USD") {
                return amount * EURtoUSD;
            } else {
                return amount * EURtoEUR;
            }
        } else if (from === "USD") {
            if (to === "PLN") {
                return amount * USDtoPLN;
            } else if (to === "EUR") {
                return amount * USDtoEUR;
            } else {
                return amount * USDtoUSD;
            }
        } else {
            if (to === "EUR") {
                return amount * PLNtoEUR;
            } else if (to === "USD") {
                return amount * PLNtoUSD;
            } else {
                return amount * PLNtoPLN;
            }
        }
    };

    const updateResultText = (result, to) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${to}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const fromElement = document.querySelector(".js-from");
        const toElement = document.querySelector(".js-to");
        const amountElement = document.querySelector(".js-amount");

        const from = fromElement.value;
        const to = toElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(from, to, amount);

        updateResultText(result, to);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}