"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstName: 'Anton',
    surName: 'Osipchyk',
    sity: 'Minsk',
    age: 25,
};
console.log(getFullName(user));
