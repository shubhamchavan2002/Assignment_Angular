function SecMax(Arr) {
    var max = Arr[0];
    var Secondmax = Arr[1];
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        if (max < Arr[i]) {
            Secondmax = max;
            max = Arr[i];
        }
        else if (max > Arr[i] && Secondmax < Arr[i]) {
            Secondmax = Arr[i];
        }
    }
    return Secondmax;
}
var Max = [23, 6, 7, 4, 5, 7];
var Result = 0;
Result = SecMax(Max);
console.log("Second Maximum : " + Result);
