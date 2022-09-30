"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstName: 'Anton',
    surName: 'Osipchyk',
    sity: 'Minsk',
    age: 25,
    skills: {
        dev: true,
        devops: true,
    },
};
console.log(getFullName(user));
