"use strict";
const skills = ['Dev', 'DevOps', 'testing'];
const skills1 = ['Dev', 'DevOps', 5];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '!')
    .reduce((a, b) => a + b);
console.log(res);
