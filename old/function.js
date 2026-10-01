"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fun = (num1, num2) => {
    return num1 + num2;
};
console.log(fun(20, 30));
let add;
add = (num1, num2) => {
    return num1 + num2;
};
console.log('Add: ', add(20, 30));
let mult = (a, b) => {
    console.log(a, b);
};
mult(1);
const addTypeFun = (a, b, callback) => {
    callback();
    return a + b;
};
function ths() {
    console.log('df');
}
console.log(addTypeFun(50, 60, ths));
//# sourceMappingURL=function.js.map