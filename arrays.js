//lazy solution, using built in reverse function
function printReverse(arr) {
	var result = arr.reverse();
	console.log(result);
};
//solution with for loop
function isUniform (arr) {
	var firstItem = arr[0];
	var result = true;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== firstItem) {
			result = false;
			break;
		} else {
			continue;
		}
	}
	return result;
};

function sumArray(arr) {
	var result = 0;
	arr.forEach( function(element) {
		result += element;
	});
	return result;
};

function max(arr) {
	var buf = arr[0];
	arr.forEach(function(element) {
		if (element > buf) {
			buf = element;
		};
	});
	return buf;
};

