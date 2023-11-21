const $numberButtons = document.querySelectorAll('#js-input-num button');
const $operatorButtons = document.querySelectorAll('#js-operator button');
const $controllerButtons = document.querySelectorAll('#js-controller button');

const $result = document.getElementById("js-result");

let strNum = "noVal";
let oldNum = "noVal";
let oldOpe = "noOpe";

//addEvent
$numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        handleNumberClick(button.dataset.number);
    })
});

$operatorButtons.forEach(button => {
    button.addEventListener("click",function () {
        handleOperatorClick(button.dataset.operator);
    })
});

$controllerButtons.forEach(button => {
    button.addEventListener("click",function () {
        handleControllerClick(button.dataset.controller);
    })
});

//handler
function handleNumberClick(number) {
    if (strNum === "noVal") {
        strNum="";
    }

    strNum+=number;
    indicateResult(strNum);
    console.log("入力"+strNum);
}

function handleOperatorClick(operator) {
    enter(oldOpe);
    oldOpe=operator;
}

function handleControllerClick(con) {
    if (con === "cancel") {
        strNum="noVal";
        indicateResult("");
    } else if (con === "enter") {
        enter(oldOpe);
    } else if (con === "reset") {
        oldNum="noVal";
        strNum="noVal";
        indicateResult("結果");
    }
}

function strToF(str) {
    strNum="noVal";
    return parseFloat(str);
}

function enter(operator) {
    if (strNum === "noVal") { 
        console.log("srtNum = noVal");
        return;
    }

    let num = strToF(strNum);

    if (oldNum !== "noVal") {
        num = calculation(oldNum,num,operator);
        console.log("calculationed"+num);
    }

    oldNum = num;
    indicateResult(num);
}

function calculation(a,b,operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "×") {
        return a * b;
    } else if (operator === "÷") {
        return a / b;
    } 
}

function indicateResult(num) {
    $result.textContent = num;
}