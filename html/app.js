/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 6 "Generics" >
// Video01 "Introducing generics".
function clone(value) {
    var serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
var test1 = {
    id: 1,
    name: "Pick up my car",
    state: false
};
console.log(clone(125));
console.log(clone("double"));
console.log(clone(test1));
//# sourceMappingURL=app.js.map