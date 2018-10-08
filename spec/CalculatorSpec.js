describe ("Calculator", function(){

    beforeEach(function(){
        calculator = new Calculator();
    })

    it("can add two numbers together", function(){
        expect(calculator.add(2,2)).toBe(4);
    })

    it("can subtract two numbers", function(){
        expect(calculator.subtract(5,3)).toBe(2);
    })

    it("can multiply two numbers together", function(){
        expect(calculator.multiply(5,3)).toBe(15);
    })

    it("can divide two numbers", function(){
        expect(calculator.divide(10,2)).toBe(5);
    })

    it("can not divide by 0", function(){
        expect(function(){
            calculator.divide(10,0);
        }).toThrowError("cannot divide by 0");
    })

    it("can find a number to the power of another number", function(){
        expect(calculator.toThePowerOf(10,3)).toBe(1000);
    })

    it("can work out the square root of a number", function(){
        expect(calculator.squareRoot(9)).toBe(3);
    })


})