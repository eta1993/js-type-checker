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
    inArray
    isBoolean
    isDate
    isEmpty
    isFunction
    isNull
    isNumber
    isObject
    isObjectEmpty
    isString
    isTruthy
    isUndefined
*/

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
const isFunction  = (value) => (getType(value) === "function");
const isNull      = (value) => (getType(value) === "null");
const isUndefined = (value) => (getType(value) === "undefined");
const isObject    = (value) => (getType(value) === "object");
const isInt       = (value) => test("^([+-]?[0-9]+)+$", value);
const isFloat     = (value) => (
    test("^([+-]?[0-9]+[\.]+[0-9]+)+$", value)
    && `${value}`.split(".").length === 2 //jslint-ignore-line
);

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

module.exports = Object.freeze({
    inArray,
    isArray,
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
    isString,
    isUndefined
});