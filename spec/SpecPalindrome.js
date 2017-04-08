describe("When containsPalindrome is called", function() {
	
	it("should return true when given anna", function() {
		expect("anna".containsPalindrome()).toBe(true);
	});
	
	it("should return false when given xzy", function() {
		expect("xyz".containsPalindrome()).toBe(false);
	});
	
	it("should return true when given anadddn", function() {
		expect("anadddn".containsPalindrome()).toBe(true);
	});
	
	it("should return true when given anadn", function() {
		expect("anadn".containsPalindrome()).toBe(true);
	});
	
	it("should return true when given anADddN", function() {
		expect("anADddN".containsPalindrome()).toBe(true);
	});
	
});