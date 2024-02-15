// взяли кнопки и счетчик в константу через id
const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterElement = document.getElementById("count");
const resetBtnElement = document.getElementById("reset"); // resetBtnElement

let counter = 0;
const plusHandler = () => {
    counter++;
    counterElement.innerText = counter; // увеличение значение счетчика на +1
}

const minusHandler = () => {
    counterElement.innerText = --counter; // уменьшение значение счетчика на -1
}

const resetHandler = () => {
    counter = 0;
    counterElement.innerText = counter;
}
plusBtnElement.addEventListener("click", plusHandler);
minusBtnElement.addEventListener("click", minusHandler);
resetBtnElement.addEventListener("click", resetHandler);