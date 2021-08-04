"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.str_replace = exports.sprintf = exports.date = exports.is_undefined = exports.is_null = exports.is_float = exports.is_int = exports.is_string = exports.is_array = void 0;
var FatalError_1 = __importDefault(require("./FatalError"));
function is_array(n) {
    return Array.isArray(n);
}
exports.is_array = is_array;
function is_string(n) {
    return typeof n === 'string';
}
exports.is_string = is_string;
function is_int(n) {
    return n % 1 === 0;
}
exports.is_int = is_int;
function is_float(n) {
    return Number(n) === n && n % 1 !== 0;
}
exports.is_float = is_float;
function is_null(n) {
    return n === null;
}
exports.is_null = is_null;
/** only js */
function is_undefined(n) {
    return typeof n === 'undefined';
}
exports.is_undefined = is_undefined;
/**
 * @link https://www.php.net/manual/en/function.date
 */
function date(format) {
    var dater = new Date();
    var splitted = format.split('');
    var result = [];
    splitted.forEach(function (char) {
        var value = '';
        switch (char) {
            case 'Y':
                value = dater.getFullYear().toString();
                break;
            case 'y':
                value = dater.getFullYear().toString().slice(-2);
                break;
            case 'm':
                value = ("0" + (dater.getMonth() + 1)).slice(-2);
                break;
            case 'd':
                value = ("0" + dater.getDate()).slice(-2);
                break;
            case 'H':
                value = ("0" + dater.getHours()).slice(-2);
                break;
            case 'i':
                value = ("0" + dater.getMinutes()).slice(-2);
                break;
            case 's':
                value = ("0" + dater.getSeconds()).slice(-2);
                break;
            default:
                value = char;
        }
        result.push(value);
    });
    return result.join('');
}
exports.date = date;
/**
 * `s`: string
 * `d`: integer
 * TODO `f`: float
 * TODO `x`: hex
 */
var REG_SPECIFIER = /%(?<digits>[\d\.]+?)?(?<type>s|d)/ig;
/**
 * @link https://www.php.net/manual/en/function.sprintf.php
 */
function sprintf(format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // check Specifier
    if (REG_SPECIFIER.test(format) === false) {
        return format;
    }
    var captured = null;
    var result = [];
    while (captured = REG_SPECIFIER.exec(format) !== null) {
        switch (captured[2]) {
            case 's':
                format = format.substring(0);
            default:
        }
    }
    return format;
}
exports.sprintf = sprintf;
/**
 * @link https://www.php.net/manual/en/function.str-replace.php
 **/
function str_replace(search, replace, subject, count) {
    if (count === void 0) { count = null; }
    if (!is_array(search) && is_array(replace)) {
        throw new FatalError_1.default('Argument #2 (replace) must be of type string when argument #1 (search) is a string');
    }
    var returnArray = is_array(subject);
    if (!is_array(search)) {
        search = [search];
    }
    if (!is_array(replace)) {
        replace = [replace];
    }
    if (!is_array(subject)) {
        subject = [subject];
    }
    for (var indexSubject in subject) {
        var result = subject[indexSubject];
        for (var indexSearch in search) {
            result = result.replace(search[indexSearch], replace[indexSearch]);
        }
        subject[indexSubject] = result;
    }
    return returnArray ? subject : subject[0];
}
exports.str_replace = str_replace;
/**
 * @Link https://www.php.net/manual/en/function.time.php
 */
function time() {
    return Math.floor(Date.now() / 1000);
}
exports.time = time;
