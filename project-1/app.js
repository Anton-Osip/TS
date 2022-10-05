"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('VASYA');
console.log(user);
user.name = 'Petya';
console.log(user);
