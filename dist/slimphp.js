"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datetime = exports.isUndefined = exports.isNull = exports.isFloat = exports.isInt = exports.isString = void 0;
function isString(n) {
    return typeof n === 'string';
}
exports.isString = isString;
function isInt(n) {
    return n % 1 === 0;
}
exports.isInt = isInt;
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
exports.isFloat = isFloat;
function isNull(n) {
    return n === null;
}
exports.isNull = isNull;
/**
 * js
 */
function isUndefined(n) {
    return typeof n === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * @example datetime('Y-m-d H:i:s')
 */
function datetime(format) {
    if (format === void 0) { format = 'Y-m-d H:i:s'; }
    var date = new Date();
    var splitted = format.split('');
    var result = [];
    splitted.forEach(function (char) {
        var value = '';
        switch (char) {
            case 'Y':
                value = date.getFullYear().toString();
                break;
            case 'y':
                value = date.getFullYear().toString().slice(-2);
                break;
            case 'm':
                value = ("0" + (date.getMonth() + 1)).slice(-2);
                break;
            case 'd':
                value = ("0" + date.getDate()).slice(-2);
                break;
            case 'H':
                value = ("0" + date.getHours()).slice(-2);
                break;
            case 'i':
                value = ("0" + date.getMinutes()).slice(-2);
                break;
            case 's':
                value = ("0" + date.getSeconds()).slice(-2);
                break;
            default:
                value = char;
        }
        result.push(value);
    });
    return result.join('');
}
exports.datetime = datetime;
