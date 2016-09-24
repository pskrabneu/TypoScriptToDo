/**
 * Created by pskrebnev on 19.09.2016.
 */
var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];
for (var index in array) {
    var strValue = array[index];
    console.log(index + ": " + strValue);
}
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log("== " + value + " ==");
}
//# sourceMappingURL=app.js.map