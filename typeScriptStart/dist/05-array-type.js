"use strict";
//数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
/////
// function sum(...args){
//     //  这样ts的写法就会报错
//     return args.reduce((prev,current)=>prev+current,0)
// }
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    //  这样ts的写法就会报错, 这里只需要添加一个数字类型的注解就行
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
//# sourceMappingURL=05-array-type.js.map