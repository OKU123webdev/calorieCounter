// back button

document.getElementById("backBtn").addEventListener("click", goBack); //event listener for backBtn

function goBack() { //function to use history object
    history.back();
}

//plus, minus buttons

let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let inputField = document.getElementById("input");

minusButton.addEventListener("click", event => {
    event.preventDefault();
    let currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
});

plusButton.addEventListener("click", event => {
    event.preventDefault();
    let currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});

