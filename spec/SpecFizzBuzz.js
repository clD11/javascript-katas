describe("when given a number between 1 and 100", function() {
    
    it("should return Fizz for multiples of 3", function() {        
        expect(fizzBuzz.getResult(3)).toBe("Fizz");
    });

    it("should return Buzz for multiples of 5", function() {        
        expect(fizzBuzz.getResult(5)).toBe("Buzz");
    });

    it("should return FizzBuzz for multiples of 5 and 3", function() {        
        expect(fizzBuzz.getResult(15)).toBe("FizzBuzz");
    });

    it("should return argument when not divisible by 3 or 5", function() {        
        expect(fizzBuzz.getResult(2)).toBe(2);
    });
});