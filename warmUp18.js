// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function replace(str){
	var count = 1;
	var j;
	var arrOfChars = str.split('');
	for (var i = 0; i < arrOfChars.length; i++) { // What i am trying to do is when iterate
		j = i - 1; // it will make a variable called j that is less than i so when it is equal to 1 it will replace the index after it to i++
		if(arrOfChars[j] === 1){ // I am missing something
			arrOfChars.splice(i, 1, i++)
		}
		arrOfChars.splice(i, 1, count)
	}
	return arrOfChars;
}