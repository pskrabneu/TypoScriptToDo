/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 02 > 02-08
// The spread operator
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'substract':
                total -= value;
                break;
        }
    }
    return total;
}
console.log(calculate('add', 1, 2, 3, 4, 5));
// Spreading array
var sourse = [5, 6, 7];
var target = [1, 2, 3, 4].concat(sourse, [8, 9]);
console.log(target);
// Spreading array
var list1 = [1, 3, 4, 5];
var list2 = [6, 7, 8];
list1.push.apply(list1, list2);
console.log(list1);
//# sourceMappingURL=app.js.map