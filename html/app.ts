/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 6 "Generics" >
// Video02 "Creating generic classes".

class KeyValuePair<TKey, TValue> {
    constructor(
        public key: TKey,
        public value: TValue
    )
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, string>('bla-bla', 'yellow');
let pair3 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));

console.log(pair1.key.valueOf());






