"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fun(value) {
    if (typeof value === 'string') {
        value.toUpperCase();
        console.log(value.toUpperCase());
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}
fun('rahim sikdar');
fun(3434.34343);
//# sourceMappingURL=TypeNarrowing.js.map