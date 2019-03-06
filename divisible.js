// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

function findDigits(n) {
	let numArr = n.toString().split("");
	let total = 0;
	numArr.map(num => n % num === 0 ? total += 1 : total);
	return total;
}