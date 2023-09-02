const formElement = document.querySelector(".js-form");
const fromElement = document.querySelector(".js-from");
const toElement = document.querySelector(".js-to");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");

const EURtoPLN = 4.47;
const EURtoUSD = 1.08;
const EURtoEUR = 1;

const USDtoPLN = 4.14;
const USDtoEUR = 0.93;
const USDtoUSD = 1;

const PLNtoEUR = 0.22;
const PLNtoUSD = 0.24;
const PLNtoPLN = 1;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const from = fromElement.value;
    const to = toElement.value;
    const amount = +amountElement.value;
    let result;

    if (from === "EUR") {
        if (to === "PLN") {
            result = amount * EURtoPLN;
        } else if (to === "USD") {
            result = amount * EURtoUSD;
        } else {
            result = amount * EURtoEUR;
        }
    } else if (from === "USD") {
        if (to === "PLN") {
            result = amount * USDtoPLN;
        } else if (to === "EUR") {
            result = amount * USDtoEUR;
        } else {
            result = amount * USDtoUSD;
        }
    } else {
        if (to === "EUR") {
            result = amount * PLNtoEUR;
        } else if (to === "USD") {
            result = amount * PLNtoUSD;
        } else {
            result = amount * PLNtoPLN;
        }
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${to}`;
})