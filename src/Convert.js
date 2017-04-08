function Convert() {
	return {
		numberToRomanNumeral : function (num) {			
			
			var numeral = "";			
			var count = parseInt(num)
				
			while (count > 0) {				
				
				if (count >= 100) {
					numeral = numeral.concat("C");
					count = count - 100;
				} else if (count >= 90) {
					numeral = numeral.concat("XC");
					count = count - 90;
				} else if (count >= 50) {
					numeral = numeral.concat("L");
					count = count - 50;
				} else if (count >= 40) {
					numeral = numeral.concat("XL");
					count = count - 40;					
				} else if (count >= 10) {
					numeral = numeral.concat("X");
					count = count - 10;					
				} else {
				
					if (count >= 9) {
						numeral = numeral.concat("IX");
						count = count - 9;
					}
				
					if (count >= 5) {
						numeral = numeral.concat("V");
						count = count - 5;
					}
					
					if (count >= 4) {
						numeral = numeral.concat("IV");
						count = count - 4;
					}
					
					if (count >= 1) {
						numeral = numeral.concat("I");
						count = count - 1;
					}
				}
			}			
			return numeral;
		}		
	}
}

