/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000  */

function solution(roman){
	var result = 0; // First create variable to save the result
	var newArr = roman.split(''); // And of course split the string to an array
	for(var i = 0; i < newArr.length; i++){
		// Here We Use Switch to check the roman numeral 
		// in numbers and add them to the result
		switch(newArr[i]){
			case 'I':
				result += 1;
				break;
			case 'V':
				result += 5;
				break;
			case 'X':
				result += 10;
				break;
			case 'L':
				result += 50;
				break;
			case 'C':
				result += 100
				break;
			case 'D':
				result += 500
				break;
			case 'M':
				result += 1000
				break;						
		}
	}
	return result;
}      
/*    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

function toCamelCase(string){
	var newArr = string.split(''); // Split the string
	for(var i = 0; i < newArr.length; i++){ // iterate Over String
		var count = i + 1;
    	if(newArr[i] === '-' || newArr[i] === '_'){ // Check if anything inside string is - OR _
    		newArr.splice(i, 1); // Splice it (if Excict)
    		// And here is the trick 
    		// if there is - OR _ in the string ==> splice it
    		// and transform the element after it to UpperCase
        	newArr.splice(i, 1, newArr[count - 1].toUpperCase()) 
    	}
	}

	// Join The array to String AND
	// Return IT
	return newArr.join('');
}



/*    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(arr){
	var filterdArr = []; // Create newArray to save the filterd elements 
	for(var i = 0; i < arr.length; i++){ // ITERATE
		if(typeof arr[i] === 'number'){
			filterdArr.push(arr[i]); // Push only the numbers to the newArr
		}
	}
	// Return IT
	return filterdArr;
}