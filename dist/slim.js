"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleDatetime = exports.isUndefined = exports.isFloat = exports.isInt = exports.isString = void 0;
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
function isUndefined(n) {
    return typeof n === 'undefined';
}
exports.isUndefined = isUndefined;
function getLocaleDatetime() {
    return new Date().toLocaleDateString('ko-KR', { "timeZone": 'UTC' });
}
exports.getLocaleDatetime = getLocaleDatetime;
