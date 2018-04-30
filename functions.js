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