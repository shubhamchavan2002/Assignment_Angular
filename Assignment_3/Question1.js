var Arthmatic = /** @class */ (function () {
    function Arthmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arthmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arthmatic.prototype.Subtraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arthmatic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arthmatic.prototype.Division = function () {
        var Ans;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arthmatic;
}());
var obj1 = new Arthmatic(10, 5);
var obj2 = new Arthmatic(50, 4);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Addition();
console.log(Result);
Result = obj1.Subtraction();
console.log(Result);
Result = obj2.Subtraction();
console.log(Result);
Result = obj1.Multiplication();
console.log(Result);
Result = obj2.Multiplication();
console.log(Result);
Result = obj1.Division();
console.log(Result);
Result = obj2.Division();
console.log(Result);
