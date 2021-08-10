// function add(a,b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function sum(a, b){
//     return a / b;
// }

// function operator(operate, a ,b){
//     switch (operate) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }

const buttons = document.querySelector('.calculator-keys');
const input = document.querySelector('#input');
buttons.addEventListener('click', event =>{
    if(!event.target.closest('.button')) return;

    const button = event.target;
    const buttonValue = button.textContent;
    const inputValue = input.textContent;

    if(inputValue == '0') {
        input.textContent = buttonValue;
    }
    else{
        input.textContent = inputValue + buttonValue;
    }
})