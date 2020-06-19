// Create constructor

function Person(name, age, hobbies, eyeColor) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.eyeColor = eyeColor;
}

Person.prototype.nationality = 'Indonesia';

Person.prototype.greeting = function () {
    return `Hello, my Name is ${this.name}`;
};

// create instance
let myDad = new Person('Agus', 60, ['gardening', 'watching movies'], 'black');
let myMom = new Person('Hefi', 50, ['ngaji'], 'black');

console.log(myDad);
console.log(myDad.nationality);
console.log(myDad.greeting());
console.log(myMom);
console.log(myMom.nationality);
console.log(myMom.greeting());

// Create custom method to Number
Number.prototype.times = function (num) {
    return this * num;
};

let number = 3;

console.log(number.times(3));

// Create custom method to String

String.prototype.firstCharUpperCased = function () {
    let firstChar = this.slice(0, 1).toUpperCase();

    return `${firstChar}${this.slice(1)}`;
};

console.log('makan'.firstCharUpperCased());

console.log(Array.prototype);
