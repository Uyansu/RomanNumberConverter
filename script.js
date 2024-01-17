const outputDiv = document.getElementById("output");
const inputEl = document.getElementById("number");
const converBtn = document.getElementById("convert-btn");


let myArr = []
let currentValue = ""

const checkInput = (input) => {
    
    outputDiv.classList.remove("hidden");
    if(input === "") {
        return outputDiv.innerText = "Please enter a valid number";
    }
    if(input < 1) {
        return outputDiv.innerText = "Please enter a number greater than or equal to 1";
    }
    if(input > 3999) {
        return outputDiv.innerText = "Please enter a number less than or equal to 3999";
    }
    numberToConvert(input);
    outputDiv.innerText = `${currentValue}`;
    myArr = []
    

}

const numberToConvert = (input) => {
    
    currentValue = myArr.join("");
    if(input === 0){
        return;
    } else if(input >= 1000) {
        myArr.push("M");
        return numberToConvert(input - 1000) + input;
    } else if(input >= 900) {
        myArr.push("CM");
        return numberToConvert(input - 900) + input;
    } else if(input >= 500) {
        myArr.push("D");
        return numberToConvert(input - 500) + input;
    } else if(input >= 400) {
        myArr.push("CD");
        return numberToConvert(input - 400) + input;
    } else if(input >= 100){
        myArr.push("C");
        return numberToConvert(input - 100) + input;
    } else if (input >= 90) {
        myArr.push("XC");
        return numberToConvert(input - 90) + input;
    } else if(input >= 50) {
        myArr.push("L");
        return numberToConvert(input - 50) + input;
    } else if(input >= 40) {
        myArr.push("XL");
        return numberToConvert(input - 40) + input;
    } else if(input >= 10) {
        myArr.push("X");
        return numberToConvert(input - 10) + input;
    } else if(input >= 9) {
        myArr.push("IX");
        return numberToConvert(input - 9) + input;
    } else if(input >= 5) {
        myArr.push("V");
        return numberToConvert(input - 5) + input;
    } else if(input >= 4) {
        myArr.push("IV");
        return numberToConvert(input -4) + input;
    } else {
        myArr.push("I");
        return numberToConvert(input - 1) + input;
    }
    
}

converBtn.addEventListener("click", () => {
    checkInput(inputEl.value);
})

