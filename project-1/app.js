"use strict";
//never никогда такого не произойдет
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    //никогда не вернеться функция
    while (true) { }
}
function rec() {
    //никогда не вернеться функция
    rec();
}
const a = undefined;
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default: //проверка что мы сюда не попадем с другим типам
            const s = action;
            throw new Error('Нет такого action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('gfhj');
}
