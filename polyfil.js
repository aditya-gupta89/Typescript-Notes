"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [2, 3, 5, 6, 4, 23, 3, 15, 77, 56, 24, 45];
// Polyfill for Filter Method 
var filter = function (arr, predictor) {
    var temp = [];
    arr.forEach(function (item) {
        if (predictor(item))
            temp.push(item);
    });
    return temp;
};
var predictor = function (item) { return item > 15; };
console.log(filter(arr, predictor));
// Polyfill for Map Method 
var map = function (arr, modifier) {
    var temp = [];
    arr.forEach(function (item) {
        temp.push(modifier(item));
    });
    return temp;
};
var modifier = function (item) { return item * 2; };
console.log(map(arr, modifier));
