/*jslint
    node
    white
*/

/*property
    prototype
    toString
    call
    length
    substring
    toLowerCase
    isArray
    indexOf
    keys
    exports
    freeze
    inArray
    isAsyncFunction
    isBoolean
    isDate
    isEmpty
    isFloat
    isFunction
    isInt
    isNaN
    isNull
    isNumber
    isObject
    isObjectEmpty
    isRequest
    isResponse
    isString
    isTruthy
    isUndefined
    test
    toFloat
    toInt
*/

// https://github.com/eta1993/js-type-checker.git

"use strict";

function getType(value) {
    const type  = Object.prototype.toString.call(value);
    return type.substring(8, type.length - 1).toLowerCase();
}

function test(pattern, value) {
    return new RegExp(pattern).test(`${value}`);
}

const inArray     = (needle, haystack) => (haystack.indexOf(needle) !== -1);
const isArray     = (value) => Array.isArray(value);
const isBoolean   = (value) => (getType(value) === "boolean");
const isDate      = (value) => (getType(value) === "date");
const isString    = (value) => (getType(value) === "string");
const isNumber    = (value) => (getType(value) === "number");
const isFunction  = (value) => (
    getType(value) === "function" || getType(value) === "asyncfunction"
);
const isAsyncFunction  = (value) => (getType(value) === "asyncfunction");
const isNull      = (value) => (getType(value) === "null");
const isUndefined = (value) => (getType(value) === "undefined");
const isObject    = (value) => (getType(value) === "object");
const isResponse  = (value) => (getType(value) === "response");
const isRequest   = (value) => (getType(value) === "request");
const isInt       = (value) => test("^([+-]?[0-9]+)+$", value);
const isFloat     = (value) => (
    test("^([+-]?[0-9]+[\\.]+[0-9]+)+$", value)
    && `${value}`.split(".").length === 2 //jslint-ignore-line
);

function toInt(value, fallback) {
    if (Number.isNaN(fallback) || !isInt(fallback)) {
        fallback = NaN;
    }
    return parseInt(value) || fallback;
}

function toFloat(value, fallback) {
    if (Number.isNaN(fallback) || !isFloat(fallback)) {
        fallback = NaN;
    }
    return parseFloat(value) || fallback;
}

function getSize(value) {
    const type = getType(value);
    if (type === "object") {
        return Object.keys(value).length;
    } else if (type === "array") {
        return value.length;
    } else {
        return 0;
    }
}

const isObjectEmpty = (object) => (getSize(object) === 0);

export default Object.freeze({
    inArray,
    isArray,
    isAsyncFunction,
    isBoolean,
    isDate,
    isEmpty(value) {
        if (!value) {
            return true;
        }
        if (isObject(value)) {
            return isObjectEmpty(value);
        }
        return false;
    },
    isFloat,
    isFunction,
    isInt,
    isNull,
    isNumber,
    isObject,
    isObjectEmpty,
    isRequest,
    isResponse,
    isString,
    isUndefined,
    toFloat,
    toInt
});