"use strict";
function logId(id) {
    //функция ничего не возвращает void
    console.log(id);
}
const a = logId(1); //a:void
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => { };
const f2 = () => {
    return true;
};
const b = f2();
console.log(b);
const skills = ['dev', 'DecOps'];
const user = {
    s: ['s'],
};
skills.forEach(skill => user.s.push(skill));
