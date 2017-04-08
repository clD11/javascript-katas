describe("When given an integer", function() {

	it("should return I when given 1", function () {
	    expect(convert.numberToRomanNumeral(1)).toBe("I");
	});
	
	it("should return IV when given 4", function () {
	    expect(convert.numberToRomanNumeral(4)).toBe("IV");
	});
	
	it("should return V when given 5", function () {
	    expect(convert.numberToRomanNumeral(5)).toBe("V");
	});
	
	it("should return VIII when given 8", function () {
	    expect(convert.numberToRomanNumeral(8)).toBe("VIII");
	});
	
	it("should return IX when given 9", function () {
	    expect(convert.numberToRomanNumeral(9)).toBe("IX");
	});
	
	it("should return X when given 10", function() {
		expect(convert.numberToRomanNumeral(10)).toBe("X");
	});
	
	it("should return XVII when given 17", function() {
		expect(convert.numberToRomanNumeral(17)).toBe("XVII");
	});
	
	it("should return XXI when given 21", function() {
		expect(convert.numberToRomanNumeral(21)).toBe("XXI");
	});
	
	it("should return XXVIII when given 28", function() {
		expect(convert.numberToRomanNumeral(28)).toBe("XXVIII");
	});
	
	it("should return XL when given 40", function() {
		expect(convert.numberToRomanNumeral(40)).toBe("XL");
	});
	
	it("should return XCVII when given 97", function() {
		expect(convert.numberToRomanNumeral(97)).toBe("XCVII");
	});
	
	it("should return CIII when given 103", function() {
		expect(convert.numberToRomanNumeral(103)).toBe("CIII");
	});
});




