/**
 * Created by pskrebnev on 19.09.2016.
 */
/*var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

for (var index in array) {
    var strValue = array[index];
    console.log(`${index}: ${strValue}`);
}

for (var value of array) {
    console.log(`== ${value} ==`);
}*/
//Video 06-Lambdas
/*var container = document.getElementById('container');

function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click',
    () => {
        this.count += 1;
        el.innerHTML = this.count;
    })
}

new Counter(container);*/
// This code works:
var filtered = [-1, 0, 1, 2, 3, -5, 8].filter(function (x) { return x > 0; });
for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
    var value = filtered_1[_i];
    console.log("" + value);
}
// But this doesn't:
var filtered1 = [-1, 0, 1, 2, 3, -5, 8].filter(function (x) { return x > 0; });
for (var _a = 0, filtered1_1 = filtered1; _a < filtered1_1.length; _a++) {
    var value = filtered1_1[_a];
    console.log("" + value);
}
//# sourceMappingURL=app.js.map