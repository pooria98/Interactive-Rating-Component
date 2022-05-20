const container = document.querySelector('.container');
const resultContainer = document.querySelector('.result-container');
const numbers = document.querySelectorAll(".number");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const submitBtn = document.querySelector("button");
const resultText = document.getElementById('result');

let resultValue;

// rating hover color
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('mouseover', () => {
        for (let j = i; j >= 0; j--) {
            numbers[j].classList.add('colored');
        }
    });
    numbers[i].addEventListener('mouseout', () => {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.remove('colored');
        }
    });
}

// rating selection color
// setting the rate value
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        resultValue = i+1;
        numbers.forEach((item) => {
            item.classList.remove('selected');
        })
        for (let j = i; j >= 0; j--) {
            numbers[j].classList.add('selected');
        }
    });
}

// check if the user has selected a rating or not
// clear the rating container and show result container with the selecter rating
submitBtn.addEventListener("click", () => {
    if (!number1.classList.contains('selected') &&
        !number2.classList.contains('selected') &&
        !number3.classList.contains('selected') &&
        !number4.classList.contains('selected') &&
        !number5.classList.contains('selected')) {
        alert('please select a number first');
    } else {
        resultText.innerText = resultValue;
        container.style.display = 'none';
        resultContainer.style.display = 'flex';
    }
});