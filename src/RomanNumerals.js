var convert = (function () {

	var numeralArabicPairs = [
		["100", "C"],
		["90", "XC"],
		["50", "L"],
		["40", "XL"],
		["10", "X"],
		["9", "IX"],
		["5", "V"],
		["4", "IV"],
		["1", "I"]
	];

	return {
		numberToRomanNumeral : function (number) {			
			var numeral = "";
			var count = parseInt(number);

			numeralArabicPairs.forEach(function(pair) {
				while (count >= parseInt(pair[0])) {
					numeral = numeral.concat(pair[1]);
					count -= pair[0];
				}
			});

			return numeral;
		}
	}
})();