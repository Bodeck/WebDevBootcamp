function isEven(number) {
    if (typeof(number) === "number") {
        return number % 2 === 0;
    } else {
        return "Error! You need provide number";
    }
}

function factorial(number) {
    var factor = 1;
    for (var i = number; i > 0; i--) {
        factor *= i;
    }
    return factor;
}
//kebab to snake
//using loop
function kebabToSnake(string) {
    while (string.indexOf('-') !== -1) {
        string = string.replace('-', '_');
    }
    return string;
}
//using regex
function kebabToSnake(string) {
    string = string.replace(/-/g, '_');
    return string;
}
//write fuction to reverse string
function reverseNum(num){
    let buf = '';
    num = num.toString();
    for (let i = num.length - 1; i > 0; i--){
        buf += num[i]; 
    };
    return buf;
}
function reverseNum2(num) {
    num = num.toString();
    let buf = num.split("").reverse().join("");
    return buf;
}

//check if string is palidrome
function isPalidrome(string){ 
    return string === string.split("").reverse().join("");
}
function strCombinations (string){
    string = string.split("");
    var combo = [];
    string.forEach( function(element, index) {
        combo.push(element);
        for (var i = index + 1; i < string.length; i++) {
            
        };
    });
    return combo
}