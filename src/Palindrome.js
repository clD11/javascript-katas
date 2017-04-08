String.prototype.containsPalindrome = function() {
		
	var getCharacterFrequency = function (charArr) {		
		var frequency = {};		
		charArr.forEach(function(c) {
			if (frequency[c]) {
				++frequency[c];
			} else {
				frequency[c] = 1;
			}
		});		
		return frequency;
	}

	var isOddNumber = function (num) {
		return num % 2 !== 0;
	}
	
	var charArr = this.toLowerCase().split("");
	var frequency = getCharacterFrequency(charArr);
	var odds = 0;

	for (const key of Object.keys(frequency)) {
		if (isOddNumber(frequency[key])) {
			if (++odds > 1) {				
				return false;
			}
		}
	}
	
	return true;		
} 

