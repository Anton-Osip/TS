"use strict";
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 10] = "IN_PROCESS";
    statusCode[statusCode["FAILD"] = 100] = "FAILD";
})(statusCode || (statusCode = {}));
// enum statusCode {
// 	SUCCESS,
// 	IN_PROCESS,
// 	FAILD,
// }
const res = {
    message: 'blablabla',
    statusCode: statusCode.SUCCESS,
};
//1 - успех
//2 - в процессе
//3 - отклонен
