function add(a,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function sum(a, b){
    return a / b;
}

const allBtns = document.querySelectorAll('.num-btn');
allBtns.forEach( element => {
  element.addEventListener('click', myFunction);
});

function myFunction(e) {
    const value = e.target.value;
    document.getElementById("entered-num").innerHTML = value;
}