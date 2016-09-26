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
var container = document.getElementById('container');

function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click',
    () => {
        this.count += 1;
        el.innerHTML = this.count;
    })
}

new Counter(container);






