# js-type-checker

JS native types checker using `Object.prototype.toString.call`

## Checkers
- isArray(`value: ?Array`)`: Boolean`
- isBoolean(`value: ?Boolean`)`: Boolean`
- isDate(`value: ?Date`)`: Boolean`
- isEmpty(`value: ?{Object|Array|*}`)`: Boolean`
  - Checks for empty objects, array, and falsy values 
- isFunction(`value: ?Function`)`: Boolean`
- isNull(`value: ?Null`)`: Boolean`
- isNumber(`value: ?Number`)`: Boolean`
- isObject(`value: ?Object`)`: Boolean`
- isString(`value: ?String`)`: Boolean`
- isUndefined(`value: ?Undefined`)`: Boolean`
- isInt(`value: ?Undefined`)`: Boolean`
- isFloat(`value: ?Undefined`)`: Boolean`

## Helpers
- inArray(`needle: String`, `haystack: Array`)`: Boolean`
- isObjectEmpty(`value: ?Object`)`: Boolean`
- isTruthy(`value: *`)`: Boolean`
- toInt(`value: ?Undefined`, `fallback: Int`)`: Int`
- isFloat(`value: ?Undefined`, `fallback: Float`)`: Float`
