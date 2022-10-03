"use strict";
const user = {
    login: 'a@mail.com',
    // password: 'gfhj', Опциональный пароль  Может быть а может и не быть
};
function multiply(a, b) {
    if (!b) {
        return a * a;
    }
    return a * b;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // может быть андефаин
    const f = user.password.type; // точно пароль будет
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
