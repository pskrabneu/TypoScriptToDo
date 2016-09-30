/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 02 > 02-07
// Destructing
// Doesn't work
var array = [123, "Pick up my code", false];
var id = array[0], title = array[1], completed = array[2];
console.log(id + ", " + title + ", " + completed);
// Works with NodeJS 6.5 and higher!
/*var a = 1;
var b = 3;
console.log(`Before a = ${a}, b = ${b}`);

[a, b] = [b, a];
console.log(`After a = ${a}, b = ${b}`);*/
// Doesn't have a much sense: i.e. "asdd".toString()
/*var y = 5;
console.log(y);
console.log(`${y}`);*/
//# sourceMappingURL=app.js.map