/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 02 > 02-08
// The spread operator
/*function calculate(action, ...values) {
 var total = 0;

 for (var value of values) {

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

 console.log(calculate('add', 1, 2, 3, 4, 5));*/

// Spreading array
/*var sourse = [5, 6, 7];
 var target = [1, 2, 3, 4, ...sourse, 8, 9];
 console.log(target);*/

// Spreading array
/*var list1 = [1,3,4,5];
 var list2 = [6,7,8];

 list1.push(...list2);
 console.log(list1);*/


// Chapter 02 > 02-09
// Computed properties
/*const osPrefix = 'os_';

 var support = {
 [osPrefix + 'Windows']: isSupported('Windows'),
 [osPrefix + 'iOS']: isSupported('iOS'),
 [osPrefix + 'Android']: isSupported('Android')
 }

 function isSupported(os) {
 return Math.random() >= 0.5;
 }

 console.log(support);*/

// Chapter 3 > 03-01
// JavaScript types
/*var animal = {
    name: "Fido",
    species: "Dog",
    age: 5,
    speak: function () {
        console.log('Woof! Woof!');
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

makeAnimalSpeak(animal);*/

// Chapter 3 > 03-03
// Specifying JavaScript types

/*function totalLength(x: (any[] | string), y: (string | any[])): number {
    return x.length + y.length;
}*/

// Chapter 3 > 03-05
// Overloading function. Didn't understand. Need to be detailed.
function totalLenght (x: string, y: string): number
function totalLenght (x: any[], y: any[]): number

totalLenght("amber", "lemura");


