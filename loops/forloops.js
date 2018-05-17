//1 - print all number between -10 and 19
console.log("print all number between -10 and 19")
for (var i = -10; i <= 19; i++) {
    console.log(i);
};

console.log("PRINT ALL EVEN NUMBER BETWEEN 10 AND 40");
//2 - print all even numbers between 10 and 40

for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
};
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
};

var numbers = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < numbers.length ; i++) {
	if(numbers[i] % 3 === 0) {
		console.log(numbers[i]);
    }
};