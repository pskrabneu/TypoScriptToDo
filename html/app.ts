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
    console.log(`${index}: ${strValue}`);
}

for (var value of array) {
    console.log(`== ${value} ==`);
}



