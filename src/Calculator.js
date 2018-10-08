function Calculator (var1, var2)
{

}

Calculator.prototype = {

    add: function(var1, var2)
    {
        return var1 + var2;
    },

    subtract: function(var1, var2)
    {
        return var1 - var2;
    },

    multiply: function(var1, var2)
    {
        return var1 * var2;
    },

    divide: function(var1, var2)
    {
        if (var1 === 0 || var2 === 0)
        {
            throw new Error("cannot divide by 0");
        }
        return var1 / var2;
    },

    toThePowerOf: function(var1, var2)
    {
        return Math.pow(var1, var2);

    },

    squareRoot: function(var1)
    {
        return Math.sqrt(var1);
    }
}