/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 6 "Generics" >
// Video02 "Creating generic classes".
var KeyValuePair = (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(1, 'First');
var pair2 = new KeyValuePair('bla-bla', 'yellow');
var pair3 = new KeyValuePair('Second', new Date(Date.now()));
console.log(pair1.key.valueOf());
//# sourceMappingURL=app.js.map