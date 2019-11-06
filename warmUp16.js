// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

/*
for(var j = 0; j < newArr.length; j++){
		if(newArr[j] === 'b'){
			newArr.splice(j, 1);
			secondArr.push(newArr[j]);
			if(newArr[j] === 'a'){
				newArr.splice(j, 1);
				secondArr.push(newArr[j]);
				if(newArr[j] === 'l'){
					newArr.splice(j, 1);
					secondArr.push(newArr[j]);
					if(newArr[j] === 'l'){
						newArr.splice(j, 1);
						secondArr.push(newArr[j]);
						if(newArr[j] === 'o'){
							newArr.splice(j, 1);
							secondArr.push(newArr[j]);
							if(newArr[j] === 'n'){
								newArr.splice(j, 1);
								secondArr.push(newArr[j]);
								result++;
							}
						}
					}
				}
			}
		}
	}
*/

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function formBallon(text){
	var newArr = [];
	var secondArr = [];
	var result = 0;
	var arr = text.split('');
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === 'b' || arr[i] === 'a' || arr[i] === 'l' || arr[i] === 'l' || arr[i] === 'o' || arr[i] === 'n'){
			newArr.push(arr[i]);
		}
	}
	for(var j = 0; j < newArr.length; j++){
		if(newArr.includes('b') && newArr.includes('a') && newArr.includes('l') && newArr.includes('l') && newArr.includes('o') && newArr.includes('n')){
			newArr.splice(j, 6)
			result += 1;
		}	
	}
	
	return result;
}