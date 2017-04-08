describe("When given an arabic numeral", function() {

	var numeralArabicPairs = [
		["103", "CIII"],
		["100", "C"],
		["97", "XCVII"],
		["90", "XC"],
		["50", "L"],
		["40", "XL"],
		["28", "XXVIII"],
		["10", "X"],
		["9", "IX"],
		["8", "VIII"],
		["5", "V"],
		["4", "IV"],
		["1", "I"]
	];

	it("should return the equivalent roman numeral", function () {
		numeralArabicPairs.forEach(function(pair) {
			expect(convert.numberToRomanNumeral(parseInt(pair[0]))).toBe(pair[1]);
		});	    
	});	
});