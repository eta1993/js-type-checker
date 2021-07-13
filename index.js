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
    const begin = 8;
    const type  = Object.prototype.toString.call(value);
    const end   = type.length - 1;
    return type.substring(begin, end).toLowerCase();
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

function getSize(value) {
    const type = getType(value);
    if (type === "object") {
        return (
            (type === "array")
            ? value.length
            : Object.keys(value).length
        );
    }
    return 0;
}

const isObjectEmpty = (object) => (getSize(object) === 0);

module.exports = {
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
    isFunction,
    isNull,
    isNumber,
    isObject,
    isObjectEmpty,
    isString,
    isUndefined
};
