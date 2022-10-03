"use strict";
function logId(id) {
    console.log(id);
}
logId(1);
logId('ghjk');
logId(true);
function logId1(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function lgMultiplaeIds(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
}
